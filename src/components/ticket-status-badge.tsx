import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const ticketStatusBadgeVariants = cva(
	'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
	{
		variants: {
			variant: {
				DRAFT: 'border-transparent bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-200',
				READY: 'border-transparent bg-emerald-200 text-emerald-600 dark:bg-emerald-700 dark:text-emerald-200',
				SHARED: 'border-transparent bg-sky-200 text-sky-600 dark:bg-sky-700 dark:text-sky-200',
				ARCHIVED: 'border-transparent bg-purple-200 text-purple-600 dark:bg-purple-700 dark:text-purple-200',
				CANCELED:
					'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
				PENDING_REGISTRATION: '',
				AVAILABLE: '',
				DOWNLOADED: '',
			},
		},
		defaultVariants: {
			variant: 'DRAFT',
		},
	}
);

function TicketStatusBadge({
	className,
	variant,
	asChild = false,
	...props
}: React.ComponentProps<'span'> & VariantProps<typeof ticketStatusBadgeVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : 'span';

	return (
		<Comp data-slot="ticket-status" className={cn(ticketStatusBadgeVariants({ variant }), className)} {...props} />
	);
}

export { TicketStatusBadge, ticketStatusBadgeVariants };
