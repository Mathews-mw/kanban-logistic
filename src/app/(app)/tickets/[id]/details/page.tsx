'use client';

import { use } from 'react';
import { useQuery } from '@tanstack/react-query';

import { TabsSection } from './tabs-section';
import { NotesSection } from './notes-section';
import { SkeletonPage } from './skeleton-page';
import { HeaderSection } from './header-section';
import { PageTitle } from '@/components/page-title';
import { TopCardSection } from './top-cards-section';
import { getTicketDetails } from '@/_http/requests/tickets/get-ticket-details';

interface IProps {
	params: Promise<{
		id: string;
	}>;
}

const canTransition: Record<string, string[]> = {
	DRAFT: ['READY'],
	READY: ['DRAFT', 'SHARED'],
	SHARED: ['ARCHIVED'],
	ARCHIVED: [],
};

export default function TicketDetailsPage({ params }: IProps) {
	const { id: ticketId } = use(params);

	const { data: ticketResponse } = useQuery({
		queryKey: ['ticket_details', ticketId],
		queryFn: async () => getTicketDetails({ ticketId }),
	});

	if (!ticketResponse) {
		return <SkeletonPage />;
	}

	return (
		<div className="space-y-8">
			<PageTitle backButton title="Ticket details" description="See full details and manage your ticket here." />

			<HeaderSection ticket={ticketResponse} />
			<TopCardSection ticket={ticketResponse} />
			<NotesSection description={ticketResponse.notes} />
			<TabsSection ticket={ticketResponse} />
		</div>
	);
}
