import { toast } from 'sonner';

import { ITicketDetails } from '@/@types/ticket';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { TabsContent } from '@/components/ui/tabs';

import { Copy } from 'lucide-react';

interface IProps {
	ticket: ITicketDetails;
}

export function ShareTabContent({ ticket }: IProps) {
	const publicUrl = `${location.origin}/share/${ticket.shareToken}`;

	function copyLinkToClipboard() {
		navigator.clipboard.writeText(publicUrl);
		toast.info('Copiado', { description: 'Link copied to the clipboard.' });
	}

	return (
		<TabsContent value="share">
			<Container>
				<div className="pb-2">
					<span className="leading-none font-semibold">Sharing</span>
				</div>

				<div>
					{ticket.status !== 'DRAFT' ? (
						<p className="text-muted-foreground">
							The link will be generated automatically when the ticket status is set to <b>shared</b>.
						</p>
					) : (
						<div className="flex w-full items-center justify-between">
							<a href="#" target="_blank" className="italic underline">
								{publicUrl}
							</a>

							<div className="flex items-center gap-2">
								<Button variant="outline" onClick={() => copyLinkToClipboard()}>
									<Copy /> Copy
								</Button>

								<Button variant="secondary">Revoke</Button>
							</div>
						</div>
					)}
				</div>
			</Container>
		</TabsContent>
	);
}
