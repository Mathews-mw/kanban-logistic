import { SearchParamsOption } from 'ky';

import { api } from '@/_http/api-client';
import { ICompany } from '@/@types/company';

interface IRequest {
	page?: number;
	perPage?: string | number;
	search?: string;
	vat?: string;
	role?: string;
}

interface IResponse {
	pagination: IPagination;
	companies: Array<ICompany>;
}

export async function listingCompanies({ page, perPage, search, vat, role }: IRequest): Promise<IResponse> {
	const params = {
		page,
		per_page: perPage,
		search,
		vat,
		role,
	};

	const cleanParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null)) as SearchParamsOption;

	const response = await api
		.get('companies', {
			searchParams: cleanParams,
		})
		.json<IResponse>();

	return response;
}
