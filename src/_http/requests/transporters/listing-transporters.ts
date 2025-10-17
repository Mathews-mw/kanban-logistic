import { SearchParamsOption } from 'ky';

import { Transporter } from '@/generated/client';
import { api } from '@/_http/api-client';

interface IRequest {
	page?: number;
	perPage?: string | number;
	search?: string;
}

interface IResponse {
	pagination: IPagination;
	transporters: Array<Transporter>;
}

export async function listingTransporters({ page, perPage, search }: IRequest): Promise<IResponse> {
	const params = {
		page,
		per_page: perPage,
		search,
	};

	const cleanParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null)) as SearchParamsOption;

	const response = await api
		.get('transporters', {
			searchParams: cleanParams,
		})
		.json<IResponse>();

	return response;
}
