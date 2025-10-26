import dayjs from 'dayjs';

import { IInvitationDetails } from '@/@types/invitation';
import { getProfileNameInitials } from '@/utils/get-profile-name-initials';

import { AcceptInviteDialog } from './accept-invite-dialog';
import { RevokeInviteDialog } from './revoke-invite-dialog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface IProps {
	invitation: IInvitationDetails;
}

export function InvitationCard({ invitation }: IProps) {
	return (
		<div className="flex w-full justify-between gap-2 rounded-lg border px-4 py-2">
			<div className="flex gap-4">
				<Avatar className="h-8 w-8 rounded-lg">
					<AvatarFallback className="rounded-lg">{getProfileNameInitials(invitation.company.name)}</AvatarFallback>
				</Avatar>

				<div>
					<p>
						<b>{invitation.company.name}</b> invited you to join the team.
					</p>

					<span className="text-muted-foreground text-xs">
						This invitation will expire iat {dayjs(invitation.expiresAt).format('DD/MM/YYYY')}.
					</span>
				</div>
			</div>

			<div className="space-x-4">
				<AcceptInviteDialog invitation={invitation} />
				<RevokeInviteDialog />
			</div>
		</div>
	);
}
