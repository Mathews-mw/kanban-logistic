import { twMerge } from 'tailwind-merge';

import { Address } from '@/generated/client';
import { Button } from '@/components/ui/button';

interface IAddressCardProps {
	transporterId: string;
	address: Address;
}

export function AddressCard({ address, transporterId }: IAddressCardProps) {
	return (
		<div
			className={twMerge([
				'rounded border border-l-4 px-4 py-2',
				`${address.isPrimary ? 'border-primary bg-primary/10' : 'bg-secondary'}`,
			])}
		>
			<div className="flex w-full justify-between">
				<div className="w-full flex-grow space-y-2 text-sm">
					<p>
						{address.street}, {address.number}
					</p>
					{address.complement && <p>Complement: {address.complement}</p>}
					<p>Postal Code: {address.zip}</p>
					<p>
						{address.city}, {address.country}
					</p>
				</div>

				{address.isPrimary && (
					<div>
						<span className="text-primary text-xs font-bold">(MAIN)</span>
					</div>
				)}
			</div>

			<div className="flex w-full justify-end gap-2">
				<Button size="xs" variant="outline" className="text-xs font-semibold">
					Mark as primary
				</Button>

				<Button size="xs" variant="outline" className="text-xs font-semibold">
					Edit
				</Button>

				<Button size="xs" variant="ghost" className="text-xs font-semibold">
					Remove
				</Button>
			</div>
		</div>
	);
}
