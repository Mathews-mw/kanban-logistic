import { api } from '@/_http/api-client';

interface IRequest {
	addressId: string;
}

interface IResponse {
	message: string;
}

export async function deleteAddress({ addressId }: IRequest) {
	const response = await api.delete(`address/${addressId}/delete`).json<IResponse>();

	return response;
}
