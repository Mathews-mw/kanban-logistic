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
		const client = await prisma.client.findUnique({
			where: {
				id,
			},
			include: {
				address: {
					orderBy: {
						createdAt: 'desc',
					},
				},
			},
		});

		if (!client) {
			return NextResponse.json({ message: 'Client Not Found!' }, { status: 404 });
		}

		return Response.json(client);
	} catch (error) {
		console.log('Get client details route error: ', error);
		return new Response(JSON.stringify(error), {
			status: 400,
		});
	}
}
