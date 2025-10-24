import { useRef } from 'react';

import { ITicketDocument } from '@/@types/ticket';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { CircleCheck, Download, Upload } from 'lucide-react';

interface IProps {
	documents: Array<ITicketDocument>;
}

export function FileTabContent({ documents }: IProps) {
	const hasPDF = documents.some((document) => document.type === 'PDF');
	const hasXML = documents.some((document) => document.type === 'XML');

	const canUpload = true;

	const inputRef = useRef<HTMLInputElement | null>(null);

	const onChooseFile = () => {
		if (inputRef) {
			inputRef.current?.click();
		}
	};

	return (
		<TabsContent value="files" className="space-y-3">
			<Container>
				<div className="flex w-full justify-between pb-2">
					<span className="leading-none font-semibold">Documents</span>

					<div>
						<input ref={inputRef} type="file" accept="application/pdf,application/xml,.xml,.pdf" className="hidden" />

						<Button
							type="button"
							variant="outline"
							onClick={onChooseFile}
							disabled={!canUpload}
							title="Only the sender can attach files."
							className="flex items-center justify-center gap-2 disabled:pointer-events-auto"
						>
							<Upload className="h-5 w-5" />
							Upload new file
						</Button>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Badge variant={hasPDF ? 'outline' : 'secondary'}>PDF {hasPDF ? <CircleCheck /> : '—'}</Badge>
					<Badge variant={hasXML ? 'outline' : 'secondary'}>XML {hasXML ? <CircleCheck /> : '—'}</Badge>
				</div>

				<div>
					{documents.length > 0 ? (
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[32px]"></TableHead>
									<TableHead>Type</TableHead>
									<TableHead>File</TableHead>
									<TableHead>Date</TableHead>
									<TableHead className="text-right"></TableHead>
									<TableHead className="w-[32px]"></TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{documents.map((document) => (
									<TableRow key={document.id}>
										<TableCell></TableCell>
										<TableCell>{document.type}</TableCell>
										<TableCell>
											<a href={'#'} target="_blank" className="underline">
												{document.path.split('/').pop()}
											</a>
										</TableCell>
										<TableCell>{new Date(new Date()).toLocaleString()}</TableCell>
										<TableCell className="text-right">
											<Button size="sm" variant="outline" asChild>
												<a href={document.path} target="_blank" download>
													<Download className="mr-2 h-4 w-4" />
													Download
												</a>
											</Button>
										</TableCell>
										<TableCell></TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					) : (
						<div className="text-muted-foreground text-sm">No files sent.</div>
					)}
				</div>
			</Container>
		</TabsContent>
	);
}
