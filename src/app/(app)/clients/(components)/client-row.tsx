import { Client } from '@/generated/client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { EllipsisVertical } from 'lucide-react';

interface IProps {
	client: Client;
}

export function ClientRow({ client }: IProps) {
	const navigate = useRouter();

	return (
		<TableRow>
			<TableCell></TableCell>
			<TableCell>{client.name}</TableCell>
			<TableCell>{client.vat}</TableCell>
			<TableCell>{client.email}</TableCell>
			<TableCell>{client.phone}</TableCell>
			<TableCell>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size="icon" variant="ghost">
							<EllipsisVertical />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onClick={() => navigate.push(`/clients/${client.id}/details`)}>Details</DropdownMenuItem>
						<DropdownMenuItem>Edit</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	);
}
