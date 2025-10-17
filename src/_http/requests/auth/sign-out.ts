import { api } from '@/_http/api-client';

export async function signOut(): Promise<void> {
	await api.get('auth/sign-out');
}
