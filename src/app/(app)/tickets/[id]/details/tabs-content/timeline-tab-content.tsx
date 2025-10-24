import dayjs from 'dayjs';

import { ITicketEventDetails } from '@/@types/ticket';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import { Braces } from 'lucide-react';

interface IProps {
	ticketEvents: Array<ITicketEventDetails>;
}

export function TimelineTabContent({ ticketEvents }: IProps) {
	return (
		<TabsContent value="timeline">
			<Container>
				<div className="pb-2">
					<span className="leading-none font-semibold">Event logs</span>
				</div>

				<div>
					<Table>
						<TableCaption>A list of recent ticket events.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[32px]"></TableHead>
								<TableHead>Action</TableHead>
								<TableHead>Actor</TableHead>
								<TableHead>From</TableHead>
								<TableHead>To</TableHead>
								<TableHead>Registered in</TableHead>
								<TableHead className="text-right">Details</TableHead>
								<TableHead className="w-[32px]"></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{ticketEvents.length > 0 ? (
								<>
									{ticketEvents.map((event) => {
										return (
											<TableRow key={event.id}>
												<TableCell></TableCell>
												<TableCell className="font-medium">{event.action}</TableCell>
												<TableCell>{event.actor.name}</TableCell>
												<TableCell>{event.from}</TableCell>
												<TableCell>{event.to}</TableCell>
												<TableCell>{dayjs(event.createdAt).format('DD/MM/YYYY [•] HH:mm')}</TableCell>
												<TableCell className="text-right">
													<Dialog>
														<DialogTrigger asChild>
															<Button size="xs" variant="outline" disabled={!event.meta}>
																<Braces />
															</Button>
														</DialogTrigger>
														<DialogContent>
															<DialogHeader>
																<DialogTitle>Details</DialogTitle>
																<DialogDescription>Event details.</DialogDescription>
															</DialogHeader>

															<div>
																<pre className="bg-muted/40 mt-1 overflow-auto rounded p-2 text-xs">
																	{JSON.stringify(event.meta, null, 2)}
																</pre>
															</div>

															<DialogFooter>
																<DialogClose>Close</DialogClose>
															</DialogFooter>
														</DialogContent>
													</Dialog>
												</TableCell>
												<TableCell></TableCell>
											</TableRow>
										);
									})}
								</>
							) : (
								<div className="text-muted-foreground text-sm">There are no registered events yet.</div>
							)}
						</TableBody>
					</Table>
				</div>
			</Container>
		</TabsContent>
	);
}
