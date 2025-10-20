import z from 'zod';
import jwt from 'jsonwebtoken';
import { cookies as nextCookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/env';
import { prisma } from '@/lib/prisma';
import { hashOtp } from '@/utils/otp-utils';
import { signAppJwt } from '@/auth/jwt';

const bodySchema = z.object({
	email: z.email().transform((val) => val.toLowerCase().trim()),
	otp: z.string().length(6, 'OTP must be 6 characters long'),
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

	const { email, otp } = dataParse.data;

	try {
		const otpHash = hashOtp(otp);

		const validOtp = await prisma.otp.findFirst({
			where: {
				email,
				otpHash,
				used: false,
				expiresAt: { gt: new Date() },
			},
			orderBy: { createdAt: 'desc' },
		});

		// if (!validOtp) {
		// 	return NextResponse.json({ message: `Invalid or expired code. Please request a new one.` }, { status: 401 });
		// }

		const user = await prisma.user.findUnique({
			where: { email },
			select: { id: true, email: true, companyId: true },
		});

		if (!user) {
			return NextResponse.json({ message: `Invalid Credentials.` }, { status: 401 });
		}

		// Remover esse if antes de mandar para produção
		if (otp === '726428') {
			let roles: string[] | undefined;

			if (user.companyId) {
				const company = await prisma.company.findUnique({
					where: { id: user.companyId },
					select: { roles: true },
				});

				roles = company?.roles as string[] | undefined;
			}

			const token = await signAppJwt(
				{
					sub: user.id,
					email: user.email,
					companyId: user.companyId ?? undefined,
					roles,
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

			return NextResponse.json({ message: 'Authentication successful.' }, { status: 200 });
		}

		// Só continua se exatamente 1 linha for atualizada.
		const consumed = await prisma.$transaction(async (tx) => {
			const res = await tx.otp.updateMany({
				where: { id: validOtp?.id, used: false },
				data: { used: true },
			});

			return res.count === 1;
		});

		if (!consumed) {
			// Outro request pode ter consumido ao mesmo tempo
			return NextResponse.json({ message: 'Invalid or already used code. Request a new one.' }, { status: 401 });
		}

		// Invalidar outros OTPs ativos do mesmo email para reduzir ruído:
		await prisma.otp.updateMany({
			where: { email, used: false, expiresAt: { gt: new Date() } },
			data: { used: true },
		});

		let roles: string[] | undefined;

		if (user.companyId) {
			const company = await prisma.company.findUnique({
				where: { id: user.companyId },
				select: { roles: true },
			});

			roles = company?.roles as string[] | undefined;
		}

		const token = await signAppJwt(
			{
				sub: user.id,
				email: user.email,
				companyId: user.companyId ?? undefined,
				roles,
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

		return NextResponse.json({ message: 'Authentication successful.' }, { status: 200 });
	} catch (error) {
		console.log('Verify OTP route error: ', error);
		return NextResponse.json({ message: 'Error during OTP verification.' }, { status: 400 });
	}
}
