import z from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { Prisma } from '@/generated/client';
import { InternalServerError } from '@/_http/errors/internal-server-error';

const queryParamsSchema = z.object({
	page: z.optional(z.coerce.number()).default(1),
	per_page: z.optional(z.union([z.literal('all'), z.coerce.number()])).default(10),
	to: z.optional(z.email()),
	created_by_id: z.optional(z.string()),
	only_available: z.optional(z.coerce.boolean()).default(false),
});

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
	if (request.method !== 'GET') {
		return Response.json(
			{
				error: 'Method not allowed!',
			},
			{ status: 405 }
		);
	}

	const { id: companyId } = await params;

	const { searchParams } = request.nextUrl;

	try {
		const { page, per_page, to, created_by_id, only_available } = queryParamsSchema.parse({
			page: searchParams.get('page') ?? 1,
			per_page: searchParams.get('per_page') ?? 10,
			to: searchParams.get('to') ?? undefined,
			company_id: searchParams.get('company_id') ?? undefined,
			created_by_id: searchParams.get('created_by_id') ?? undefined,
			only_available: searchParams.get('only_available') ?? false,
		});

		const where: Prisma.InvitationWhereInput = {
			email: to,
			companyId,
			createdById: created_by_id,
			expiresAt: only_available ? { gt: new Date() } : undefined,
			acceptedAt: only_available ? { equals: null } : undefined,
			revokedAt: only_available ? { equals: null } : undefined,
		};

		const isPerPageNumber = typeof per_page === 'number';

		const [invitations, count] = await prisma.$transaction([
			prisma.invitation.findMany({
				include: { company: true, createdBy: true },
				where,
				orderBy: {
					createdAt: 'desc',
				},
				take: isPerPageNumber ? per_page : undefined,
				skip: isPerPageNumber ? (page - 1) * per_page : undefined,
			}),
			prisma.invitation.count({
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

		return NextResponse.json({ pagination, invitations }, { status: 200 });
	} catch (error) {
		console.warn('Listing company invitation route error: ', error);

		if (error instanceof InternalServerError) {
			return NextResponse.json({ code: error.code, message: error.message }, { status: error.status });
		}

		return NextResponse.json({ message: 'Something went wrong... Please, try again later.' }, { status: 500 });
	}
}
