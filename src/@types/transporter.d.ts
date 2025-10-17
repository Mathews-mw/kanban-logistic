import { Transporter } from '@/generated/client';

export interface ITransporterDetails extends Transporter {
	address: Array<Address>;
}
