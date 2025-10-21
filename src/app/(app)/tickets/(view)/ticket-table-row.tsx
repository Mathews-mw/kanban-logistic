import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

import { ITicketMinimalDetails } from '@/@types/ticket';

import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { EllipsisVertical } from 'lucide-react';
import { TicketStatusBadge } from '@/components/ticket-status-badge';

interface IProps {
	ticket: ITicketMinimalDetails;
}

export function TicketTableRow({ ticket }: IProps) {
	const navigate = useRouter();

	return (
		<TableRow>
			<TableCell></TableCell>
			<TableCell className="font-mono">{ticket.number}</TableCell>
			<TableCell>{ticket.product.description}</TableCell>
			<TableCell>{ticket.customer.name}</TableCell>
			<TableCell>{ticket.transporter.name}</TableCell>
			<TableCell>{ticket.vehicle.plateNumber}</TableCell>
			<TableCell>
				{ticket.netWeight} {ticket.unit}
			</TableCell>
			<TableCell>
				<time title={dayjs(ticket.createdAt).format('YYYY/MM/DD [at] HH:mm')}>
					{dayjs(ticket.createdAt).format('YYYY/MM/DD')}
				</time>
			</TableCell>
			<TableCell>
				<TicketStatusBadge variant="ARCHIVED">{ticket.statusText}</TicketStatusBadge>
			</TableCell>
			<TableCell>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size="icon" variant="ghost">
							<EllipsisVertical />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onClick={() => navigate.push(`/tickets/${ticket.id}/details`)}>Details</DropdownMenuItem>
						{/* <DropdownMenuItem>Edit</DropdownMenuItem> */}
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	);
}
