import { api } from '@/_http/api-client';

interface IRequest {
	name: string;
	email: string;
	vat: string;
	phone?: string;
}

interface IResponse {
	message: string;
	client: {
		id: string;
		vat: string;
	};
}

export async function createClient({ name, email, vat, phone }: IRequest) {
	const response = await api
		.post('clients/create', {
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
