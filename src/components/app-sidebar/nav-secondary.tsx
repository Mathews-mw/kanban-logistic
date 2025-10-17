'use client';

import { ComponentPropsWithoutRef } from 'react';

import { NavItem } from './nav-item';
import { SidebarGroup, SidebarGroupContent, SidebarMenu } from '@/components/ui/sidebar';

import { CircleHelp, Settings } from 'lucide-react';

const items = [
	{
		title: 'Settings',
		url: '/settings',
		icon: Settings,
	},
	{
		title: 'Help',
		url: '/help',
		icon: CircleHelp,
	},
];

export function NavSecondary(props: ComponentPropsWithoutRef<typeof SidebarGroup>) {
	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<NavItem key={item.title} href={item.url} title={item.title} icon={item.icon} />
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
