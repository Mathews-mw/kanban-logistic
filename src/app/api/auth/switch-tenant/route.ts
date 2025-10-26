import z from 'zod';
import { cookies as nextCookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/env';
import { prisma } from '@/lib/prisma';
import { signAppJwt } from '@/auth/jwt';
import { getAuthFromHeaders } from '@/auth/auth';
import { assertMembership } from '@/auth/guard-helpers';
import { UnauthorizedError } from '@/_http/errors/unauthorized-error';
import { InternalServerError } from '@/_http/errors/internal-server-error';
import { ResourceNotFoundError } from '@/_http/errors/resource-not-found-error';

const bodySchema = z.object({
	company_id: z.string(),
});

export async function PATCH(request: NextRequest) {
	if (request.method !== 'PATCH') {
		return Response.json(
			{
				error: 'Method not allowed!',
			},
			{ status: 405 }
		);
	}

	const cookies = await nextCookies();

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

	const { company_id } = dataParse.data;

	try {
		if (!authHeaders) {
			throw new UnauthorizedError('No credentials present in the header.', 'UNAUTHORIZED_ERROR');
		}

		if (!authHeaders.companyId) {
			throw new UnauthorizedError('No Company credentials present in the header.', 'UNAUTHORIZED_ERROR');
		}

		await assertMembership(authHeaders.userId, authHeaders.companyId);

		const company = await prisma.company.findUnique({
			where: { id: company_id },
		});

		if (!company) {
			throw new ResourceNotFoundError('Company not found', 'RESOURCE_NOT_FOUND_ERROR');
		}

		// gere novo access token com activeCompanyId trocado
		const token = await signAppJwt(
			{
				sub: authHeaders.userId,
				email: authHeaders.email,
				activeCompanyId: company.id,
				roles: company.roles,
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

		return NextResponse.json({ ok: true });
	} catch (error) {
		if (error instanceof InternalServerError) {
			return NextResponse.json({ code: error.code, message: error.message }, { status: error.status });
		}

		return NextResponse.json({ message: 'Something went wrong... Please, try again later.' }, { status: 500 });
	}
}
