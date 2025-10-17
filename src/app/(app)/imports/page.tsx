'use client';

import { useMemo, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import MappingCanvas, { type FieldConfig } from '@/components/mapping-canvas';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { CheckCircle2, CircleX, CloudUpload, FileChartColumn, Info, Loader2, OctagonAlert, Trash2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Container } from '@/components/container';
import { PageTitle } from '@/components/page-title';
import { TablePreview } from './table-preview';
import { getReadableFileSize } from '@/utils/get-readable-file-size';
import { toast } from 'sonner';

type PreviewResponse = {
	headers: string[];
	sample: string[][];
	totalRows: number;
};

type ProcessResult = {
	jobId: string;
	created: number;
	updated: number;
	skipped: number;
	errors: { row: number; message: string }[];
	durationMs: number;
	batches: number;
	batchSize: number;
};

type Entity = 'Company' | 'Transporter' | 'Vehicle' | 'DeliveryPlant' | 'Product';

const FIELDS_BY_ENTITY: Record<Entity, FieldConfig[]> = {
	Company: [
		{ value: 'vatNumber', label: 'VAT Number', required: true },
		{ value: 'name', label: 'Company Name', required: true },
		{ value: 'email', label: 'Email' },
		{ value: 'phone', label: 'Phone' },
		{ value: 'country', label: 'Country' },
		{ value: 'city', label: 'City' },
		{ value: 'postalCode', label: 'Postal Code' },
		{ value: 'address1', label: 'Address Line 1' },
		{ value: 'address2', label: 'Address Line 2' },
	],
	Transporter: [
		{ value: 'vatNumber', label: 'VAT Number', required: true },
		{ value: 'name', label: 'Transporter Name', required: true },
		{ value: 'email', label: 'Email' },
		{ value: 'phone', label: 'Phone' },
		{ value: 'country', label: 'Country' },
		{ value: 'city', label: 'City' },
		{ value: 'postalCode', label: 'Postal Code' },
		{ value: 'address1', label: 'Address Line 1' },
		{ value: 'address2', label: 'Address Line 2' },
	],
	Vehicle: [
		{ value: 'plateNumber', label: 'Plate Number', required: true },
		{ value: 'vehicleType', label: 'Vehicle Type' },
		{ value: 'tareWeight', label: 'Tare Weight (Kg)' },
		{ value: 'maxLoadKg', label: 'Max Load (kg)' },
		{ value: 'transporterVat', label: 'Transporter VAT', required: true },
	],
	DeliveryPlant: [
		{ value: 'name', label: 'Plant/Worksite Name', required: true },
		{ value: 'address1', label: 'Address Line 1' },
		{ value: 'postalCode', label: 'Postal Code' },
		{ value: 'city', label: 'City' },
		{ value: 'country', label: 'Country' },
		{ value: 'companyVat', label: 'Customer VAT', required: true },
	],
	Product: [
		{ value: 'code', label: 'Product Code', required: true },
		{ value: 'description', label: 'Description', required: true },
		{ value: 'unit', label: 'Unit (KG/T/M3)' },
		{ value: 'density', label: 'Density' },
		{ value: 'supplierVat', label: 'Supplier VAT' },
	],
};

export default function ImportPage() {
	const [entity, setEntity] = useState<Entity | undefined>();
	const [file, setFile] = useState<File | null>(null);
	const [preview, setPreview] = useState<PreviewResponse | null>(null);
	const [loading, setLoading] = useState(false);
	const [notice, setNotice] = useState<string | null>(null);
	const [result, setResult] = useState<ProcessResult | null>(null); // state para guardar o retorno
	const [error, setError] = useState<string | null>(null);
	const [isDraggingOver, setIsDraggingOver] = useState(false);

	console.log('notice: ', notice);

	const fileInputRef = useRef<HTMLInputElement>(null);

	const fields = useMemo(() => {
		if (entity) {
			return FIELDS_BY_ENTITY[entity];
		}
	}, [entity]);

	async function requestPreview(f: File) {
		setError(null);
		setNotice(null);
		setLoading(true);
		try {
			const form = new FormData();
			form.append('file', f);
			const res = await fetch('/api/import/preview', { method: 'POST', body: form });
			if (!res.ok) throw new Error(await res.text());
			const data: PreviewResponse = await res.json();
			setPreview(data);
		} catch (e: unknown) {
			toast.error('Failed to generate preview!');
			setError((e as Error)?.message || 'Failed to generate preview.');
			setPreview(null);
		} finally {
			setLoading(false);
		}
	}

	function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
		const f = e.target.files?.[0] || null;
		setFile(f);
		if (f) void requestPreview(f);
	}

	function onDrop(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault();
		const f = e.dataTransfer.files?.[0];
		if (f) {
			setFile(f);
			void requestPreview(f);
		}
		handleDragOut(e);
	}

	function handleDragIn(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();
		event.stopPropagation();
		setIsDraggingOver(true);
	}

	function handleDragOut(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();
		event.stopPropagation();
		setIsDraggingOver(false);
	}

	function removeFile() {
		setFile(null);
		setPreview(null);

		if (fileInputRef.current) fileInputRef.current.value = '';
	}

	function downloadErrorsCSV(errors: { row: number; message: string }[]) {
		const header = 'row,message\n';
		const lines = errors.map((e) => `${e.row},"${e.message.replaceAll('"', '""')}"`).join('\n');
		const blob = new Blob([header + lines], { type: 'text/csv;charset=utf-8;' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `import-errors-${new Date().toISOString()}.csv`;
		a.click();
		URL.revokeObjectURL(url);
	}

	async function handleConfirmMapping(mapping: Record<string, string>) {
		if (!file || !preview) return;

		if (!entity) {
			return toast.warning('Please, select a data type');
		}

		setLoading(true);
		setError(null);
		setNotice(null);
		setResult(null);

		try {
			const form = new FormData();
			form.append('file', file);
			form.append('entity', entity);
			form.append('mapping', JSON.stringify(mapping));

			const res = await fetch('/api/import/process', { method: 'POST', body: form });
			if (!res.ok) {
				const txt = await res.text();
				throw new Error(txt || 'Falha ao processar.');
			}

			const data: ProcessResult = await res.json();

			setResult(data);
			setNotice(
				`Import #${data.jobId} complete on ${(data.durationMs / 1000).toFixed(1)}s: ${data.created} created, ${data.updated} updated, ${data.skipped} skipped.\t`
			);

			toast.success('The process was completed successfully!');
		} catch (e: unknown) {
			toast.error('An error occurred during processing!');
			setError((e as Error)?.message ?? 'Error processing import.');
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="space-y-8">
			<PageTitle
				title="Import CSV"
				description="Upload a CSV from the ERP and save it to the system after mapping the fields."
			/>

			<Container className="flex flex-row">
				<Info className="text-primary" />
				<p>
					First, select the type of data you want to import. Then, use Chart Flow to map the data fields to import and
					save. Check the headers and create a visual map by dragging links from the left side (CSV) to the right
					(Bank).
				</p>
			</Container>

			<Container>
				<div className="space-y-2">
					<Label>Data type</Label>
					<Select
						value={entity}
						onValueChange={(value) => {
							setEntity(value as Entity);
							setPreview(null);
							setFile(null);
						}}
					>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select type" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Company">Company</SelectItem>
							<SelectItem value="Transporter">Transporter</SelectItem>
							<SelectItem value="Vehicle">Vehicle</SelectItem>
							<SelectItem value="DeliveryPlant">DeliveryPlant</SelectItem>
							<SelectItem value="Product">Product</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</Container>

			{/* Dropzone / Input */}
			<div className="flex w-full flex-col items-center justify-center gap-2">
				<div
					data-disabled={!entity}
					onDrop={onDrop}
					onDragOver={handleDragIn}
					onDragEnter={handleDragIn}
					onDragLeave={handleDragOut}
					onDragEnd={handleDragOut}
					className={`bg-card flex w-full max-w-lg flex-col items-center justify-between gap-4 rounded-lg border p-6 ${isDraggingOver && 'border-primary'} data-[disabled=true]:bg-card/50`}
				>
					<div>
						<input type="file" accept=".csv" onChange={onFileChange} ref={fileInputRef} className="hidden" />
						<Button
							disabled={!entity}
							variant="outline"
							onClick={() => fileInputRef.current?.click()}
							className="bg-card rounded border px-4 py-2"
						>
							<CloudUpload className="size-5" />
						</Button>
					</div>

					<div className="flex w-full flex-col">
						<div className="flex justify-center gap-1">
							<button
								disabled={!entity}
								onClick={() => fileInputRef.current?.click()}
								className="text-primary cursor-pointer text-sm font-medium hover:underline disabled:pointer-events-none disabled:opacity-50"
							>
								Click to upload
							</button>
							<span className="text-muted-foreground text-sm font-medium">or drag and drop</span>
						</div>

						<small className="text-muted-foreground text-center">Only accepts CSV files</small>
					</div>
				</div>

				{file && (
					<div className="relative flex w-full max-w-sm gap-2 rounded-md border p-4">
						<FileChartColumn className="text-primary size-6" />

						<div className="text-sm">
							<span className="font-medium">{file.name}</span>
							<div className="flex h-4 items-center gap-2 text-xs text-gray-600">
								<span>{getReadableFileSize(file.size)}</span>
								<Separator orientation="vertical" />

								{loading && !error ? (
									<div className="flex items-center gap-1">
										<Loader2 className="size-4 animate-spin" />
										<span>Uploading...</span>
									</div>
								) : (
									<div className="flex items-center gap-1 text-emerald-500">
										<CheckCircle2 className="size-4" />
										<span>complete</span>
									</div>
								)}
							</div>
						</div>

						<Button
							variant="ghost"
							size="sm"
							onClick={() => removeFile()}
							className="text-muted-foreground absolute top-2 right-2 hover:text-rose-400"
						>
							<Trash2 />
						</Button>
					</div>
				)}
			</div>

			{loading && <div className="mt-4 text-sm">Processando…</div>}

			{error && (
				<Container className="flex w-full flex-row items-center justify-between">
					<div className="flex items-center gap-2">
						<OctagonAlert className="text-rose-500" />
						<p className="text-amber-700">{error}</p>
					</div>
				</Container>
			)}

			{/* Tabela de amostras */}
			{preview && !loading && (
				<TablePreview headers={preview.headers} sample={preview.sample} totalRows={preview.totalRows} />
			)}

			{/* Canvas de mapeamento */}
			{preview && fields && !loading && (
				<div className="space-y-2.5">
					<h4 className="text-lg font-bold">Data Fields</h4>

					<Container className="flex flex-row">
						<Info className="text-primary" />
						<p>
							On the left are the CSV file fields and on the right are the database fields. Drag a link from the CSV
							file to the database field to create the correct relationship and save the data to the system.
						</p>
					</Container>

					<MappingCanvas headers={preview.headers} fields={fields} onConfirm={handleConfirmMapping} height={560} />
				</div>
			)}

			{/* Import result */}
			{result && (
				<div className="mt-6">
					<h3 className="mb-2 text-lg font-semibold">Import result</h3>

					<div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
						<div className="bg-card rounded border p-3">
							<div className="text-muted-foreground text-xs">Job ID</div>
							<div className="font-mono text-sm">{result.jobId}</div>
						</div>
						<div className="bg-card rounded border p-3">
							<div className="text-muted-foreground text-xs">Created</div>
							<div className="font-semibold">{result.created}</div>
						</div>
						<div className="bg-card rounded border p-3">
							<div className="text-muted-foreground text-xs">Updated</div>
							<div className="font-semibold">{result.updated}</div>
						</div>
						<div className="bg-card rounded border p-3">
							<div className="text-muted-foreground text-xs">Skipped</div>
							<div className="font-semibold">{result.skipped}</div>
						</div>
					</div>

					{result.errors.length > 0 && (
						<div className="space-y-4">
							<Container className="flex w-full flex-row items-center justify-between">
								<div className="flex items-center gap-2">
									<OctagonAlert className="text-rose-500" />
									<p className="text-amber-700">{result.errors.length} line(s) with error. Below are the first 50:</p>
								</div>

								<Button variant="outline" onClick={() => downloadErrorsCSV(result.errors)}>
									Download errors (CSV)
								</Button>
							</Container>

							<div className="bg-card overflow-auto rounded-md border">
								<table className="min-w-full text-sm">
									<thead className="bg-muted">
										<tr>
											<th className="border-b px-3 py-2 text-left">Row</th>
											<th className="border-b px-3 py-2 text-left">Error</th>
										</tr>
									</thead>
									<tbody>
										{result.errors.slice(0, 50).map((e, i) => (
											<tr key={i} className="odd:bg-card even:bg-muted">
												<td className="border-b px-3 py-2">{e.row}</td>
												<td className="border-b px-3 py-2 whitespace-pre-wrap">{e.message}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					)}

					<div className="text-muted-foreground mt-3 text-xs">
						{result.batches} piece(s) of {result.batchSize} lines • complete on {(result.durationMs / 1000).toFixed(1)}s
					</div>
				</div>
			)}
		</div>
	);
}
