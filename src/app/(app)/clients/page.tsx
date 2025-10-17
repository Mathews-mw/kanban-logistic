'use client';

import z from 'zod';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { listingClients } from '@/_http/requests/clients/listing-clients';

import { Button } from '@/components/ui/button';
import { Filters } from './(components)/filters';
import { Container } from '@/components/container';
import { PageTitle } from '@/components/page-title';
import { Pagination } from '@/components/pagination';
import { ClientRow } from './(components)/client-row';
import { SkeletonRow } from './(components)/skeleton-row';
import { TableContainer } from '@/components/table-container';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { UserPlus } from 'lucide-react';

export default function ClientsPage() {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const pathname = usePathname();
	const { replace, push } = useRouter();

	const currentPageParams = z.coerce.number().parse(searchParams.get('page') ?? '1');
	const perPageParams = z.union([z.literal('all'), z.coerce.number()]).parse(searchParams.get('perPage') ?? '10');
	const searchQueryParams = searchParams.get('search') ?? undefined;
	const orderByParams = searchParams.get('orderBy') ?? undefined;

	const { data: clientsResponse, isFetching } = useQuery({
		queryKey: ['clients', currentPageParams, perPageParams, searchQueryParams],
		queryFn: async () => listingClients({ page: currentPageParams, perPage: perPageParams, search: searchQueryParams }),
	});

	function handlePaginate(page: number) {
		params.set('page', page.toString());
		replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="space-y-8">
			<PageTitle title="Clients" />

			<Container>
				<div className="flex w-full justify-between gap-4">
					<Filters isFetching={isFetching} />

					<Button onClick={() => push('/clients/create')}>
						<UserPlus /> New Costumer
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
							<TableHead>E-mail</TableHead>
							<TableHead>Phone</TableHead>
							<TableHead className="w-[64px]"></TableHead>
						</TableRow>
					</TableHeader>
					{clientsResponse ? (
						<TableBody>
							{clientsResponse.clients.map((client) => {
								return <ClientRow key={client.id} client={client} />;
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

			{clientsResponse && (
				<div className="flex w-full justify-end">
					<Pagination
						currentPage={clientsResponse.pagination.page}
						perPage={clientsResponse.pagination.per_page}
						totalCount={clientsResponse.pagination.total_occurrences}
						totalPages={clientsResponse.pagination.total_pages}
						onPageChange={(page) => handlePaginate(page)}
					/>
				</div>
			)}
		</div>
	);
}
