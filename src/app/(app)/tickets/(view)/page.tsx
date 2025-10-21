'use client';

import z from 'zod';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useUser } from '@/context/user-context';
import { listingTickets } from '@/_http/requests/tickets/listing-tickets';

import { Filters } from './filters';
import { SkeletonRow } from './skeleton-row';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { PageTitle } from '@/components/page-title';
import { TicketTableRow } from './ticket-table-row';
import { TableContainer } from '@/components/table-container';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { TicketPlus } from 'lucide-react';
import { Pagination } from '@/components/pagination';

export default function TicketsPage() {
	const { userProfile } = useUser();

	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const pathname = usePathname();
	const { replace, push } = useRouter();

	const currentPageParams = z.coerce.number().parse(searchParams.get('page') ?? '1');
	const perPageParams = z.union([z.literal('all'), z.coerce.number()]).parse(searchParams.get('perPage') ?? '10');
	const searchQueryParams = searchParams.get('search') ?? undefined;
	const orderByParams = searchParams.get('orderBy') ?? undefined;

	const { data: ticketsResponse, isFetching } = useQuery({
		queryKey: ['tickets', currentPageParams, perPageParams, searchQueryParams],
		queryFn: async () =>
			listingTickets({
				page: currentPageParams,
				perPage: perPageParams,
				scope: userProfile?.role ? (userProfile.role === 'ADMIN' ? 'all' : userProfile.role) : undefined,
				q: searchQueryParams,
			}),
		enabled: !!userProfile,
	});

	function handlePaginate(page: number) {
		params.set('page', page.toString());
		replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="space-y-8">
			<PageTitle title="Tickets" />

			<div className="space-y-4">
				<Container>
					<div className="flex w-full justify-between">
						<Filters isFetching={isFetching} />

						<Button onClick={() => push('/tickets/new')}>
							<TicketPlus />
							New Ticket
						</Button>
					</div>
				</Container>

				<TableContainer>
					<Table>
						<TableHeader className="bg-muted">
							<TableRow>
								<TableHead className="w-[32px]"></TableHead>
								<TableHead>Number</TableHead>
								<TableHead>Product</TableHead>
								<TableHead>Customer</TableHead>
								<TableHead>Transporter</TableHead>
								<TableHead>Plate</TableHead>
								<TableHead>Net</TableHead>
								<TableHead>Created At</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className="w-[64px]"></TableHead>
							</TableRow>
						</TableHeader>
						{ticketsResponse ? (
							<TableBody>
								{ticketsResponse.tickets.map((ticket) => {
									return <TicketTableRow key={ticket.id} ticket={ticket} />;
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

				{ticketsResponse && (
					<div className="flex w-full justify-end">
						<Pagination
							currentPage={ticketsResponse.pagination.page}
							perPage={ticketsResponse.pagination.per_page}
							totalCount={ticketsResponse.pagination.total_occurrences}
							totalPages={ticketsResponse.pagination.total_pages}
							onPageChange={(page) => handlePaginate(page)}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
