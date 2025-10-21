import { Suspense } from 'react';
import { getUserProfile } from '@/_http/requests/users/get-user-profile';
import { PageTitle } from '@/components/page-title';

async function userProfile() {
	const user = await getUserProfile();

	return user;
}

export default async function AccountPage() {
	const user = await userProfile();

	return (
		<div className="space-y-8">
			<PageTitle title="Account" description="User account information" />

			<Suspense fallback={<p>Loading user...</p>}>
				<pre>{JSON.stringify(user, undefined, 2)}</pre>
			</Suspense>
		</div>
	);
}
