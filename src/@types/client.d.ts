import { Address, Client } from '@/generated/client';

export interface IClientDetails extends Client {
	address: Array<Address>;
}
