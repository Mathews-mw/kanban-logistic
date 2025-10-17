'use client';

import { use } from 'react';

import { PageTitle } from '@/components/page-title';
import { Container } from '@/components/container';

import { AddressCard } from './address-card';

import { PiMapPinLineFill } from 'react-icons/pi';
import { useQuery } from '@tanstack/react-query';
import { getTransporterDetails } from '@/_http/requests/transporters/get-transporter-details';
import { Skeleton } from '@/components/ui/skeleton';
import { AddressCardSkeleton } from './address-card-skeleton';
import { UpdateTransporterForm } from './update-transporter-form';
import { Button } from '@/components/ui/button';
import { MapPinPlus } from 'lucide-react';

interface IProps {
	params: Promise<{
		id: string;
	}>;
}

export default function TransporterDetailsPage({ params }: IProps) {
	const { id } = use(params);

	const { data: transporterResponse } = useQuery({
		queryKey: ['transporter_details', id],
		queryFn: async () => getTransporterDetails({ transporterId: id }),
		enabled: !!id,
	});

	return (
		<div className="space-y-8">
			<PageTitle title="Transporter Details" backButton />

			<div className="flex w-full flex-wrap gap-8">
				{transporterResponse ? (
					<UpdateTransporterForm transporter={transporterResponse} />
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

						<Button size="sm" variant="outline">
							<MapPinPlus /> New Address
						</Button>
					</div>

					<div className="space-y-2">
						{transporterResponse ? (
							<>
								{transporterResponse.address.map((address) => {
									return <AddressCard key={address.id} transporterId={transporterResponse.id} address={address} />;
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
