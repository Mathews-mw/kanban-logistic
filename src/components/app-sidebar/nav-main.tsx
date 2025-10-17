'use client';

import { ComponentType, SVGProps } from 'react';

import { NavItem } from './nav-item';
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu } from '../ui/sidebar';

import { IoTicketOutline } from 'react-icons/io5';
import { Headset, LayoutDashboard, Upload, Weight } from 'lucide-react';

interface IItemProps {
	title: string;
	url: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	children?: Array<{
		title: string;
		url: string;
	}>;
}

// Menu items.
const items: Array<IItemProps> = [
	{
		title: 'Dashboard',
		url: '/dashboard',
		icon: LayoutDashboard,
	},
	{
		title: 'Imports',
		url: '/imports',
		icon: Upload,
	},
	{
		title: 'Tickets',
		url: '/tickets',
		icon: IoTicketOutline,
	},
	{
		title: 'Weighing',
		url: '/weighing',
		icon: Weight,
	},
	{
		title: 'Agent',
		url: '/agent',
		icon: Headset,
	},
];

export function NavMain() {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Application</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => {
						return <NavItem key={item.title} href={item.url} title={item.title} icon={item.icon} />;
					})}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
