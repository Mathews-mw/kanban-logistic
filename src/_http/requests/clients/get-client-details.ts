import { api } from '@/_http/api-client';
import { IClientDetails } from '@/@types/client';

interface IRequest {
	clientId: string;
}

export async function getClientDetails({ clientId }: IRequest): Promise<IClientDetails> {
	const response = await api.get(`clients/${clientId}/details`).json<IClientDetails>();

	return response;
}
