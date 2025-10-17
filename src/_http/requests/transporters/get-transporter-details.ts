import { ITransporterDetails } from '@/@types/transporter';
import { api } from '@/_http/api-client';

interface IRequest {
	transporterId: string;
}

export async function getTransporterDetails({ transporterId }: IRequest): Promise<ITransporterDetails> {
	const response = await api.get(`transporters/${transporterId}/details`).json<ITransporterDetails>();

	return response;
}
