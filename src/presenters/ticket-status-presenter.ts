import { TicketStatus } from '@/generated/client';

export class TicketStatusPresenter {
	static toHTTP(status: TicketStatus): string {
		let statusText: string = 'Draft';

		switch (status) {
			case 'DRAFT':
				statusText = 'Draft';
				break;
			case 'ARCHIVED':
				statusText = 'Archived';
				break;
			case 'READY':
				statusText = 'Ready';
				break;
			case 'SHARED':
				statusText = 'Shared';
				break;
			case 'CANCELED':
				statusText = 'Canceled';
				break;
			default:
				statusText = 'Draft';
		}

		return statusText;
	}
}
