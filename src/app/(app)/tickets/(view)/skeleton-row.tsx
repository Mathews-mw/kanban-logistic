import { Skeleton } from '@/components/ui/skeleton';
import { TableCell, TableRow } from '@/components/ui/table';

export function SkeletonRow() {
	return (
		<TableRow>
			<TableCell></TableCell>
			<TableCell>
				<Skeleton className="h-3 w-32" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-3 w-42" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-3 w-42" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-3 w-32" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-3 w-22" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-3 w-12" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-3 w-22" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-3 w-16" />
			</TableCell>
		</TableRow>
	);
}
