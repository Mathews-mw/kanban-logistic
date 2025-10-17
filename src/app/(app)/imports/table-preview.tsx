import { TableContainer } from '@/components/table-container';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface IProps {
	headers: string[];
	sample: string[][];
	totalRows: number;
}

export function TablePreview({ headers, sample, totalRows }: IProps) {
	return (
		<div className="space-y-2.5">
			<h4 className="text-lg font-bold">Data Preview</h4>

			<TableContainer>
				<Table>
					<TableCaption className="p-2">Preview loaded from CSV data.</TableCaption>

					<TableHeader className="bg-muted">
						<TableRow>
							<TableHead className="w-[32px]"></TableHead>
							{headers.map((h) => (
								<TableHead key={h}>{h}</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{sample.map((row, idx) => (
							<TableRow key={idx}>
								<TableCell></TableCell>
								{row.map((cell, i) => (
									<TableCell key={i}>{cell}</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<span className="text-muted-foreground text-sm">
				Detected rows: <strong>{totalRows}</strong>. The actual processing will occur when you confirm the mapping — we
				will send <i>file + entity + mapping</i> to process.
			</span>
		</div>
	);
}
