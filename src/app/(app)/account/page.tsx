'use client';

import { useUser } from '@/context/user-context';

import { CompaniesCard } from './companies-card';
import { FaBuildingUser } from 'react-icons/fa6';
import { Container } from '@/components/container';
import { PageTitle } from '@/components/page-title';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { InvitationsSection } from './invitations-section';
import { UpdateUserInfosForm } from './update-user-account-form';
import { UpdateUserAccountFormSkeleton } from './update-user-account-form-skeleton';

import { FileText } from 'lucide-react';
import { RiMailAddFill } from 'react-icons/ri';

export default function AccountPage() {
	const { userProfile } = useUser();

	return (
		<div className="space-y-8">
			<PageTitle
				title="Account"
				description="Here you can manage your account information. In addition, you can also accept invitations from companies."
			/>

			<div className="flex w-full flex-wrap gap-8">
				<Container className="h-min flex-grow">
					<div className="flex items-center gap-2">
						<FileText className="fill-primary text-card" />
						<h4 className="text-lg font-semibold">Personal data</h4>
					</div>

					{userProfile ? <UpdateUserInfosForm user={userProfile} /> : <UpdateUserAccountFormSkeleton />}
				</Container>

				{userProfile ? (
					<CompaniesCard userId={userProfile.id} />
				) : (
					<Container>
						<div className="flex items-center gap-2">
							<FaBuildingUser className="text-primary size-6" />
							<h4 className="text-lg font-semibold">Companies Membership</h4>
						</div>

						<div className="flex items-center gap-2">
							<Skeleton className="h-3 w-full" />
						</div>

						<div className="space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
						</div>
					</Container>
				)}
			</div>

			<Separator />

			{userProfile ? (
				<InvitationsSection userEmail={userProfile.email} />
			) : (
				<div className="space-y-8">
					<div className="flex items-center gap-2">
						<RiMailAddFill className="text-primary size-8" />
						<h4 className="text-2xl font-semibold">Invitations</h4>
					</div>

					<div className="space-y-4">
						<Skeleton className="h-[66px] w-full" />
						<Skeleton className="h-[66px] w-full" />
						<Skeleton className="h-[66px] w-full" />
					</div>
				</div>
			)}
		</div>
	);
}
