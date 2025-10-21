import { SearchParamsOption } from 'ky';

import { api } from '@/_http/api-client';
import { ITicketMinimalDetails } from '@/@types/ticket';

interface IRequest {
	page?: number;
	perPage?: string | number;
	scope?: string;
	q?: string;
	status?: string;
	from?: string | Date;
	to?: string | Date;
}

interface IResponse {
	pagination: IPagination;
	tickets: Array<ITicketMinimalDetails>;
}

export async function listingTickets({ page, perPage, scope, q, from, to, status }: IRequest): Promise<IResponse> {
	const params = {
		page,
		per_page: perPage,
		scope,
		q,
		from,
		to,
		status,
	};

	const cleanParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null)) as SearchParamsOption;

	const response = await api
		.get('tickets', {
			searchParams: cleanParams,
		})
		.json<IResponse>();

	return response;
}
