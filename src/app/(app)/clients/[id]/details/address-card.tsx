import { twMerge } from 'tailwind-merge';

import { Address } from '@/generated/client';
import { Button } from '@/components/ui/button';
import { MarkAddressPrimaryDialog } from './mark-address-primnary-dialog';
import { DeleteAddressDialog } from './delete-address-dialog';

interface IAddressCardProps {
	clientId: string;
	address: Address;
}

export function AddressCard({ address, clientId }: IAddressCardProps) {
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
				<MarkAddressPrimaryDialog clientId={clientId} addressId={address.id} />

				<Button size="xs" variant="outline" className="text-xs font-semibold">
					Edit
				</Button>

				<DeleteAddressDialog clientId={clientId} addressId={address.id} />
			</div>
		</div>
	);
}
