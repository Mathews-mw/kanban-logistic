import { Vehicle } from '@/generated/client';

import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { EllipsisVertical } from 'lucide-react';
import dayjs from 'dayjs';

interface IProps {
	vehicle: Vehicle;
}

export function VehicleRow({ vehicle }: IProps) {
	return (
		<TableRow>
			<TableCell></TableCell>
			<TableCell>{vehicle.plate}</TableCell>
			<TableCell>{vehicle.brand}</TableCell>
			<TableCell>{vehicle.model}</TableCell>
			<TableCell className="font-mono">{vehicle.loadCapacity} t</TableCell>
			<TableCell>{dayjs(vehicle.purchaseDate).format('YYYY/MM/DD')}</TableCell>
			<TableCell>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size="icon" variant="ghost">
							<EllipsisVertical />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>Details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	);
}
