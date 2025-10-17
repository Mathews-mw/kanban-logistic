import { api } from '@/_http/api-client';

interface IRequest {
	addressId: string;
}

interface IResponse {
	message: string;
}

export async function markPrimary({ addressId }: IRequest) {
	const response = await api.patch(`address/${addressId}/mark-primary`).json<IResponse>();

	return response;
}
