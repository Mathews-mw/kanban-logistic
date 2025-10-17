import { Skeleton } from '@/components/ui/skeleton';
import { TableCell, TableRow } from '@/components/ui/table';

export function SkeletonRow() {
	return (
		<TableRow>
			<TableCell></TableCell>
			<TableCell>
				<Skeleton className="h-3 w-24" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-3 w-36" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-3 w-44" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-3 w-32" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-3 w-32" />
			</TableCell>
			<TableCell>
				<Skeleton className="size-6" />
			</TableCell>
		</TableRow>
	);
}
