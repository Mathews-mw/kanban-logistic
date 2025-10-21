'use client';

import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
	Copy,
	Download,
	Link as LinkIcon,
	MoreVertical,
	Share2,
	Upload,
	ArrowRightLeft,
	FileText,
	FileJson,
} from 'lucide-react';
import { toast } from 'sonner';

// --- helpers ---
function statusColor(s: string) {
	switch (s) {
		case 'DRAFT':
			return 'bg-gray-100 text-gray-700';
		case 'READY':
			return 'bg-blue-100 text-blue-700';
		case 'SHARED':
			return 'bg-green-100 text-green-700';
		case 'ARCHIVED':
			return 'bg-amber-100 text-amber-700';
		default:
			return 'bg-muted text-foreground';
	}
}

const canTransition: Record<string, string[]> = {
	DRAFT: ['READY'],
	READY: ['DRAFT', 'SHARED'],
	SHARED: ['ARCHIVED'],
	ARCHIVED: [],
};

// --- mock data (igual ao exemplo) ---
const MOCK: any = {
	ticket: {
		id: 't_123',
		number: '202510-000123',
		status: 'READY',
		unit: 'KG',
		tareWeight: 12480,
		grossWeight: 26340,
		netWeight: 13860,
		weighedAt: '2025-10-16T14:25:00.000Z',
		notes: 'Carga entregue sem anomalias. Motorista João.',
		createdAt: '2025-10-16T14:00:00.000Z',
		updatedAt: '2025-10-16T14:40:00.000Z',
		shareToken: null,
		supplier: { id: 'c1', name: 'Alzagri', vatNumber: 'BE0123.456.789' },
		customer: { id: 'c2', name: 'Cliente X', vatNumber: 'BE111.222.333' },
		deliveryPlant: {
			id: 'p1',
			name: 'Obra A',
			address1: 'Rua 1, 100',
			postalCode: '1000',
			city: 'Bruxelas',
			country: 'BE',
		},
		transporter: { id: 'c3', name: 'Transportes Y' },
		vehicle: { id: 'v1', plateNumber: '1-ABC-234', vehicleType: 'Truck' },
		product: { id: 'pr1', code: 'AREIA', description: 'Areia lavada' },
		files: [{ id: 'f1', type: 'PDF', url: 'https://example.com/sample.pdf', createdAt: '2025-10-16T14:10:00.000Z' }],
		events: [
			{ id: 'e1', action: 'CREATED', actorId: 'u1', createdAt: '2025-10-16T14:00:00.000Z' },
			{ id: 'e2', action: 'FILE_UPLOADED', meta: { type: 'PDF' }, createdAt: '2025-10-16T14:10:00.000Z' },
			{ id: 'e3', action: 'STATUS_CHANGE', from: 'DRAFT', to: 'READY', createdAt: '2025-10-16T14:12:00.000Z' },
		],
	},
};

export default function TicketDetailsPage() {
	const params = useParams();
	const router = useRouter();

	const [data, setData] = useState<any | null>(null);
	const t = data?.ticket;

	useEffect(() => {
		// simula fetch do ticket por id
		setTimeout(() => setData(MOCK), 250);
	}, []);

	const hasPDF = !!t?.files?.some((f: any) => f.type === 'PDF');
	const hasXML = !!t?.files?.some((f: any) => f.type === 'XML');

	const net = useMemo(() => {
		if (!t) return null;
		const v = (t.grossWeight ?? 0) - (t.tareWeight ?? 0);
		return Math.max(v, 0);
	}, [t]);

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
		toast.info('Copiado', { description: 'Link copiado para a área de transferência.' });
	}

	// --- handlers (mock) ---
	async function handleUploadMock(file: File) {
		// apenas demonstração
		if (!file) return;
		toast.info('Upload iniciado', { description: file.name });
		await new Promise((r) => setTimeout(r, 800));
		setData((prev: any) => ({
			ticket: {
				...prev.ticket,
				files: [
					...prev.ticket.files,
					{
						id: crypto.randomUUID(),
						type: file.type.includes('xml') ? 'XML' : 'PDF',
						url: URL.createObjectURL(file),
						createdAt: new Date().toISOString(),
					},
				],
				events: [
					{
						id: crypto.randomUUID(),
						action: 'FILE_UPLOADED',
						meta: { name: file.name },
						createdAt: new Date().toISOString(),
					},
					...prev.ticket.events,
				],
			},
		}));
		toast('Upload concluído', { description: `${file.name} anexado` });
	}

	function handleChangeStatus(to: string) {
		if (!t) return;
		if (!canTransition[t.status]?.includes(to)) {
			toast.warning('Transição inválida', { description: `${t.status} → ${to}` });
			return;
		}

		// gates de exemplo
		if (t.status === 'DRAFT' && to === 'READY' && !t.files?.length) {
			toast.warning('Anexo necessário', {
				description: 'Envie ao menos 1 arquivo para sair de DRAFT.',
			});
			return;
		}
		if (to === 'SHARED' && !hasPDF) {
			toast.warning('PDF obrigatório', { description: 'Envie um PDF para compartilhar.' });
			return;
		}

		setData((prev: any) => ({
			ticket: {
				...prev.ticket,
				status: to,
				shareToken:
					to === 'SHARED' ? (prev.ticket.shareToken ?? crypto.randomUUID().slice(0, 16)) : prev.ticket.shareToken,
				events: [
					{ id: crypto.randomUUID(), action: 'STATUS_CHANGE', from: t.status, to, createdAt: new Date().toISOString() },
					...prev.ticket.events,
				],
			},
		}));

		toast('Status atualizado', { description: `${t.number}: ${t.status} → ${to}` });
	}

	function handleShareCopy() {
		if (!t?.shareToken) return;
		const publicUrl = `${location.origin}/share/${t.shareToken}`;
		copyToClipboard(publicUrl);
	}

	function handleRevokeShare() {
		if (!t) return;
		setData((prev: any) => ({
			ticket: { ...prev.ticket, shareToken: null },
		}));
		toast('Link revogado');
	}

	function downloadBlob(name: string, mime: string, content: string) {
		const blob = new Blob([content], { type: mime });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = name;
		a.click();
		URL.revokeObjectURL(url);
	}

	function handleExportPDF() {
		if (!t) return;
		// conteúdo PDF real exigiria lib; para demo salvamos um .txt com nome .pdf
		downloadBlob(`${t.number}.pdf`, 'application/pdf', `PDF MOCK for ticket ${t.number}`);
	}

	function handleExportXML() {
		if (!t) return;
		const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<ticket>\n  <number>${t.number}</number>\n  <status>${t.status}</status>\n  <supplier>${t.supplier.name}</supplier>\n  <customer>${t.customer.name}</customer>\n  <product code="${t.product.code}">${t.product.description}</product>\n  <weights unit="${t.unit}">\n    <tare>${t.tareWeight ?? ''}</tare>\n    <gross>${t.grossWeight ?? ''}</gross>\n    <net>${t.netWeight ?? ''}</net>\n  </weights>\n</ticket>`;
		downloadBlob(`${t.number}.xml`, 'application/xml', xml);
	}

	if (!t) {
		return (
			<div className="mx-auto max-w-6xl px-4 py-10">
				<div className="text-muted-foreground text-sm">Carregando ticket…</div>
			</div>
		);
	}

	return (
		<TooltipProvider>
			<div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
				{/* Header */}
				<div className="flex items-start justify-between gap-4">
					<div>
						<h1 className="text-2xl font-semibold tracking-tight">Ticket #{t.number}</h1>
						<div className="text-muted-foreground mt-1 flex items-center gap-3 text-sm">
							<span>Criação: {new Date(t.createdAt).toLocaleString()}</span>
							<Separator orientation="vertical" className="h-4" />
							<span>Atualização: {new Date(t.updatedAt).toLocaleString()}</span>
							{t.weighedAt && (
								<>
									<Separator orientation="vertical" className="h-4" />
									<span>Pesado em: {new Date(t.weighedAt).toLocaleString()}</span>
								</>
							)}
							<Separator orientation="vertical" className="h-4" />
							<Badge className={statusColor(t.status)}>{t.status}</Badge>
						</div>
					</div>

					<div className="flex items-center gap-2">
						{/* Upload */}
						<label className="inline-flex items-center">
							<input
								type="file"
								className="hidden"
								accept="application/pdf,application/xml,.xml,.pdf"
								onChange={(e) => e.target.files && handleUploadMock(e.target.files[0])}
							/>
							<Button variant="outline" className="gap-2">
								<Upload className="h-4 w-4" /> Anexar
							</Button>
						</label>

						{/* Status */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button className="gap-2" variant="secondary">
									<ArrowRightLeft className="h-4 w-4" /> Status
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>Mudar para</DropdownMenuLabel>
								<DropdownMenuSeparator />
								{canTransition[t.status].map((to) => (
									<DropdownMenuItem key={to} onClick={() => handleChangeStatus(to)}>
										{to}
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>

						{/* Share */}
						{t.status === 'SHARED' && t.shareToken ? (
							<div className="flex items-center gap-2">
								<Button variant="outline" className="gap-2" onClick={handleShareCopy}>
									<Share2 className="h-4 w-4" /> Copiar link
								</Button>
								<Button variant="ghost" onClick={handleRevokeShare}>
									Revogar
								</Button>
							</div>
						) : (
							<Tooltip>
								<TooltipTrigger asChild>
									<div>
										<Button variant="outline" className="gap-2" disabled>
											<LinkIcon className="h-4 w-4" /> Compartilhar
										</Button>
									</div>
								</TooltipTrigger>
								<TooltipContent>Disponível quando o status for SHARED</TooltipContent>
							</Tooltip>
						)}

						{/* More */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" size="icon">
									<MoreVertical className="h-5 w-5" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem className="gap-2" onClick={handleExportPDF}>
									<FileText className="h-4 w-4" /> Exportar PDF
								</DropdownMenuItem>
								<DropdownMenuItem className="gap-2" onClick={handleExportXML}>
									<FileJson className="h-4 w-4" /> Exportar XML
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>

				{/* Top cards */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Card>
						<CardHeader className="pb-2">
							<CardTitle>Partes & Local</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2 text-sm">
							<div>
								<span className="text-muted-foreground">Supplier:</span> {t.supplier.name} ({t.supplier.vatNumber})
							</div>
							<div>
								<span className="text-muted-foreground">Customer:</span> {t.customer.name} ({t.customer.vatNumber})
							</div>
							<Separator />
							<div className="font-medium">Delivery Plant</div>
							<div>{t.deliveryPlant.name}</div>
							<div className="text-muted-foreground">{t.deliveryPlant.address1}</div>
							<div className="text-muted-foreground">
								{t.deliveryPlant.postalCode} · {t.deliveryPlant.city} · {t.deliveryPlant.country}
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="pb-2">
							<CardTitle>Transporte</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2 text-sm">
							<div>
								<span className="text-muted-foreground">Transporter:</span> {t.transporter.name}
							</div>
							<div>
								<span className="text-muted-foreground">Veículo:</span> {t.vehicle.plateNumber}{' '}
								{t.vehicle.vehicleType ? `· ${t.vehicle.vehicleType}` : ''}
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="pb-2">
							<CardTitle>Carga</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2 text-sm">
							<div>
								<span className="text-muted-foreground">Produto:</span> {t.product.code} — {t.product.description}
							</div>
							<div className="grid grid-cols-3 gap-2">
								<div>
									<div className="text-muted-foreground">Tare</div>
									<div className="font-medium">
										{t.tareWeight ?? '—'} {t.unit}
									</div>
								</div>
								<div>
									<div className="text-muted-foreground">Gross</div>
									<div className="font-medium">
										{t.grossWeight ?? '—'} {t.unit}
									</div>
								</div>
								<div>
									<div className="text-muted-foreground">Net</div>
									<div className="font-medium">
										{net ?? '—'} {t.unit}
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Notes */}
				{t.notes && (
					<Card>
						<CardHeader className="pb-2">
							<CardTitle>Observações</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground text-sm whitespace-pre-wrap">{t.notes}</p>
						</CardContent>
					</Card>
				)}

				{/* Tabs: Anexos / Timeline / Compartilhamento */}
				<Tabs defaultValue="files">
					<TabsList>
						<TabsTrigger value="files">Anexos</TabsTrigger>
						<TabsTrigger value="timeline">Linha do tempo</TabsTrigger>
						<TabsTrigger value="share">Compartilhamento</TabsTrigger>
					</TabsList>

					<TabsContent value="files" className="space-y-3">
						<div className="flex items-center gap-3">
							<Badge variant={hasPDF ? 'default' : 'secondary'}>PDF {hasPDF ? 'OK' : '—'}</Badge>
							<Badge variant={hasXML ? 'default' : 'secondary'}>XML {hasXML ? 'OK' : '—'}</Badge>
						</div>

						<Card>
							<CardHeader className="pb-2">
								<CardTitle>Arquivos</CardTitle>
							</CardHeader>
							<CardContent>
								{t.files?.length ? (
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Tipo</TableHead>
												<TableHead>Arquivo</TableHead>
												<TableHead>Data</TableHead>
												<TableHead className="text-right">Ações</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{t.files.map((f: any) => (
												<TableRow key={f.id}>
													<TableCell>{f.type}</TableCell>
													<TableCell>
														<a href={f.url} target="_blank" className="underline">
															{f.url.split('/').pop()}
														</a>
													</TableCell>
													<TableCell>{new Date(f.createdAt).toLocaleString()}</TableCell>
													<TableCell className="text-right">
														<Button size="sm" variant="outline" asChild>
															<a href={f.url} target="_blank" download>
																<Download className="mr-2 h-4 w-4" />
																Baixar
															</a>
														</Button>
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								) : (
									<div className="text-muted-foreground text-sm">Nenhum arquivo enviado.</div>
								)}

								<div className="mt-4">
									<Label className="text-sm">Enviar novo arquivo</Label>
									<div className="mt-1">
										<input
											type="file"
											accept="application/pdf,application/xml,.xml,.pdf"
											onChange={(e) => e.target.files && handleUploadMock(e.target.files[0])}
										/>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="timeline">
						<Card>
							<CardHeader className="pb-2">
								<CardTitle>Eventos</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3 text-sm">
									{t.events.map((ev: any) => (
										<li key={ev.id} className="flex items-start gap-2">
											<span className="bg-foreground mt-0.5 h-2 w-2 rounded-full" />
											<div>
												<div className="font-medium">{ev.action}</div>
												<div className="text-muted-foreground">{new Date(ev.createdAt).toLocaleString()}</div>
												{ev.from && ev.to && (
													<div className="text-muted-foreground">
														{ev.from} → {ev.to}
													</div>
												)}
												{ev.meta && (
													<pre className="bg-muted/40 mt-1 overflow-auto rounded p-2 text-xs">
														{JSON.stringify(ev.meta, null, 2)}
													</pre>
												)}
											</div>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="share">
						<Card>
							<CardHeader className="pb-2">
								<CardTitle>Compartilhamento</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3">
								{t.status !== 'SHARED' && (
									<div className="text-muted-foreground text-sm">
										O link público fica disponível quando o ticket estiver em <b>SHARED</b>.
									</div>
								)}
								{t.status === 'SHARED' && (
									<div className="space-y-2">
										{!t.shareToken ? (
											<div className="text-sm">
												O link será gerado automaticamente quando o status entrar em <b>SHARED</b>.
											</div>
										) : (
											<div className="flex items-center gap-2">
												<Input readOnly value={`${location.origin}/share/${t.shareToken}`} />
												<Button variant="outline" className="gap-2" onClick={handleShareCopy}>
													<Copy className="h-4 w-4" /> Copiar
												</Button>
												<Button variant="ghost" onClick={handleRevokeShare}>
													Revogar
												</Button>
											</div>
										)}
									</div>
								)}
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</TooltipProvider>
	);
}
