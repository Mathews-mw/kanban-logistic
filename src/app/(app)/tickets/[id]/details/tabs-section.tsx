import { ITicketDetails } from '@/@types/ticket';

import { FileTabContent } from './tabs-content/file-tab-content';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShareTabContent } from './tabs-content/share-tab-content';
import { TimelineTabContent } from './tabs-content/timeline-tab-content';

interface IProps {
	ticket: ITicketDetails;
}

export function TabsSection({ ticket }: IProps) {
	return (
		<Tabs defaultValue="files">
			<TabsList className="bg-card">
				<TabsTrigger value="files">Attachments</TabsTrigger>
				<TabsTrigger value="timeline">Time line</TabsTrigger>
				<TabsTrigger value="share">Sharing</TabsTrigger>
			</TabsList>

			<FileTabContent documents={ticket.documents} />
			<TimelineTabContent ticketEvents={ticket.events} />
			<ShareTabContent ticket={ticket} />
		</Tabs>
	);
}
