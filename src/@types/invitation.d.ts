import { IUser } from './user';
import { ICompany } from './company';
import { Invitation } from '@/generated/client';

export type IInvitation = Invitation;

export interface IInvitationDetails extends IInvitation {
	company: ICompany;
	createdBy: IUser;
}
