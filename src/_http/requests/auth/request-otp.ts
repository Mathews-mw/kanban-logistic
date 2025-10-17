import { api } from '@/_http/api-client';

interface IRequest {
	email: string;
}

interface IResponse {
	message: string;
	otp_expires_in_seconds: number;
}

export async function requestOtp({ email }: IRequest) {
	const response = await api
		.post('auth/request-otp', {
			json: {
				email,
			},
		})
		.json<IResponse>();

	return response;
}
