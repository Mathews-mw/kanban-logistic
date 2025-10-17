import { cookies as nextCookies, headers } from 'next/headers';

import { env } from '@/env';
import { redirect } from 'next/navigation';
import { getUserProfile } from '@/_http/users/get-user-profile';

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
		redirect('/sign-in');
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

	const companyId = h.get('x-company-id');

	const roles = (h.get('x-user-roles') || '')
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);

	return { userId, email, companyId, roles };
}
