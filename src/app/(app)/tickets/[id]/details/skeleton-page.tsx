import { PageTitle } from '@/components/page-title';
import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonPage() {
	return (
		<div className="space-y-8">
			<PageTitle title="Ticket details" description="See full details and manage your ticket here." />

			<div className="space-y-2">
				<div className="flex w-full justify-between">
					<Skeleton className="h-8 w-80" />

					<div className="flex gap-2">
						<Skeleton className="h-9 w-20" />
						<Skeleton className="h-9 w-20" />
						<Skeleton className="h-9 w-20" />
					</div>
				</div>

				<div className="flex gap-8">
					<div className="space-y-1">
						<Skeleton className="h-3 w-20" />
						<Skeleton className="h-3 w-28" />
					</div>
					<div className="space-y-1">
						<Skeleton className="h-3 w-20" />
						<Skeleton className="h-3 w-28" />
					</div>
					<div className="space-y-1">
						<Skeleton className="h-3 w-20" />
						<Skeleton className="h-3 w-20" />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<Skeleton className="h-[270px] w-full" />
				<Skeleton className="h-[270px] w-full" />
				<Skeleton className="h-[270px] w-full" />
			</div>

			<Skeleton className="h-28 w-full" />

			<div className="space-y-2.5">
				<Skeleton className="h-8 w-52" />
				<Skeleton className="h-32 w-full" />
			</div>
		</div>
	);
}
