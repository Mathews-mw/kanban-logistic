'use client';
import { useRouter } from 'next/navigation';

import { IProfile } from '@/@types/user';
import { getProfileNameInitials } from '@/utils/get-profile-name-initials';

import { SignoutDialog } from './signout-dialog';
import { ThemeSwitcher } from './theme-switcher';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { IoNotifications } from 'react-icons/io5';
import { FaBuilding, FaUser } from 'react-icons/fa';
import { ChevronsUpDown, LogOut } from 'lucide-react';

interface IProps {
	user: IProfile;
}

export function NavUser({ user }: IProps) {
	const { isMobile } = useSidebar();

	const navigate = useRouter();

	return (
		<Dialog>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton
								size="lg"
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								<Avatar className="h-8 w-8 rounded-lg">
									{/* {user.avatar_url && <AvatarImage src={user.avatar_url} alt={user.name} className="object-cover" />} */}
									<AvatarFallback className="rounded-lg">{getProfileNameInitials(user.name)}</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">{user.name}</span>
									<span className="truncate text-xs">{user.email}</span>
								</div>
								<ChevronsUpDown className="ml-auto size-4" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
							side={isMobile ? 'bottom' : 'right'}
							align="end"
							sideOffset={4}
						>
							<DropdownMenuLabel className="p-0 font-normal">
								<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
									<Avatar className="h-8 w-8 rounded-lg">
										{/* {user.avatar_url && <AvatarImage src={user.avatar_url} alt={user.name} className="object-cover" />} */}
										<AvatarFallback className="rounded-lg">{getProfileNameInitials(user.name)}</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-semibold">{user.name}</span>
										<span className="truncate text-xs">{user.email}</span>
									</div>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger className="space-x-2">
										<Avatar className="h-6 w-6 rounded-full">
											{/* {user.avatar_url && <AvatarImage src={user.avatar_url} alt={user.name} className="object-cover" />} */}
											<AvatarFallback className="rounded-full">
												{/* {getProfileNameInitials(user.activeCompany.name)} */}
											</AvatarFallback>
										</Avatar>
										<span className="font-medium">{user.activeCompany.name}</span>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent>
											<DropdownMenuLabel>Companies</DropdownMenuLabel>
											{user.memberships.map((membership) => (
												<DropdownMenuItem key={membership.id}>{membership.companyName}</DropdownMenuItem>
											))}
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem onClick={() => navigate.push('/account')}>
									<FaUser />
									Account
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => navigate.push('/company')}>
									<FaBuilding />
									My Company
								</DropdownMenuItem>
								<DropdownMenuItem>
									<IoNotifications />
									Notifications
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />

							<ThemeSwitcher />

							<DropdownMenuSeparator />

							<DialogTrigger asChild>
								<DropdownMenuItem>
									<LogOut />
									Log out
								</DropdownMenuItem>
							</DialogTrigger>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>

			<SignoutDialog />
		</Dialog>
	);
}
