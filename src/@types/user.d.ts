import { User, UserRole } from '@/generated/client';

export type IUser = User;
export type IUserRole = UserRole;

interface IProfile {
	id: string;
	name: string;
	email: string;
	companyId: string;
	role: IUserRole;
	createdAt: string;
	company: {
		id: string;
		name: string;
		vatNumber: string;
		roles: Array<string>;
	};
}
