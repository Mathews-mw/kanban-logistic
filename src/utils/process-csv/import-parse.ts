// import-parse.ts
import { z } from 'zod';
import { SchemasByEntity, type Entity, type ImportRowByEntity } from './import-types';

/** Aplica schema da entidade no objeto [dbField -> rawValue] */
export function parseRowForEntity<E extends Entity>(
	entity: E,
	raw: Record<string, unknown>
): { ok: true; data: ImportRowByEntity[E] } | { ok: false; error: string } {
	const schema = SchemasByEntity[entity] as z.ZodTypeAny;

	const res = schema.safeParse(raw);

	if (!res.success) {
		const msg = res.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ');

		return { ok: false, error: msg };
	}

	return { ok: true, data: res.data as ImportRowByEntity[E] };
}
