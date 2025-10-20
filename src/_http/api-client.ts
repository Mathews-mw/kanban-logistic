import ky, { HTTPError } from 'ky';
import { type CookiesFn, getCookie } from 'cookies-next';

import { env } from '@/env';
import { authEmitter } from '@/events/auth-events';
import { ApiExceptionsError } from './error-handler/api-exceptions-error';

interface ApiExceptionsErrorWithExtras extends ApiExceptionsError {
	response?: Response;
	payload?: unknown;
}

export const api = ky.create({
	prefixUrl: `${env.NEXT_PUBLIC_API_BASE_URL}/api`,
	credentials: 'include',
	timeout: 30000,
	hooks: {
		beforeError: [
			async (error) => {
				if (error instanceof HTTPError) {
					const status = error.response?.status ?? 0;

					// tente json; senão, texto; senão, vazio
					let payload = undefined;

					try {
						payload = await error.response.clone().json();
					} catch {
						try {
							const txt = await error.response.clone().text();
							payload = txt ? { message: txt } : undefined;
						} catch {}
					}

					// eventos de auth (não interrompem a criação do erro)
					if (status === 401) authEmitter.emit('redirectToLogin');
					if (status === 403) authEmitter.emit('forbidden');

					// **SEMPRE** retorne ApiExceptionsError
					const apiErr = new ApiExceptionsError(
						payload?.message ?? error.message ?? 'Request error',
						payload?.code ?? 'HTTP_ERROR',
						status
					);
					// útil para debug/telemetria

					(apiErr as ApiExceptionsErrorWithExtras).response = error.response;
					(apiErr as ApiExceptionsErrorWithExtras).payload = payload;

					// Cast to satisfy ky's BeforeErrorHook expected type
					return apiErr as unknown as HTTPError;
				}

				return error;
			},
		],
		beforeRequest: [
			async (request) => {
				let cookieStore: CookiesFn | undefined;

				// window === 'undefined' => indica que o trecho de código está rodando no server side
				if (typeof window === 'undefined') {
					const { cookies: serverCookies } = await import('next/headers');

					const severSideCookies = await serverCookies();

					request.headers.set('cookie', severSideCookies.toString());

					cookieStore = serverCookies;
				}

				const token = await getCookie('@kanban:session_token', { cookies: cookieStore });

				if (token) {
					request.headers.set('Authorization', `Bearer ${token}`);
				}
			},
		],
		beforeRetry: [
			async ({ error }) => {
				if (error instanceof ApiExceptionsError && error.code === 'AUTH_EXPIRED_TOKEN_ERROR') {
					try {
						await ky.patch(`${env.NEXT_PUBLIC_API_BASE_URL}/api/auth/refresh-token`, {
							credentials: 'include',
						});
					} catch {
						authEmitter.emit('logout');
					}
				}

				if (error instanceof HTTPError) {
					if (error.response.status === 401) {
						authEmitter.emit('redirectToLogin');
					}

					if (error.response.status === 403) {
						authEmitter.emit('forbidden');
					}
				}
			},
		],
	},
});
