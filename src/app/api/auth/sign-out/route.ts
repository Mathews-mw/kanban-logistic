import { cookies as nextCookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/env';

export async function GET(request: NextRequest) {
	const cookies = await nextCookies();

	const redirectUrl = request.nextUrl.clone();

	redirectUrl.pathname = '/sign-in';

	cookies.delete(env.AUTH_COOKIE_NAME);

	return NextResponse.redirect(redirectUrl);
}
