import { SearchParamsOption } from 'ky';

import { api } from '@/_http/api-client';
import { IInvitationDetails } from '@/@types/invitation';

interface IRequest {
	to: string;
	companyId?: string;
	createdById?: string;
	onlyAvailable?: boolean;
}

interface IResponse {
	invitations: Array<IInvitationDetails>;
}

export async function listingUserInvitations({
	to,
	companyId,
	createdById,
	onlyAvailable,
}: IRequest): Promise<IResponse> {
	const params = {
		to,
		company_id: companyId,
		created_by_id: createdById,
		only_available: onlyAvailable,
	};

	const cleanParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null)) as SearchParamsOption;

	const response = await api
		.get('users/invitations', {
			searchParams: cleanParams,
		})
		.json<IResponse>();

	return response;
}
