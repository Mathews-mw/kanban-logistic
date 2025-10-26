import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const companyMembershipRoleBadgeVariants = cva(
	'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
	{
		variants: {
			variant: {
				VIEWER: 'border-transparent bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-200',
				ADMIN: 'border-transparent bg-emerald-200 text-emerald-600 dark:bg-emerald-700 dark:text-emerald-200',
				SUPPLIER: 'border-transparent bg-sky-200 text-sky-600 dark:bg-sky-700 dark:text-sky-200',
				CUSTOMER: 'border-transparent bg-amber-200 text-amber-600 dark:bg-amber-700 dark:text-amber-200',
				TRANSPORTER: 'border-transparent bg-purple-200 text-purple-600 dark:bg-purple-700 dark:text-purple-200',
			},
		},
		defaultVariants: {
			variant: 'VIEWER',
		},
	}
);

function CompanyMembershipRoleBadge({
	className,
	variant,
	asChild = false,
	...props
}: React.ComponentProps<'span'> & VariantProps<typeof companyMembershipRoleBadgeVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : 'span';

	return (
		<Comp
			data-slot="ticket-status"
			className={cn(companyMembershipRoleBadgeVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { CompanyMembershipRoleBadge, companyMembershipRoleBadgeVariants };
