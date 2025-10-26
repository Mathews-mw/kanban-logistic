import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { verifyAccessToken } from '@/auth/auth';
import { assertRole } from '@/auth/guard-helpers';
import { InternalServerError } from '@/_http/errors/internal-server-error';

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
	if (request.method !== 'DELETE') {
		return Response.json(
			{
				error: 'Method not allowed!',
			},
			{ status: 405 }
		);
	}

	const { id: invitationId } = params;

	try {
		const { userId, companyId } = await verifyAccessToken(request);

		// quem cria convite precisa poder gerenciar o tenant
		await assertRole(userId, companyId, ['ADMIN', 'SUPPLIER']);

		await prisma.invitation.delete({
			where: { id: invitationId },
		});

		return NextResponse.json({ ok: true }, { status: 204 });
	} catch (error) {
		if (error instanceof InternalServerError) {
			return NextResponse.json({ code: error.code, message: error.message }, { status: error.status });
		}

		return NextResponse.json({ message: 'Something went wrong... Please, try again later.' }, { status: 500 });
	}
}
