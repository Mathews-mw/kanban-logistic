'use client';

import { use } from 'react';

import { PageTitle } from '@/components/page-title';
import { Container } from '@/components/container';

import { AddressCard } from './address-card';

import { PiMapPinLineFill } from 'react-icons/pi';
import { useQuery } from '@tanstack/react-query';
import { getClientDetails } from '@/_http/requests/clients/get-client-details';
import { UpdateClientForm } from './update-client-form';
import { Skeleton } from '@/components/ui/skeleton';
import { AddressCardSkeleton } from './address-card-skeleton';
import { AddNewAddressDialog } from './add-new-address-dialog';

interface IProps {
	params: Promise<{
		id: string;
	}>;
}

export default function ClientDetailsPage({ params }: IProps) {
	const { id } = use(params);

	const { data: clientResponse } = useQuery({
		queryKey: ['client_details', id],
		queryFn: async () => getClientDetails({ clientId: id }),
		enabled: !!id,
	});

	return (
		<div className="space-y-8">
			<PageTitle title="Customer Details" backButton />

			<div className="flex w-full flex-wrap gap-8">
				{clientResponse ? (
					<UpdateClientForm client={clientResponse} />
				) : (
					<Container className="h-min flex-grow">
						<Skeleton className="mb-8 h-5 w-56" />

						<div className="space-y-8">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
						</div>

						<div className="flex w-full justify-end">
							<Skeleton className="mt-8 h-4 w-8" />
						</div>
					</Container>
				)}

				<Container className="h-min flex-grow">
					<div className="flex w-full items-center justify-between">
						<div className="flex items-center gap-2">
							<PiMapPinLineFill className="fill-primary size-6" />
							<span className="text-lg font-semibold">Addresses</span>
						</div>

						<AddNewAddressDialog clientId={id} />
					</div>

					<div className="space-y-2">
						{clientResponse ? (
							<>
								{clientResponse.address.map((address) => {
									return <AddressCard key={address.id} clientId={clientResponse.id} address={address} />;
								})}
							</>
						) : (
							<AddressCardSkeleton />
						)}
					</div>
				</Container>
			</div>
		</div>
	);
}
