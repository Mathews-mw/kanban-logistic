'use client';

import z from 'zod';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { listingVehicles } from '@/_http/requests/vehicles/listing-vehicles';

import { Button } from '@/components/ui/button';
import { Filters } from './(components)/filters';
import { Container } from '@/components/container';
import { PageTitle } from '@/components/page-title';
import { Pagination } from '@/components/pagination';
import { VehicleRow } from './(components)/vehicle-row';
import { SkeletonRow } from './(components)/skeleton-row';
import { TableContainer } from '@/components/table-container';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { CirclePlus } from 'lucide-react';

export default function VehiclesPage() {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const pathname = usePathname();
	const { replace, push } = useRouter();

	const currentPageParams = z.coerce.number().parse(searchParams.get('page') ?? '1');
	const perPageParams = z.union([z.literal('all'), z.coerce.number()]).parse(searchParams.get('perPage') ?? '10');
	const searchQueryParams = searchParams.get('search') ?? undefined;
	const orderByParams = searchParams.get('orderBy') ?? undefined;

	const { data: vehiclesResponse, isFetching } = useQuery({
		queryKey: ['vehicles', currentPageParams, perPageParams, searchQueryParams],
		queryFn: async () =>
			listingVehicles({ page: currentPageParams, perPage: perPageParams, search: searchQueryParams }),
	});

	function handlePaginate(page: number) {
		params.set('page', page.toString());
		replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="space-y-8">
			<PageTitle title="Vehicles" />

			<Container>
				<div className="flex w-full justify-between gap-4">
					<Filters isFetching={isFetching} />

					<Button>
						<CirclePlus /> Add Vehicle
					</Button>
				</div>
			</Container>

			<TableContainer>
				<Table>
					<TableHeader className="bg-muted">
						<TableRow>
							<TableHead className="w-[32px]"></TableHead>
							<TableHead>Plate</TableHead>
							<TableHead>Brand</TableHead>
							<TableHead>Model</TableHead>
							<TableHead>Load Capacity</TableHead>
							<TableHead>Purchase Date</TableHead>
							<TableHead className="w-[64px]"></TableHead>
						</TableRow>
					</TableHeader>
					{vehiclesResponse ? (
						<TableBody>
							{vehiclesResponse.vehicles.map((vehicle) => {
								return <VehicleRow key={vehicle.id} vehicle={vehicle} />;
							})}
						</TableBody>
					) : (
						<TableBody>
							{Array.from({ length: typeof perPageParams === 'number' ? perPageParams : 10 }).map((_, index) => {
								return <SkeletonRow key={index} />;
							})}
						</TableBody>
					)}
				</Table>
			</TableContainer>

			{vehiclesResponse && (
				<div className="flex w-full justify-end">
					<Pagination
						currentPage={vehiclesResponse.pagination.page}
						perPage={vehiclesResponse.pagination.per_page}
						totalCount={vehiclesResponse.pagination.total_occurrences}
						totalPages={vehiclesResponse.pagination.total_pages}
						onPageChange={(page) => handlePaginate(page)}
					/>
				</div>
			)}
		</div>
	);
}
