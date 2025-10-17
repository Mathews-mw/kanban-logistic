import { api } from '@/_http/api-client';

interface IRequest {
	email: string;
	otp: string;
}

export async function verifyOtp({ email, otp }: IRequest) {
	await api.post('auth/verify-otp', {
		json: {
			email,
			otp,
		},
	});
}
