'use client';

import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

import { useUser } from '@/context/user-context';

import { TabItem } from './tab-item';
import { Button } from '@/components/ui/button';
import { PageTitle } from '@/components/page-title';
import { CompanyTabContent } from './company-tab-content';
import { InvitationsTabContent } from './invitations-tab-content';

import { Settings } from 'lucide-react';

type Tab = 'company' | 'invitations';

export default function MyCompanyPage() {
	const { userProfile } = useUser();

	const [currentTab, setCurrentTab] = useState<Tab>('company');

	return (
		<div className="space-y-8">
			<PageTitle title="My Company" description="Here you can view and manage all the details of your company." />

			<div className="flex flex-col gap-4">
				<Tabs.Root
					defaultValue="tab1"
					value={currentTab}
					onValueChange={(tab) => setCurrentTab(tab as Tab)}
					className="flex w-full flex-col"
				>
					<div className="border-border flex w-full items-center justify-between border-b">
						<Tabs.List className="flex w-[320px] justify-end" aria-label="Notifications">
							<TabItem value="company" title="Company" isSelected={currentTab === 'company'} />
							<TabItem value="invitations" title="Invitations" isSelected={currentTab === 'invitations'} />
						</Tabs.List>

						<div className="flex items-center gap-4">
							<Button size="sm" variant="ghost">
								<Settings />
							</Button>
						</div>
					</div>

					<Tabs.Content value="company" className="p-4">
						<CompanyTabContent />
					</Tabs.Content>

					<Tabs.Content value="invitations" className="p-4">
						{userProfile && <InvitationsTabContent companyId={userProfile.activeCompany.id} />}
					</Tabs.Content>
				</Tabs.Root>
			</div>
		</div>
	);
}
