import z from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { generateOtp, hashOtp } from '@/utils/otp-utils';

const bodySchema = z.object({
	email: z.email(),
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

	const { email } = dataParse.data;

	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (!user) {
			return NextResponse.json({ message: `User with email "${email}" not found.` }, { status: 401 });
		}

		const otpExpiresInSeconds = 5 * 60; // 5 min

		const otp = generateOtp();
		const otpHash = hashOtp(otp);
		const expiresAt = new Date(Date.now() + otpExpiresInSeconds * 1000);

		console.log('OTP:', otp);

		await prisma.otp.create({
			data: {
				email,
				otpHash,
				expiresAt,
			},
		});

		// send email with OTP code
		// await sendOtpEmail({ to: email, otp, name: user.name });

		return Response.json(
			{
				message: 'E-mail with access code sent successfully. Please check your inbox.',
				otp_expires_in_seconds: otpExpiresInSeconds,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log('Request OTP route error: ', error);
		return NextResponse.json({ message: 'Error during OTP request.' }, { status: 400 });
	}
}
