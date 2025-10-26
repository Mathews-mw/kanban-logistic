import z from 'zod';
import dayjs from 'dayjs';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { listingCompanyInvitations } from '@/_http/requests/invitations/listing-company-invitations';

import { Button } from '@/components/ui/button';
import { DialogClose } from '@radix-ui/react-dialog';
import { Pagination } from '@/components/pagination';
import { InviteMemberDialog } from './invite-member-dialog';
import { TableContainer } from '@/components/table-container';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import { MailX } from 'lucide-react';
import { FaUserShield } from 'react-icons/fa';

interface IProps {
	companyId: string;
}

export function InvitationsTabContent({ companyId }: IProps) {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const pathname = usePathname();
	const { replace } = useRouter();

	const currentPageParams = z.coerce.number().parse(searchParams.get('page') ?? '1');
	const perPageParams = z.union([z.literal('all'), z.coerce.number()]).parse(searchParams.get('perPage') ?? '10');

	const { data } = useQuery({
		queryKey: ['company_invitations', companyId, currentPageParams, perPageParams],
		queryFn: async () => listingCompanyInvitations({ page: currentPageParams, perPage: perPageParams, companyId }),
	});

	function handlePaginate(page: number) {
		params.set('page', page.toString());
		replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="space-y-6">
			<div className="flex w-full items-center justify-between">
				<h4 className="text-lg font-bold">Invitations sent</h4>

				<InviteMemberDialog companyId={companyId} />
			</div>

			<div className="w-full space-y-4">
				<TableContainer>
					<Table>
						<TableHeader className="bg-muted">
							<TableRow>
								<TableHead className="w-[16px]"></TableHead>
								<TableHead>To</TableHead>
								<TableHead>Sent by</TableHead>
								<TableHead>Sent at</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className="text-center">Assigned roles</TableHead>
								<TableHead className="w-[32px]"></TableHead>
								<TableHead className="w-[16px]"></TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{data ? (
								<>
									{data.invitations.map((invitation) => {
										return (
											<TableRow key={invitation.id}>
												<TableCell></TableCell>
												<TableCell>{invitation.email}</TableCell>
												<TableCell>{invitation.createdBy.name}</TableCell>
												<TableCell>{dayjs(invitation.createdAt).fromNow()}</TableCell>
												<TableCell>{invitation.acceptedAt ? 'Accept' : 'Pending'}</TableCell>
												<TableCell align="center">
													<Dialog>
														<DialogTrigger asChild>
															<Button variant="secondary" size="sm">
																<FaUserShield className="size-5" />
															</Button>
														</DialogTrigger>
														<DialogContent>
															<DialogHeader>
																<DialogTitle>Roles granted to the guest</DialogTitle>
																<DialogDescription>
																	The following roles were granted in the invitation sent.
																</DialogDescription>
															</DialogHeader>

															<div>
																<ul className="ml-4 list-disc space-y-1">
																	{invitation.roles.map((role) => {
																		return <li key={role}>{role}</li>;
																	})}
																</ul>
															</div>

															<DialogFooter>
																<DialogClose>Close</DialogClose>
															</DialogFooter>
														</DialogContent>
													</Dialog>
												</TableCell>
												<TableCell>
													<Button size="sm" variant="secondary">
														<MailX /> Revoke
													</Button>
												</TableCell>
												<TableCell></TableCell>
											</TableRow>
										);
									})}
								</>
							) : (
								<div>
									<span>no data</span>
								</div>
							)}
						</TableBody>
					</Table>
				</TableContainer>

				{data && (
					<Pagination
						currentPage={data.pagination.page}
						perPage={data.pagination.per_page}
						totalCount={data.pagination.total_occurrences}
						totalPages={data.pagination.total_pages}
						onPageChange={(page) => handlePaginate(page)}
						disableTotalAmountLabel
					/>
				)}
			</div>
		</div>
	);
}
