import { api } from '@/_http/api-client';
import { ICompany } from '@/@types/company';
import { IUserCompanyMembership } from '@/@types/membership';

interface IRequest {
	userId: string;
}

interface IMembership extends IUserCompanyMembership {
	company: ICompany;
}

interface IResponse {
	companies_membership: IMembership[];
}

export async function listingUserCompaniesMembership({ userId }: IRequest): Promise<IResponse> {
	const response = await api.get(`users/${userId}/companies`).json<IResponse>();

	return response;
}
