import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

interface IParamsProps {
	params: {
		id: string;
	};
}

export async function GET(request: NextRequest, { params }: IParamsProps) {
	if (request.method !== 'GET') {
		return Response.json(
			{
				error: 'Method Not Allowed!',
			},
			{ status: 405 }
		);
	}

	const { id } = await params;

	z.string().parse(id);

	try {
		const client = await prisma.ticket.findUnique({
			where: {
				id,
			},
			include: {
				supplier: true,
				customer: true,
				transporter: true,
				vehicle: true,
				deliveryPlant: true,
				product: true,
				documents: true,
				events: {
					orderBy: { createdAt: 'desc' },
				},
			},
		});

		if (!client) {
			return NextResponse.json({ message: 'Client Not Found!', code: 'RESOURCE_NOT_FOUND_ERROR' }, { status: 404 });
		}

		return Response.json(client);
	} catch (error) {
		console.error('Get client details route error: ', error);

		return new Response(JSON.stringify(error), {
			status: 400,
		});
	}
}
