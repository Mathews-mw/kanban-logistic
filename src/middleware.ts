import { NextResponse, type NextRequest } from 'next/server';

import { env } from './env';
import { signAppJwt, verifyAppJwt } from './auth/jwt';

const AUTH_COOKIE = env.AUTH_COOKIE_NAME;

// rotas públicas (liberadas sem autenticação)
const PUBLIC_PATHS = new Set<string>([
	'/',
	'/sign-in',
	'/sign-up',
	'/api/auth/request-otp',
	'/api/auth/verify-otp',
	'/api/share/*',
]);

// prefixos públicos (assets e etc)
const PUBLIC_PREFIXES = ['/_next', '/favicon.ico', '/assets', '/public'];

// janela para refresh (se faltar <= 1h, reemite)
const REFRESH_THRESHOLD_SEC = 60 * 60; // 1h

// tempo absoluto máximo de sessão (ex.: 7 dias) — opcional, pode setando para 0
const ABSOLUTE_MAX_AGE_SEC = 60 * 60 * 24 * 7; // 7d

// rotas que exigem auth
function isPublicPath(pathname: string) {
	if (PUBLIC_PATHS.has(pathname)) return true;
	return PUBLIC_PREFIXES.some((p) => pathname.startsWith(p));
}

function isApiPath(pathname: string) {
	return pathname.startsWith('/api/');
}

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// pula validação para páginas públicas e assets
	if (isPublicPath(pathname)) {
		return NextResponse.next();
	}

	// lê cookie httpOnly
	const token = request.cookies.get(AUTH_COOKIE)?.value;

	if (!token) {
		if (isApiPath(pathname)) {
			return NextResponse.json(
				{ code: 'AUTH_INVALID_TOKEN_ERROR', message: 'Invalid credentials error.' },
				{ status: 401 }
			);
		}

		// não autenticado → redireciona para login
		const url = request.nextUrl.clone();

		url.pathname = '/sign-in';
		url.searchParams.set('next', pathname); // opcional: para pós-login voltar

		return NextResponse.redirect(url);
	}

	try {
		const payload = await verifyAppJwt(token);

		// payload padrão: iat/exp em segundos (UNIX time)
		const nowSec = Math.floor(Date.now() / 1000);
		const exp = typeof payload.exp === 'number' ? payload.exp : 0;
		const iat = typeof payload.iat === 'number' ? payload.iat : nowSec;

		// checagem de tempo absoluto (deslizar sem ultrapassar um teto)
		if (ABSOLUTE_MAX_AGE_SEC > 0 && nowSec - iat > ABSOLUTE_MAX_AGE_SEC) {
			// estourou janela absoluta → força novo login
			const url = request.nextUrl.clone();

			url.pathname = '/sign-in';
			url.searchParams.set('next', pathname);

			const response = NextResponse.redirect(url);

			response.cookies.delete(AUTH_COOKIE);

			return response;
		}

		// Checagem de autorização por role. Ex.: bloquear acesso à /admin se não tiver role "ADMIN"
		if (pathname.startsWith('/admin')) {
			const roles = payload.roles || [];

			if (!roles.includes('ADMIN')) {
				const url = request.nextUrl.clone();

				url.pathname = '/403';

				return NextResponse.rewrite(url); // página de acesso negado
			}
		}

		// Encaminha com cabeçalhos úteis para consumo em APIs / Server Components
		const requestHeaders = new Headers(request.headers);

		if (payload.sub) requestHeaders.set('x-user-id', String(payload.sub));
		if (payload.email) requestHeaders.set('x-user-email', String(payload.email));
		if (payload.activeCompanyId) requestHeaders.set('x-active-company-id', String(payload.activeCompanyId));
		if (Array.isArray(payload.roles)) requestHeaders.set('x-user-roles', payload.roles.join(','));

		const response = NextResponse.next({ request: { headers: requestHeaders } });

		// ——————— REFRESH TOKEN ———————
		const secondsLeft = exp - nowSec;

		if (secondsLeft <= REFRESH_THRESHOLD_SEC) {
			// reemite com mesmo payload “de negócio” e novo exp (8h)
			const freshToken = await signAppJwt(
				{
					sub: String(payload.sub),
					email: String(payload.email),
					companyId: payload.companyId ? String(payload.companyId) : undefined,
					roles: Array.isArray(payload.roles) ? payload.roles : undefined,
				},
				'8h'
			);

			response.cookies.set(AUTH_COOKIE, freshToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'lax',
				path: '/',
				maxAge: 60 * 60 * 8, // 8h
			});
		}

		return response;
	} catch (error) {
		console.log('Middleware auth error: ', error);

		if (isApiPath(pathname)) {
			const response = NextResponse.json(
				{ code: 'AUTH_INVALID_TOKEN_ERROR', message: 'Invalid credentials error.' },
				{ status: 401 }
			);

			response.cookies.delete(AUTH_COOKIE);

			return response;
		}

		// token inválido/expirado → apaga cookie e manda pro login
		const url = request.nextUrl.clone();

		url.pathname = '/sign-in';
		url.searchParams.set('next', pathname);

		const response = NextResponse.redirect(url);

		response.cookies.delete(AUTH_COOKIE);

		return response;
	}
}
