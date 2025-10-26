import z from 'zod';
import dayjs from 'dayjs';
import { createHash, randomBytes } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { getAuthFromHeaders } from '@/auth/auth';
import { MembershipRole } from '@/generated/client';
import { ForbiddenError } from '@/_http/errors/forbidden-error';
import { BadRequestError } from '@/_http/errors/bad-request-errors';
import { assertMembership, assertRole } from '@/auth/guard-helpers';
import { UnauthorizedError } from '@/_http/errors/unauthorized-error';
import { InternalServerError } from '@/_http/errors/internal-server-error';

const bodySchema = z.object({
	email: z.email(),
	roles: z.array(z.string()),
});

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
	if (request.method !== 'POST') {
		return Response.json(
			{
				error: 'Method not allowed!',
			},
			{ status: 405 }
		);
	}

	const { id: companyId } = await params;

	const authHeaders = await getAuthFromHeaders();

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

	const { email, roles } = dataParse.data;

	try {
		if (!authHeaders) {
			throw new UnauthorizedError('No credentials present in the header.', 'UNAUTHORIZED_ERROR');
		}

		if (!authHeaders.companyId) {
			throw new UnauthorizedError('No Company credentials present in the header.', 'UNAUTHORIZED_ERROR');
		}

		// quem cria convite precisa poder gerenciar o tenant
		await assertRole(authHeaders.userId, authHeaders.companyId, ['ADMIN', 'SUPPLIER']);

		await assertMembership(authHeaders.userId, authHeaders.companyId);

		// companyId do path deve ser o tenant que o usuário está gerindo
		if (companyId !== authHeaders.companyId) {
			throw new ForbiddenError('Wrong tenant context', 'FORBIDDEN_ERROR');
		}

		const company = await prisma.company.findUnique({
			where: { id: authHeaders.companyId },
		});

		if (!company) {
			throw new ForbiddenError('Wrong company context', 'FORBIDDEN_ERROR');
		}

		// evitar duplicados ativos
		const existing = await prisma.invitation.findFirst({
			where: {
				companyId: companyId,
				email: email.toLowerCase(),
				acceptedAt: null,
				revokedAt: null,
				expiresAt: { gt: new Date() },
			},
		});

		if (existing) {
			throw new BadRequestError('There is already a valid invitation for this email address.', 'BAD_REQUEST_ERROR');
		}

		// gerar token + hash
		const token = randomBytes(32).toString('hex');
		const tokenHash = createHash('sha256').update(token).digest('hex');

		const invite = await prisma.invitation.create({
			data: {
				companyId: companyId,
				email: email.toLowerCase(),
				roles: roles as MembershipRole[],
				tokenHash,
				expiresAt: dayjs(new Date()).add(10, 'days').toDate(),
				createdById: authHeaders.userId,
			},
		});

		// Aqui é onde deve ser enviado o e-mail com link
		// ex.: https://app.com/invitations/accept?token=...&companyId=...

		return NextResponse.json({ invite_id: invite.id }, { status: 200 });
	} catch (error) {
		if (error instanceof InternalServerError) {
			return NextResponse.json({ code: error.code, message: error.message }, { status: error.status });
		}

		return NextResponse.json({ message: 'Something went wrong... Please, try again later.' }, { status: 500 });
	}
}
