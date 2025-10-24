import { User, UserRole } from '@/generated/client';

export type IUser = User;
export type IUserRole = UserRole;

interface IProfile {
	id: string;
	name: string;
	email: string;
	defaultCompanyId: string;
	role: IUserRole;
	createdAt: string;
	activeCompany: {
		id: string;
		name: string;
		vatNumber: string;
		roles: Array<string>;
	};
	memberships: Array<{
		id: string;
		companyId: string;
		companyName: string;
	}>;
}
