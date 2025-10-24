import z from 'zod';
import { NextRequest } from 'next/server';

import { prisma } from '@/lib/prisma';
import { Prisma } from '@/generated/client';
import { TicketStatusPresenter } from '@/presenters/ticket-status-presenter';

const queryParamsSchema = z.object({
	page: z.optional(z.coerce.number()).default(1),
	per_page: z.optional(z.union([z.literal('all'), z.coerce.number()])).default(10),
	q: z.string().optional().nullish(),
	from: z.optional(z.coerce.date()).nullish(),
	to: z.optional(z.coerce.date()).nullish(),
	status: z
		.optional(
			z.union([
				z.literal('DRAFT'),
				z.literal('READY'),
				z.literal('SHARED'),
				z.literal('ARCHIVED'),
				z.literal('PENDING_REGISTRATION'),
				z.literal('AVAILABLE'),
				z.literal('DOWNLOADED'),
				z.literal('CANCELED'),
			])
		)
		.nullish(),
	order_by: z
		.optional(z.enum(['asc', 'desc']))
		.nullish()
		.default('desc'),
});

export async function GET(request: NextRequest) {
	if (request.method !== 'GET') {
		return Response.json(
			{
				error: 'Method Not Allowed',
			},
			{ status: 405 }
		);
	}

	const userId = request.headers.get('x-user-id');
	const companyId = request.headers.get('x-active-company-id');
	const rolesHeader = request.headers.get('x-user-roles') || '';

	const roles = rolesHeader
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);

	if (!userId) {
		return Response.json({ message: 'Unauthorized' }, { status: 401 });
	}
	if (!companyId) {
		return Response.json({ error: 'FORBIDDEN', message: 'User has no company context.' }, { status: 403 });
	}

	const { searchParams } = request.nextUrl;

	try {
		const { page, per_page, order_by, q, status, from, to } = queryParamsSchema.parse({
			page: searchParams.get('page') ?? 1,
			per_page: searchParams.get('per_page') ?? 10,
			order_by: searchParams.get('order_by') ?? 'desc',
			q: searchParams.get('q'),
			status: searchParams.get('status'),
			from: searchParams.get('from'),
			to: searchParams.get('to'),
		});

		const user = await prisma.user.findUnique({
			where: { id: userId },
		});

		// parâmetro opcional para admins: ?scope=all
		const url = new URL(request.url);
		const scope = url.searchParams.get('scope');

		// Admin global pode ver tudo
		const isAdmin = user && user.role === 'ADMIN';
		const viewAll = isAdmin && scope === 'all';

		console.log('isAdmin: ', isAdmin);
		console.log('viewAll: ', viewAll);

		let orderByQuery: Prisma.TicketOrderByWithAggregationInput | undefined = { createdAt: 'desc' };

		switch (order_by) {
			case 'asc':
				orderByQuery = { createdAt: 'asc' };
				break;
			case 'desc':
				orderByQuery = { createdAt: 'desc' };
				break;
			default:
				orderByQuery = undefined;
		}

		const where: Prisma.TicketWhereInput = {};

		if (!viewAll) {
			// Escopo por relação + role
			const canSeeAsSupplier = roles.includes('SUPPLIER');
			const canSeeAsCustomer = roles.includes('CUSTOMER');
			const canSeeAsTransporter = roles.includes('TRANSPORTER');

			const visibility = [];

			if (canSeeAsSupplier) visibility.push({ supplierId: companyId });
			if (canSeeAsCustomer) visibility.push({ customerId: companyId });
			if (canSeeAsTransporter) visibility.push({ transporterId: companyId });

			// fallback: se não tiver nenhum papel reconhecido, não retorna nada
			where.OR = visibility.length ? visibility : [{ id: '__never__' }];
		}

		if (status) {
			where.status = status;
		}

		if (from || to) {
			where.createdAt = { gte: from ? new Date(from) : undefined, lte: to ? new Date(to) : undefined };
		}

		if (q) {
			where.OR = [
				...(where.OR ?? []),
				{ number: { contains: q } },
				{ vehicle: { plateNumber: { contains: q, mode: 'insensitive' } } },
				{ product: { code: { contains: q, mode: 'insensitive' } } },
				{ product: { description: { contains: q, mode: 'insensitive' } } },
			];
		}

		const isPerPageNumber = typeof per_page === 'number';

		console.log('where: ', where);

		const [tickets, count] = await prisma.$transaction([
			prisma.ticket.findMany({
				where,
				orderBy: orderByQuery,
				take: isPerPageNumber ? per_page : undefined,
				skip: isPerPageNumber ? (page - 1) * per_page : undefined,
				select: {
					id: true,
					number: true,
					status: true,
					createdAt: true,
					netWeight: true,
					unit: true,
					customer: { select: { name: true } },
					transporter: { select: { name: true } },
					vehicle: { select: { plateNumber: true } },
					product: { select: { code: true, description: true } },
				},
			}),
			prisma.ticket.count({
				where,
			}),
		]);

		let _perPage = isPerPageNumber ? per_page : 10;

		if (per_page === 'all') {
			_perPage = count;
		}

		const totalPages = Math.ceil(count / _perPage);

		const pagination = {
			page,
			per_page: _perPage,
			total_pages: totalPages,
			total_occurrences: count,
		};

		const ticketsResponse = tickets.map((ticket) => {
			return {
				...ticket,
				statusText: TicketStatusPresenter.toHTTP(ticket.status),
			};
		});

		return Response.json({
			pagination,
			tickets: ticketsResponse,
		});
	} catch (error) {
		console.error('Listing tickets route error: ', error);

		return new Response(JSON.stringify(error), {
			status: 400,
		});
	}
}
