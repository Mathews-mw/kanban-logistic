import { ReactNode } from 'react';
import { cookies } from 'next/headers';

import { AppSidebar } from '@/components/app-sidebar/app-sidebar';
import BreadcrumbsNavigation from '@/components/breadcrumbs-navigation';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default async function AppLayout({ children }: { children: ReactNode }) {
	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

	return (
		<SidebarProvider defaultOpen={defaultOpen}>
			<AppSidebar />

			<SidebarInset className="dark:bg-background bg-background">
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />

						<div className="bg-border mr-2 h-5 w-px" />

						<BreadcrumbsNavigation />
					</div>
				</header>

				<main className="mx-auto flex min-h-0 w-full max-w-[1440px] flex-1 flex-col gap-4 p-2 pt-0 sm:p-4">
					{children}
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
