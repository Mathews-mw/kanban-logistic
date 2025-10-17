import { api } from '@/_http/api-client';

interface IRequest {
	clientId: string;
	name?: string;
	email?: string;
	vat?: string;
	phone?: string;
}

interface IResponse {
	message: string;
}

export async function updateClient({ clientId, name, email, vat, phone }: IRequest) {
	const response = await api
		.put(`clients/${clientId}/update`, {
			json: {
				name,
				email,
				vat,
				phone,
			},
		})
		.json<IResponse>();

	return response;
}
