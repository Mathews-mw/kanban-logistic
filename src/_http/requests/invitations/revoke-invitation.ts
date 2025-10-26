import { api } from '@/_http/api-client';

interface IRequest {
	invitationId: string;
}

export async function acceptInvitation({ invitationId }: IRequest) {
	await api.delete(`invitations/${invitationId}/revoke`);
}
