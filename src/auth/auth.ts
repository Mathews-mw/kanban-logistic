import { cookies as nextCookies, headers } from 'next/headers';

import { env } from '@/env';
import { redirect } from 'next/navigation';
import { getUserProfile } from '@/_http/requests/users/get-user-profile';
import { NextRequest } from 'next/server';
import { UnauthorizedError } from '@/_http/errors/unauthorized-error';

export type AuthSession = {
	userId: string;
	email: string;
	companyId?: string | null;
	roles: string[];
} | null;

export async function auth() {
	const cookies = await nextCookies();

	const token = cookies.get(env.AUTH_COOKIE_NAME);

	if (!token) {
		redirect('/');
	}

	try {
		const user = await getUserProfile();

		return { user };
	} catch (error) {
		console.log('auth error: ', error);
		// Dependendo do erro de autenticação, pode ser válido tentar fazer o refresh token aqui ou redirecionar para tela de login
	}

	redirect('/api/auth/sign-out');
}

export async function isAuthenticated() {
	const cookies = await nextCookies();

	return !!cookies.get(env.AUTH_COOKIE_NAME)?.value;
}

export async function getAuthFromHeaders(): Promise<AuthSession> {
	const h = await headers();

	const userId = h.get('x-user-id');
	const email = h.get('x-user-email');

	if (!userId || !email) return null;

	const companyId = h.get('x-active-company-id');

	const roles = (h.get('x-user-roles') || '')
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);

	return { userId, email, companyId, roles };
}

export async function verifyAccessToken(request: NextRequest) {
	const userId = request.headers.get('x-user-id');
	const email = request.headers.get('x-user-email');
	const companyId = request.headers.get('x-active-company-id');

	const roles = (request.headers.get('x-user-roles') || '')
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);

	if (!userId || !email || !companyId) {
		throw new UnauthorizedError('No credentials present in the header', 'UNAUTHORIZED_ERROR');
	}

	return { userId, email, companyId, roles };
}
