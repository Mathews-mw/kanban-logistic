import { api } from '@/_http/api-client';
import { ITicketDetails } from '@/@types/ticket';

interface IRequest {
	ticketId: string;
}

export async function getTicketDetails({ ticketId }: IRequest): Promise<ITicketDetails> {
	const response = await api.get(`tickets/${ticketId}/details`).json<ITicketDetails>();

	return response;
}
