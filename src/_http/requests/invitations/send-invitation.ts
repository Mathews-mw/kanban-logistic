import { api } from '@/_http/api-client';

interface IRequest {
	companyId: string;
	email: string;
	roles: Array<string>;
}

interface IResponse {
	invite_id: string;
}

export async function sendInvitation({ companyId, email, roles }: IRequest) {
	const response = await api
		.post(`companies/${companyId}/invitations/send`, {
			json: {
				email,
				roles,
			},
		})
		.json<IResponse>();

	return response;
}
