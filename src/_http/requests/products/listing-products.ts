import { SearchParamsOption } from 'ky';

import { api } from '@/_http/api-client';
import { IProduct } from '@/@types/products';

interface IRequest {
	page?: number;
	perPage?: string | number;
	search?: string;
}

interface IResponse {
	pagination: IPagination;
	products: Array<IProduct>;
}

export async function listingProducts({ page, perPage, search }: IRequest): Promise<IResponse> {
	const params = {
		page,
		per_page: perPage,
		search,
	};

	const cleanParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null)) as SearchParamsOption;

	const response = await api
		.get('products', {
			searchParams: cleanParams,
		})
		.json<IResponse>();

	return response;
}
