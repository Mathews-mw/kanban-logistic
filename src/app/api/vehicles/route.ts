import z from 'zod';
import { NextRequest } from 'next/server';

import { prisma } from '@/lib/prisma';
import { Prisma } from '@/generated/client';

const queryParamsSchema = z.object({
	page: z.optional(z.coerce.number()).default(1),
	per_page: z.optional(z.union([z.literal('all'), z.coerce.number()])).default(10),
	search: z.string().optional().nullish(),
	transporter_id: z.string().optional().nullish(),
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

	const { page, per_page, order_by, search, transporter_id } = queryParamsSchema.parse({
		page: searchParams.get('page'),
		per_page: searchParams.get('per_page'),
		order_by: searchParams.get('order_by'),
		search: searchParams.get('search'),
		transporter_id: searchParams.get('transporter_id'),
	});

	try {
		let orderByQuery: Prisma.VehicleOrderByWithAggregationInput | undefined = { createdAt: 'asc' };

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

		const query: Prisma.VehicleFindManyArgs = {
			where: {
				transporterId: transporter_id ?? undefined,
				plateNumber: search
					? {
							contains: search,
							mode: 'insensitive',
						}
					: undefined,
			},
		};

		const isPerPageNumber = typeof per_page === 'number';

		const [vehicles, count] = await prisma.$transaction([
			prisma.vehicle.findMany({
				where: query.where,
				orderBy: orderByQuery,
				take: isPerPageNumber ? per_page : undefined,
				skip: isPerPageNumber ? (page - 1) * per_page : undefined,
			}),
			prisma.vehicle.count({
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
			vehicles,
		});
	} catch (error) {
		console.error('Listing vehicles route error: ', error);

		return new Response(JSON.stringify(error), {
			status: 400,
		});
	}
}
