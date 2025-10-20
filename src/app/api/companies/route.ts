import z from 'zod';
import { NextRequest } from 'next/server';

import { prisma } from '@/lib/prisma';
import { Prisma } from '@/generated/client';

const queryParamsSchema = z.object({
	page: z.optional(z.coerce.number()).default(1),
	per_page: z.optional(z.union([z.literal('all'), z.coerce.number()])).default(10),
	search: z.string().optional().nullish(),
	vat: z.string().optional().nullish(),
	role: z.optional(z.union([z.literal('SUPPLIER'), z.literal('CUSTOMER'), z.literal('TRANSPORTER')])).nullish(),
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

	const { searchParams } = request.nextUrl;

	const { page, per_page, order_by, search, vat, role } = queryParamsSchema.parse({
		page: searchParams.get('page'),
		per_page: searchParams.get('per_page'),
		order_by: searchParams.get('order_by'),
		search: searchParams.get('search'),
		vat: searchParams.get('vat'),
		role: searchParams.get('role'),
	});

	try {
		let orderByQuery: Prisma.CompanyOrderByWithAggregationInput | undefined = { createdAt: 'desc' };

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

		const where: Prisma.CompanyWhereInput = {
			name: search
				? {
						contains: search,
						mode: 'insensitive',
					}
				: undefined,
			vatNumber: vat
				? {
						equals: vat,
						mode: 'insensitive',
					}
				: undefined,
			roles: role
				? {
						hasSome: [role],
					}
				: undefined,
		};

		const isPerPageNumber = typeof per_page === 'number';

		const [companies, count] = await prisma.$transaction([
			prisma.company.findMany({
				where: where,
				orderBy: orderByQuery,
				take: isPerPageNumber ? per_page : undefined,
				skip: isPerPageNumber ? (page - 1) * per_page : undefined,
			}),
			prisma.company.count({
				where: where,
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

		return Response.json({
			pagination,
			companies,
		});
	} catch (error) {
		console.error('Listing companies route error: ', error);

		return new Response(JSON.stringify(error), {
			status: 400,
		});
	}
}
