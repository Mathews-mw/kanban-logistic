import { api } from '@/_http/api-client';

interface IRequest {
	addressId: string;
	street?: string;
	number?: string;
	complement?: string;
	city?: string;
	country?: string;
	zip?: string;
	isPrimary?: boolean;
}

interface IResponse {
	message: string;
}

export async function updateAddress({
	addressId,
	street,
	number,
	complement,
	city,
	country,
	zip,
	isPrimary,
}: IRequest) {
	const response = await api
		.put(`address/${addressId}/update`, {
			json: {
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
