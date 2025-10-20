import z from 'zod';
import { randomBytes } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { BadRequestError } from '@/_http/errors/bad-request-errors';
import { UnauthorizedError } from '@/_http/errors/unauthorized-error';
import { ResourceNotFoundError } from '@/_http/errors/resource-not-found-error';

interface IParamsProps {
	params: {
		id: string;
	};
}

function canTransition(from: string, to: string) {
	const map: Record<string, string[]> = {
		DRAFT: ['READY'],
		READY: ['DRAFT', 'SHARED'],
		SHARED: ['ARCHIVED'],
		ARCHIVED: [],
	};
	return map[from]?.includes(to) ?? false;
}

const bodySchema = z.object({
	to: z.enum(['DRAFT', 'READY', 'SHARED', 'ARCHIVED']),
});

export async function PATCH(request: NextRequest, { params }: IParamsProps) {
	if (request.method !== 'PATCH') {
		return Response.json(
			{
				error: 'Method not allowed!',
			},
			{ status: 405 }
		);
	}

	const actorId = request.headers.get('x-user-id');

	if (!actorId) {
		throw new UnauthorizedError('Unauthorized', 'UNAUTHORIZED_ERROR');
	}

	const { id: ticketId } = await params;

	z.string().parse(ticketId);

	const dataBody = await request.json();

	const dataParse = await bodySchema.safeParse(dataBody);

	if (!dataParse.success) {
		return NextResponse.json(
			{
				message: 'Error validating form data. Please check the submitted payload.',
				error: dataParse.error.issues,
			},
			{ status: 400 }
		);
	}

	const { to } = dataParse.data;

	try {
		const ticket = await prisma.ticket.findUnique({
			where: { id: ticketId },
			include: { documents: true },
		});

		if (!ticket) {
			throw new ResourceNotFoundError('Ticket not found.', 'RESOURCE_NOT_FOUND_ERROR');
		}

		if (!canTransition(ticket.status, to)) {
			throw new BadRequestError(`Invalid transition from ${ticket.status} to ${to}`, 'INVALID_TRANSITION');
		}

		// Gate de prontidão (exemplo): precisa de pelo menos 1 arquivo para sair de DRAFT
		if (ticket.status === 'DRAFT' && to === 'READY' && ticket.documents.length === 0) {
			throw new BadRequestError('Attach at least one file (XML/PDF).', 'MISSING_FILES');
		}

		// blocos adicionais para SHARED (ex.: precisa de PDF)
		if (to === 'SHARED' && !ticket.documents.some((f) => f.type === 'PDF')) {
			throw new BadRequestError('PDF file is required to share.', 'MISSING_FILES');
		}

		let shareToken: string | null = null;

		if (to === 'SHARED' && !ticket.shareToken) {
			shareToken = randomBytes(16).toString('hex');
		}

		await prisma.$transaction(async (tx) => {
			await tx.ticket.update({
				data: { status: to, shareToken, sharedAt: shareToken ? new Date() : null },
				where: { id: ticketId },
			});

			await tx.ticketEventLog.create({
				data: {
					ticketId,
					actorId,
					action: 'STATUS_CHANGE',
					from: ticket.status,
					to,
				},
			});
		});

		return Response.json(
			{
				message: 'Ticket status successfully updated',
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error('Update ticket status route error: ', error);

		if (error instanceof BadRequestError || error instanceof ResourceNotFoundError) {
			return NextResponse.json({ code: error.code, message: error.message }, { status: error.status });
		}

		return NextResponse.json({ message: 'Something went wrong... Please, try again later.' }, { status: 500 });
	}
}
