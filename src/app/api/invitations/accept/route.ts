import z from 'zod';
import { createHash } from 'node:crypto';
import { cookies as nextCookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/env';
import { prisma } from '@/lib/prisma';
import { signAppJwt } from '@/auth/jwt';
import { verifyAccessToken } from '@/auth/auth';
import { MembershipRole } from '@/generated/client';
import { ForbiddenError } from '@/_http/errors/forbidden-error';
import { BadRequestError } from '@/_http/errors/bad-request-errors';
import { InternalServerError } from '@/_http/errors/internal-server-error';

const bodySchema = z.object({
	token: z.string(),
	company_id: z.string(),
});

export async function POST(request: NextRequest) {
	if (request.method !== 'POST') {
		return Response.json(
			{
				error: 'Method not allowed!',
			},
			{ status: 405 }
		);
	}

	const cookies = await nextCookies();

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

	const { token, company_id } = dataParse.data;

	const tokenHash = createHash('sha256').update(token).digest('hex');

	try {
		const { userId } = await verifyAccessToken(request);

		const invite = await prisma.invitation.findFirst({
			where: {
				companyId: company_id,
				tokenHash,
				acceptedAt: null,
				revokedAt: null,
				expiresAt: { gt: new Date() },
			},
			select: { id: true, email: true, roles: true, companyId: true },
		});

		if (!invite) {
			throw new BadRequestError('Invalid or expired invitation.', 'BAD_REQUEST_ERROR');
		}

		// validar se e-mail do user bate com o convite
		const user = await prisma.user.findUnique({ where: { id: userId } });

		if (!user || user.email.toLowerCase() !== invite.email.toLowerCase()) {
			throw new ForbiddenError('The invitation does not match your email address.', 'FORBIDDEN_ERROR');
		}

		await prisma.$transaction(async (tx) => {
			await tx.userCompanyMembership.upsert({
				where: { userId_companyId: { userId, companyId: invite.companyId } },
				update: { roles: { set: invite.roles as MembershipRole[] }, isActive: true },
				create: { userId, companyId: invite.companyId, roles: invite.roles as MembershipRole[] },
			});

			await tx.invitation.update({
				where: { id: invite.id },
				data: { acceptedAt: new Date() },
			});

			// setar defaultCompanyId
			await tx.user.update({
				where: { id: userId },
				data: { defaultCompanyId: invite.companyId },
			});
		});

		// emitir novo access token com activeCompanyId = inv.companyId
		const token = await signAppJwt(
			{
				sub: userId,
				email: invite.email,
				activeCompanyId: invite.companyId,
				roles: invite.roles,
			},
			'8h'
		);

		cookies.set(env.AUTH_COOKIE_NAME, token, {
			path: '/',
			httpOnly: true,
			maxAge: 8 * 60 * 60 /* 8 hours */,
			sameSite: 'lax',
			secure: env.NODE_ENV === 'production',
		});

		return NextResponse.json({ ok: true }, { status: 200 });
	} catch (error) {
		if (error instanceof InternalServerError) {
			return NextResponse.json({ code: error.code, message: error.message }, { status: error.status });
		}

		return NextResponse.json({ message: 'Something went wrong... Please, try again later.' }, { status: 500 });
	}
}
