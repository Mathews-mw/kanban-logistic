import { SearchParamsOption } from 'ky';

import { Vehicle } from '@/generated/client';
import { api } from '@/_http/api-client';
import { IVehicle } from '@/@types/vehicle';

interface IRequest {
	page?: number;
	perPage?: string | number;
	search?: string;
	transporterId?: string;
}

interface IResponse {
	pagination: IPagination;
	vehicles: Array<IVehicle>;
}

export async function listingVehicles({ page, perPage, search, transporterId }: IRequest): Promise<IResponse> {
	const params = {
		page,
		per_page: perPage,
		search,
		transporter_id: transporterId,
	};

	const cleanParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null)) as SearchParamsOption;

	const response = await api
		.get('vehicles', {
			searchParams: cleanParams,
		})
		.json<IResponse>();

	return response;
}
