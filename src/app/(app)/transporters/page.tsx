'use client';

import z from 'zod';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { listingTransporters } from '@/_http/requests/transporters/listing-transporters';

import { Button } from '@/components/ui/button';
import { Filters } from './(components)/filters';
import { Container } from '@/components/container';
import { PageTitle } from '@/components/page-title';
import { Pagination } from '@/components/pagination';
import { SkeletonRow } from './(components)/skeleton-row';
import { TableContainer } from '@/components/table-container';
import { TransporterRow } from './(components)/transporter-row';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { UserPlus } from 'lucide-react';

export default function TransportersPage() {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const pathname = usePathname();
	const { replace, push } = useRouter();

	const currentPageParams = z.coerce.number().parse(searchParams.get('page') ?? '1');
	const perPageParams = z.union([z.literal('all'), z.coerce.number()]).parse(searchParams.get('perPage') ?? '10');
	const searchQueryParams = searchParams.get('search') ?? undefined;
	const orderByParams = searchParams.get('orderBy') ?? undefined;

	const { data: transportersResponse, isFetching } = useQuery({
		queryKey: ['transporters', currentPageParams, perPageParams, searchQueryParams],
		queryFn: async () =>
			listingTransporters({ page: currentPageParams, perPage: perPageParams, search: searchQueryParams }),
	});

	function handlePaginate(page: number) {
		params.set('page', page.toString());
		replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="space-y-8">
			<PageTitle title="Transporters" />

			<Container>
				<div className="flex w-full justify-between gap-4">
					<Filters isFetching={isFetching} />

					<Button>
						<UserPlus /> New Transporter
					</Button>
				</div>
			</Container>

			<TableContainer>
				<Table>
					<TableHeader className="bg-muted">
						<TableRow>
							<TableHead className="w-[32px]"></TableHead>
							<TableHead>Name</TableHead>
							<TableHead>VAT</TableHead>
							<TableHead>Phone</TableHead>
							<TableHead className="w-[64px]"></TableHead>
						</TableRow>
					</TableHeader>
					{transportersResponse ? (
						<TableBody>
							{transportersResponse.transporters.map((transporter) => {
								return <TransporterRow key={transporter.id} transporter={transporter} />;
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

			{transportersResponse && (
				<div className="flex w-full justify-end">
					<Pagination
						currentPage={transportersResponse.pagination.page}
						perPage={transportersResponse.pagination.per_page}
						totalCount={transportersResponse.pagination.total_occurrences}
						totalPages={transportersResponse.pagination.total_pages}
						onPageChange={(page) => handlePaginate(page)}
					/>
				</div>
			)}
		</div>
	);
}
