import { useQuery } from '@tanstack/react-query';

import { listingUserCompaniesMembership } from '@/_http/requests/users/listing-user-companies-membership';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { Separator } from '@/components/ui/separator';
import { CompanyRoleBadge } from '@/components/company-role-badge';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import { Info } from 'lucide-react';
import { FaBuildingUser } from 'react-icons/fa6';

interface IProps {
	userId: string;
}

export function CompaniesCard({ userId }: IProps) {
	const { data } = useQuery({
		queryKey: ['companies_membership', userId],
		queryFn: async () => listingUserCompaniesMembership({ userId }),
	});

	return (
		<Container className="h-min">
			<div className="flex items-center gap-2">
				<FaBuildingUser className="text-primary size-6" />
				<h4 className="text-lg font-semibold">Companies Membership</h4>
			</div>

			<div className="flex items-center gap-2">
				<Info className="size-5" />
				<p className="text-muted-foreground">The list of companies that your user profile is associated with.</p>
			</div>

			{data && (
				<ul className="w-full space-y-2 divide-y">
					{data.companies_membership.map((cm) => {
						return (
							<li key={cm.id} className="py-2 first:pt-0 last:pb-0">
								<div className="flex w-full justify-between">
									<span>{cm.company.name}</span>

									<Dialog>
										<DialogTrigger asChild>
											<Button variant="outline" size="sm">
												Details
											</Button>
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>{cm.company.name}</DialogTitle>
												<DialogDescription>Company details</DialogDescription>
											</DialogHeader>

											<div className="space-y-2">
												<div>
													<span className="text-muted-foreground">VAT: </span>
													<span className="font-medium">{cm.company.vatNumber}</span>
												</div>
												<div>
													<span className="text-muted-foreground">E-mail: </span>
													<span className="font-medium">{cm.company.email}</span>
												</div>
												<div>
													<span className="text-muted-foreground">Phone: </span>
													<span className="font-medium">{cm.company.phone}</span>
												</div>
												<div>
													<span className="text-muted-foreground">Location: </span>
													<span className="text-sm font-medium">
														{cm.company.address1} • {cm.company.city} • {cm.company.country}
													</span>
												</div>

												<Separator />

												<div className="flex flex-col gap-2">
													<span className="text-muted-foreground">Company Roles </span>

													<div className="space-x-2">
														{cm.company.roles.map((role) => (
															<CompanyRoleBadge key={role} variant={role}>
																{role}
															</CompanyRoleBadge>
														))}
													</div>
												</div>

												<div className="flex flex-col gap-2">
													<span className="text-muted-foreground">Membership Roles </span>

													<div className="space-x-2">
														{cm.roles.map((role) => (
															<CompanyRoleBadge key={role} variant={role}>
																{role}
															</CompanyRoleBadge>
														))}
													</div>
												</div>
											</div>
										</DialogContent>
									</Dialog>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</Container>
	);
}
