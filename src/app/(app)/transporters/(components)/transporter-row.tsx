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
import { Transporter } from '@/generated/client';

interface IProps {
	transporter: Transporter;
}

export function TransporterRow({ transporter }: IProps) {
	const navigate = useRouter();

	return (
		<TableRow>
			<TableCell></TableCell>
			<TableCell>{transporter.name}</TableCell>
			<TableCell>{transporter.vat}</TableCell>
			<TableCell>{transporter.phone}</TableCell>
			<TableCell>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size="icon" variant="ghost">
							<EllipsisVertical />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onClick={() => navigate.push(`/transporters/${transporter.id}/details`)}>
							Details
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	);
}
