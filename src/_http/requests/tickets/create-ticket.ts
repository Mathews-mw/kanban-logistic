import { ITicket } from '@/@types/ticket';
import { api } from '@/_http/api-client';

interface IRequest {
	supplierId: string;
	customerId: string;
	transporterId: string;
	vehicleId: string;
	deliveryPlantId: string;
	productId: string;
	grossWeight?: number;
	tareWeight?: number;
	unit?: string;
	weighedAt?: Date;
	notes?: string;
}

interface IResponse {
	message: string;
	ticket: ITicket;
}

export async function createTicket({
	supplierId,
	customerId,
	transporterId,
	vehicleId,
	deliveryPlantId,
	productId,
	grossWeight,
	tareWeight,
	unit,
	weighedAt,
	notes,
}: IRequest) {
	const response = await api
		.post('tickets/create', {
			json: {
				supplierId,
				customerId,
				transporterId,
				vehicleId,
				deliveryPlantId,
				productId,
				grossWeight,
				tareWeight,
				unit,
				weighedAt,
				notes,
			},
		})
		.json<IResponse>();

	return response;
}
