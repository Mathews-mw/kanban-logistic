import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface IProps {
	currentPage: number;
	totalCount: number;
	totalPages: number;
	perPage: number;
	onPageChange: (currentPage: number) => Promise<void> | void;
	disableTotalAmountLabel?: boolean;
	disablePerPageLabel?: boolean;
}

export function Pagination({
	currentPage,
	perPage,
	totalCount,
	totalPages,
	onPageChange,
	disableTotalAmountLabel = false,
	disablePerPageLabel = false,
}: IProps) {
	const isMobile = useIsMobile();

	return (
		<div className="flex w-full items-center justify-between">
			{!disableTotalAmountLabel && (
				<span className="text-muted-foreground text-xs sm:text-sm">Total {totalCount} registers</span>
			)}

			<div className="flex items-center gap-6 lg:gap-8">
				{!disablePerPageLabel && (
					<div className="text-xs font-medium sm:text-sm">
						Page {currentPage} of {totalPages}
					</div>
				)}

				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size={isMobile ? 'sm' : 'default'}
						onClick={() => onPageChange(1)}
						disabled={currentPage === 1}
					>
						<ChevronsLeft />
						<span className="sr-only">First</span>
					</Button>
					<Button
						variant="outline"
						size={isMobile ? 'sm' : 'default'}
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
					>
						<ChevronLeft />
						<span className="sr-only">Previous page</span>
					</Button>
					<Button
						variant="outline"
						size={isMobile ? 'sm' : 'default'}
						onClick={() => onPageChange(currentPage + 1)}
						disabled={totalPages <= currentPage}
					>
						<ChevronRight />
						<span className="sr-only">Next page</span>
					</Button>
					<Button
						variant="outline"
						size={isMobile ? 'sm' : 'default'}
						onClick={() => onPageChange(totalPages)}
						disabled={totalPages <= currentPage}
					>
						<ChevronsRight />
						<span className="sr-only">Last page</span>
					</Button>
				</div>
			</div>
		</div>
	);
}
