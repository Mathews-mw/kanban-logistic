import { Ticket } from '@/generated/client';

export type ITicket = Ticket & {
	statusText: string;
};

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
