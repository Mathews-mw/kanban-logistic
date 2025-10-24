import dayjs from 'dayjs';

import { ITicketDetails } from '@/@types/ticket';

import { Button } from '@/components/ui/button';
import { TicketStatusBadge } from '@/components/ticket-status-badge';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { TbFileTypePdf, TbFileTypeXml } from 'react-icons/tb';
import { ArrowRightLeft, EllipsisVertical, Link, Upload } from 'lucide-react';

interface IProps {
	ticket: ITicketDetails;
}

export function HeaderSection({ ticket }: IProps) {
	return (
		<div className="space-y-2">
			<div className="flex w-full justify-between">
				<span className="text-2xl font-semibold tracking-tight">Ticket #{ticket.number}</span>

				<div className="space-x-2">
					{/* Disponível apenas para o emissor */}
					<Button variant="outline">
						<Upload /> Attachment
					</Button>

					{/* Apenas o emissor pode mudar status */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className="gap-2" variant="outline">
								<ArrowRightLeft />
								Status
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>Change status to</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem disabled={ticket.status === 'DRAFT'}>DRAFT</DropdownMenuItem>
							<DropdownMenuItem disabled={ticket.status === 'READY'}>READY</DropdownMenuItem>
							<DropdownMenuItem disabled={ticket.status === 'SHARED'}>SHARED</DropdownMenuItem>
							<DropdownMenuItem disabled={ticket.status === 'ARCHIVED'}>ARCHIVED</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					{/* Disponível quando o status for SHARED */}
					<Button variant="outline">
						<Link />
						Share
					</Button>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="icon">
								<EllipsisVertical />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>
								<TbFileTypePdf className="size-5" />
								Export PDF
							</DropdownMenuItem>
							<DropdownMenuItem>
								<TbFileTypeXml className="size-5" />
								Export XML
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuLabel>Restrict actions</DropdownMenuLabel>
							<DropdownMenuItem>Edit</DropdownMenuItem>
							<DropdownMenuItem>Clone</DropdownMenuItem>
							<DropdownMenuItem>Archive</DropdownMenuItem>
							<DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>

			<div className="flex gap-8">
				<div className="text-muted-foreground flex flex-col text-sm">
					<span>Created at:</span>
					<time className="font-medium">{dayjs(ticket.createdAt).format('DD/MM/YYYY • HH:mm')}</time>
				</div>

				<div className="text-muted-foreground flex flex-col text-sm">
					<span>Last update:</span>
					<time className="font-medium">
						{ticket.updatedAt ? dayjs(ticket.updatedAt).format('DD/MM/YYYY • HH:mm') : '—'}
					</time>
				</div>

				<div className="text-muted-foreground flex flex-col text-sm">
					<span>weighing at:</span>
					<time className="font-medium">
						{ticket.weighedAt ? dayjs(ticket.weighedAt).format('DD/MM/YYYY • HH:mm') : '—'}
					</time>
				</div>

				<div className="text-muted-foreground flex flex-col text-sm">
					<span>Status:</span>
					<TicketStatusBadge variant={ticket.status}>{ticket.statusText}</TicketStatusBadge>
				</div>
			</div>
		</div>
	);
}
