import { IUser } from './user';
import { IVehicle } from './vehicle';
import { ICompany } from './company';
import { IProduct } from './products';
import { IDeliveryPlant } from './delivery-plant';
import { Ticket, TicketDocument, TicketEventLog } from '@/generated/client';

export type ITicket = Ticket & {
	statusText: string;
};

export type ITicketDocument = TicketDocument;
export type ITicketEvent = TicketEventLog;

export interface ITicketEventDetails extends ITicketEvent {
	actor: IUser;
}

export interface ITicketMinimalDetails extends ITicket {
	customer: {
		name: string;
	};
	transporter: {
		name: string;
	};
	vehicle: {
		plateNumber: string;
	};
	product: {
		code: string;
		description: string;
	};
}

export interface ITicketDetails extends ITicket {
	supplier: ICompany;
	customer: ICompany;
	transporter: ICompany;
	vehicle: IVehicle;
	deliveryPlant: IDeliveryPlant;
	product: IProduct;
	documents: Array<ITicketDocument>;
	events: Array<ITicketEventDetails>;
}
