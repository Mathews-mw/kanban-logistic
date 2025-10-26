import { useQuery } from '@tanstack/react-query';

import { listingUserInvitations } from '@/_http/requests/users/listing-user-invitations';

import { InvitationCard } from './invitation-card';
import { Skeleton } from '@/components/ui/skeleton';

import { RiMailAddFill } from 'react-icons/ri';

interface IProps {
	userEmail: string;
}

export function InvitationsSection({ userEmail }: IProps) {
	const { data } = useQuery({
		queryKey: ['invitations', userEmail],
		queryFn: async () =>
			listingUserInvitations({
				to: userEmail,
				onlyAvailable: true,
			}),
	});

	return (
		<div className="space-y-8">
			<div className="flex items-center gap-2">
				<RiMailAddFill className="text-primary size-8" />
				<h4 className="text-2xl font-semibold">Invitations</h4>
			</div>

			{data ? (
				<>
					{data.invitations.length > 0 ? (
						<div className="space-y-4">
							{data.invitations.map((invitation) => {
								return <InvitationCard key={invitation.id} invitation={invitation} />;
							})}
						</div>
					) : (
						<p className="text-muted-foreground">You don&apos;t have any invitations to accept at the moment.</p>
					)}
				</>
			) : (
				<div className="space-y-4">
					<Skeleton className="h-[66px] w-full" />
					<Skeleton className="h-[66px] w-full" />
					<Skeleton className="h-[66px] w-full" />
				</div>
			)}
		</div>
	);
}
