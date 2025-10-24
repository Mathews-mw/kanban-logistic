import Papaparse from 'papaparse';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { parseRowForEntity } from '@/utils/process-csv/import-parse';
import { detectDelimiter, processRow, type Entity } from '@/utils/process-csv/process-csv';

// mapping: { CSV_header -> dbField }
type Mapping = Record<string, string>;

type ImportStats = {
	created: number;
	updated: number;
	skipped: number;
	errors: { row: number; message: string }[];
};

const BATCH_SIZE = 200;

// obrigatórios para habilitar o botão “Confirmar” e validar cada linha
const REQUIRED_BY_ENTITY: Record<Entity, string[]> = {
	Company: ['vatNumber', 'name'],
	Transporter: ['vatNumber', 'name'],
	Vehicle: ['plateNumber', 'transporterVat'],
	DeliveryPlant: ['name', 'companyVat'],
	Product: ['code', 'description'],
};

function chunkArray<T>(arr: T[], size: number): T[][] {
	const out: T[][] = [];
	for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
	return out;
}

// aplica mapping CSV -> objeto cru { dbField: rawValue }
function mapRow(headers: string[], row: string[], mapping: Mapping) {
	const idxByHeader = new Map(headers.map((h, i) => [h, i]));
	const obj: Record<string, unknown> = {};

	for (const [csvHeader, dbField] of Object.entries(mapping)) {
		if (!dbField) continue;

		const idx = idxByHeader.get(csvHeader);
		const value = idx !== undefined ? row[idx] : undefined;

		obj[dbField] = value;
	}

	return obj;
}

// Ordem recomendada: mantenha a ordem de import (Companies/Transporters → Vehicles → DeliveryPlants → Products) para reduzir skips.

export async function POST(request: NextRequest) {
	if (request.method !== 'POST') {
		return Response.json(
			{
				error: 'Method not allowed!',
			},
			{ status: 405 }
		);
	}

	const userId = request.headers.get('x-user-id');
	const companyId = request.headers.get('x-active-company-id');

	const startAt = new Date();

	try {
		const form = await request.formData();

		const file = form.get('file') as File | null;
		const entity = form.get('entity') as Entity | null;
		const mappingJson = form.get('mapping') as string | null;

		if (!file || !entity || !mappingJson) {
			return NextResponse.json({ message: 'file, entity and mapping are mandatory.' }, { status: 400 });
		}

		const mapping: Mapping = JSON.parse(mappingJson);

		// valida se todos obrigatórios estão mapeados
		const required = REQUIRED_BY_ENTITY[entity] || [];
		const mappedTargets = new Set(Object.values(mapping).filter(Boolean));
		const missing = required.filter((r) => !mappedTargets.has(r));

		if (missing.length) {
			return NextResponse.json({ message: `Mandatory fields not mapped: ${missing.join(', ')}` }, { status: 400 });
		}

		// lê CSV em memória
		const text = await file.text();
		const delimiter = detectDelimiter(text);

		const parsed = Papaparse.parse<string[]>(text, {
			delimiter,
			skipEmptyLines: true,
		});

		if (parsed.errors.length) {
			return NextResponse.json({ message: 'Error while try to read CSV', errors: parsed.errors }, { status: 400 });
		}

		const rows = parsed.data;

		if (!rows.length) {
			return NextResponse.json({ message: 'Empty CSV' }, { status: 400 });
		}

		const headers = rows[0];
		const bodyRows = rows.slice(1);

		// cria ImportJob (pendente)
		const importJob = await prisma.importJob.create({
			data: {
				userId,
				companyId,
				entity,
				mapping, // guarda o mapeamento
				source: file.name, // opcional: nome do arquivo enviado
				processedAt: null,
				success: null,
			},
		});

		// estatísticas
		const stats: ImportStats = { created: 0, updated: 0, skipped: 0, errors: [] };

		// processa em lotes
		const batches = chunkArray(bodyRows, BATCH_SIZE);

		for (let b = 0; b < batches.length; b++) {
			const batch = batches[b];

			// transação por lote (opcional, mas ajuda consistência em falhas por lote)
			await prisma.$transaction(async (tx) => {
				for (let i = 0; i < batch.length; i++) {
					const row = batch[i];
					const rowNumber = 1 /* header */ + b * BATCH_SIZE + (i + 1); // para report

					try {
						// aplica mapping no formato cru
						const rawObj = mapRow(headers, row, mapping);

						// valida com Zod para a entidade
						const parsedRes = parseRowForEntity(entity, rawObj);
						if (!parsedRes.ok) {
							stats.skipped++;
							stats.errors.push({ row: rowNumber, message: parsedRes.error });
							continue;
						}

						// executa upsert
						const res = await processRow(entity, parsedRes.data);
						if (res === 'created') stats.created++;
						else stats.updated++;
					} catch (e: unknown) {
						stats.skipped++;
						stats.errors.push({ row: rowNumber, message: (e as Error)?.message ?? 'unknown error' });
					}
				}
			});
		}

		// atualiza ImportJob (conclusão)
		await prisma.importJob.update({
			where: { id: importJob.id },
			data: {
				processedAt: new Date(),
				success: stats.errors.length === 0,
				stats,
			},
		});

		const durationMs = Date.now() - startAt.getTime();

		return NextResponse.json(
			{
				jobId: importJob.id,
				created: stats.created,
				updated: stats.updated,
				skipped: stats.skipped,
				errors: stats.errors.slice(0, 50), // limita retorno (log completo fica no ImportJob)
				durationMs,
				batches: batches.length,
				batchSize: BATCH_SIZE,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log('Process CSV route error: ', error);
		return NextResponse.json({ message: 'Unexpected error while processing CSV.' }, { status: 500 });
	}
}
