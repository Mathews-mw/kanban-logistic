import { SearchParamsOption } from 'ky';

import { api } from '@/_http/api-client';
import { IInvitationDetails } from '@/@types/invitation';

interface IRequest {
	page?: number;
	perPage?: string | number;
	companyId: string;
	to?: string;
	createdById?: string;
	onlyAvailable?: boolean;
}

interface IResponse {
	pagination: IPagination;
	invitations: Array<IInvitationDetails>;
}

export async function listingCompanyInvitations({
	page,
	perPage,
	companyId,
	to,
	createdById,
	onlyAvailable,
}: IRequest): Promise<IResponse> {
	const params = {
		page,
		per_page: perPage,
		to,
		created_by_id: createdById,
		only_available: onlyAvailable,
	};

	const cleanParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null)) as SearchParamsOption;

	const response = await api
		.get(`companies/${companyId}/invitations`, {
			searchParams: cleanParams,
		})
		.json<IResponse>();

	return response;
}
