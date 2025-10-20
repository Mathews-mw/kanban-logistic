import { User } from '@/generated/client';

export type IUser = User;

interface IProfile {
	id: string;
	name: string;
	email: string;
	companyId: string;
	createdAt: string;
	company: {
		id: string;
		name: string;
		vatNumber: string;
		roles: Array<string>;
	};
}
