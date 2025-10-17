import { SearchParamsOption } from 'ky';

import { api } from '@/_http/api-client';
import { Client } from '../../../../prisma/generated/client';

interface IRequest {
	page?: number;
	perPage?: string | number;
	search?: string;
}

interface IResponse {
	pagination: IPagination;
	clients: Array<Client>;
}

export async function listingClients({ page, perPage, search }: IRequest): Promise<IResponse> {
	const params = {
		page,
		per_page: perPage,
		search,
	};

	const cleanParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null)) as SearchParamsOption;

	const response = await api
		.get('clients', {
			searchParams: cleanParams,
		})
		.json<IResponse>();

	return response;
}
