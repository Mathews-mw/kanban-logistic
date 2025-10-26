import { api } from '@/_http/api-client';

interface IRequest {
	userId: string;
	email?: string;
	name?: string;
}

interface IResponse {
	message: string;
}

export async function updateUser({ userId, email, name }: IRequest) {
	const response = await api
		.put(`users/${userId}/update`, {
			json: {
				email,
				name,
			},
		})
		.json<IResponse>();

	return response;
}
