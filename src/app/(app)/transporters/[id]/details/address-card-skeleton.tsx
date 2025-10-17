import { twMerge } from 'tailwind-merge';
import { Skeleton } from '@/components/ui/skeleton';

export function AddressCardSkeleton() {
	return (
		<div className={twMerge(['bg-secondary rounded border border-l-4 px-4 py-2'])}>
			<div className="flex w-full justify-between">
				<div className="w-full flex-grow space-y-4 text-sm">
					<Skeleton className="bg-muted-foreground h-3 w-56" />
					<Skeleton className="bg-muted-foreground h-3 w-36" />
					<Skeleton className="bg-muted-foreground h-3 w-48" />
				</div>
			</div>

			<div className="flex w-full justify-end gap-2">
				<Skeleton className="bg-muted-foreground h-4 w-14" />
				<Skeleton className="bg-muted-foreground h-4 w-14" />
				<Skeleton className="bg-muted-foreground h-4 w-20" />
			</div>
		</div>
	);
}
