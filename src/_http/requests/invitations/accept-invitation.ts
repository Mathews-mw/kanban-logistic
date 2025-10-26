import { ITicket } from '@/@types/ticket';
import { api } from '@/_http/api-client';

interface IRequest {
	token: string;
	companyId: string;
}

interface IResponse {
	message: string;
	ticket: ITicket;
}

export async function acceptInvitation({ token, companyId }: IRequest) {
	const response = await api
		.post('invitations/accept', {
			json: {
				token,
				company_id: companyId,
			},
		})
		.json<IResponse>();

	return response;
}
