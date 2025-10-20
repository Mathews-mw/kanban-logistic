'use client';

import { Container } from '@/components/container';
import { PageTitle } from '@/components/page-title';
import { Button } from '@/components/ui/button';
import { TicketPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TicketsPage() {
	const navigate = useRouter();

	return (
		<div className="space-y-8">
			<PageTitle title="Tickets" />

			<Container>
				<div className="flex w-full justify-end">
					<Button onClick={() => navigate.push('/tickets/new')}>
						<TicketPlus />
						New Ticket
					</Button>
				</div>
			</Container>
		</div>
	);
}
