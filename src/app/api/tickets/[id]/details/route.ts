import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { TicketStatusPresenter } from '@/presenters/ticket-status-presenter';

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
		const ticket = await prisma.ticket.findUnique({
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
					include: { actor: true },
					orderBy: { createdAt: 'desc' },
				},
			},
		});

		if (!ticket) {
			return NextResponse.json({ message: 'Ticket Not Found!', code: 'RESOURCE_NOT_FOUND_ERROR' }, { status: 404 });
		}

		const response = {
			...ticket,
			statusText: TicketStatusPresenter.toHTTP(ticket.status),
		};

		return Response.json(response);
	} catch (error) {
		console.error('Get ticket details route error: ', error);

		return new Response(JSON.stringify(error), {
			status: 400,
		});
	}
}
