import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

interface IParamsProps {
	params: {
		token: string;
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

	const { token } = await params;

	z.string().parse(token);

	try {
		const ticket = await prisma.ticket.findFirst({
			where: { shareToken: token, status: 'SHARED' },
			select: {
				number: true,
				createdAt: true,
				netWeight: true,
				unit: true,
				supplier: { select: { name: true, vatNumber: true } },
				customer: { select: { name: true, vatNumber: true } },
				transporter: { select: { name: true, vatNumber: true } },
				vehicle: { select: { plateNumber: true } },
				product: { select: { code: true, description: true } },
				documents: true,
			},
		});

		if (!ticket) {
			return NextResponse.json({ message: 'Ticket Not Found!', code: 'RESOURCE_NOT_FOUND_ERROR' }, { status: 404 });
		}

		return Response.json({ ticket });
	} catch (error) {
		console.error('Share ticket route error: ', error);

		return new Response(JSON.stringify(error), {
			status: 400,
		});
	}
}
