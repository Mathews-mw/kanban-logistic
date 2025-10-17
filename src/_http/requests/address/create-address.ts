import { api } from '@/_http/api-client';

interface IRequest {
	clientId: string;
	street: string;
	number: string;
	complement?: string;
	city: string;
	country: string;
	zip: string;
	isPrimary?: boolean;
}

interface IResponse {
	message: string;
	user: {
		id: string;
		vat: string;
	};
}

export async function createAddress({ clientId, street, number, complement, city, country, zip, isPrimary }: IRequest) {
	const response = await api
		.post('address/create', {
			json: {
				clientId,
				street,
				number,
				complement,
				city,
				country,
				zip,
				isPrimary,
			},
		})
		.json<IResponse>();

	return response;
}
