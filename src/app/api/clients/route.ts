import z from 'zod';
import { NextRequest } from 'next/server';

import { prisma } from '@/lib/prisma';
import { Prisma } from '../../../../prisma/generated/client';

const queryParamsSchema = z.object({
	page: z.optional(z.coerce.number()).default(1),
	per_page: z.optional(z.union([z.literal('all'), z.coerce.number()])).default(10),
	search: z.string().optional().nullish(),
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

	const { page, per_page, order_by, search } = queryParamsSchema.parse({
		page: searchParams.get('page'),
		per_page: searchParams.get('per_page'),
		order_by: searchParams.get('order_by'),
		search: searchParams.get('search'),
	});

	try {
		let orderByQuery: Prisma.ClientOrderByWithAggregationInput | undefined = { name: 'desc' };

		switch (order_by) {
			case 'asc':
				orderByQuery = { name: 'asc' };
				break;
			case 'desc':
				orderByQuery = { name: 'desc' };
				break;
			default:
				orderByQuery = undefined;
		}

		const query: Prisma.ClientFindManyArgs = {
			where: {
				name: search
					? {
							contains: search,
							mode: 'insensitive',
						}
					: undefined,
			},
		};

		const isPerPageNumber = typeof per_page === 'number';

		const [clients, count] = await prisma.$transaction([
			prisma.client.findMany({
				where: query.where,
				orderBy: orderByQuery,
				take: isPerPageNumber ? per_page : undefined,
				skip: isPerPageNumber ? (page - 1) * per_page : undefined,
			}),
			prisma.client.count({
				where: query.where,
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
			clients,
		});
	} catch (error) {
		console.error('Listing clients route error: ', error);

		return new Response(JSON.stringify(error), {
			status: 400,
		});
	}
}
