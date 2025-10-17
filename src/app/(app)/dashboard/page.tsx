import { PageTitle } from '@/components/page-title';

export default function DashboardPage() {
	return (
		<div className="space-y-8">
			<PageTitle title="Dashboard" />

			<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="bg-muted-foreground dark:bg-muted aspect-video rounded-xl" />
					<div className="bg-muted-foreground dark:bg-muted aspect-video rounded-xl" />
					<div className="bg-muted-foreground dark:bg-muted aspect-video rounded-xl" />
				</div>

				<div className="bg-muted-foreground dark:bg-muted h-96 w-full rounded-xl md:min-h-min" />
			</div>
		</div>
	);
}
