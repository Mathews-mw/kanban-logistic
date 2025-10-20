import { SearchParamsOption } from 'ky';

import { api } from '@/_http/api-client';
import { IDeliveryPlant } from '@/@types/delivery-plant';

interface IRequest {
	page?: number;
	perPage?: string | number;
	search?: string;
	customerId?: string;
}

interface IResponse {
	pagination: IPagination;
	deliveryPlants: Array<IDeliveryPlant>;
}

export async function listingDeliveryPlants({ page, perPage, search, customerId }: IRequest): Promise<IResponse> {
	const params = {
		page,
		per_page: perPage,
		search,
		customer_id: customerId,
	};

	const cleanParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null)) as SearchParamsOption;

	const response = await api
		.get('delivery-plants', {
			searchParams: cleanParams,
		})
		.json<IResponse>();

	return response;
}
