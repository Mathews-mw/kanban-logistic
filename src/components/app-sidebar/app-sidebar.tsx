'use client';
import Image from 'next/image';

import { useUser } from '@/context/user-context';

import { NavMain } from './nav-main';
import { NavUser } from './nav-user';
import { Skeleton } from '../ui/skeleton';
import { NavSecondary } from './nav-secondary';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';

export function AppSidebar() {
	const { userProfile } = useUser();

	return (
		<Sidebar variant="sidebar" collapsible="icon">
			<SidebarHeader>
				<div className="flex gap-2">
					<Image src="/kanban_logo.png" alt="logo" width={32} height={32} className="size-6 shrink-0" quality={100} />
					<span className="group-data-[state=collapsed]:animate-out group-data-[state=expanded]:animate-in text-muted-foreground text-xl leading-none font-bold tracking-tight group-data-[state=collapsed]:hidden">
						Kanban
					</span>
				</div>
			</SidebarHeader>

			<SidebarContent>
				<NavMain />
				<NavSecondary className="mt-auto" />
			</SidebarContent>

			<SidebarFooter>
				{userProfile ? (
					<NavUser user={userProfile} />
				) : (
					<div className="flex items-center gap-2">
						<Skeleton className="h-8 w-8 rounded-lg" />

						<div className="space-y-1">
							<Skeleton className="h-3 w-32" />
							<Skeleton className="h-2 w-36" />
						</div>
					</div>
				)}
			</SidebarFooter>
		</Sidebar>
	);
}
