import { prisma } from '@/lib/prisma';
import { CompanyRole, Prisma } from '@/generated/client';
import { parseRowForEntity } from './import-parse';
import { CompanyImportRow, DeliveryPlantImportRow, ProductImportRow, VehicleImportRow } from './import-types';

export type Entity = 'Company' | 'Transporter' | 'Vehicle' | 'DeliveryPlant' | 'Product';

// detecta ; ou , (Europa geralmente ;)
export function detectDelimiter(text: string) {
	const semi = (text.match(/;/g) || []).length;
	const comma = (text.match(/,/g) || []).length;
	return semi > comma ? ';' : ',';
}

async function validateRolesToUpsert(vatNumber: string, addRole?: CompanyRole) {
	const existing = await prisma.company.findUnique({ where: { vatNumber } });

	const roles = new Set(existing?.roles ?? []);

	if (addRole) {
		roles.add(addRole);
	}

	return Array.from(roles);
}

// ---------- Handlers de entidade ----------
async function upsertCompany(row: CompanyImportRow, addRole?: 'SUPPLIER' | 'CUSTOMER' | 'TRANSPORTER') {
	const existing = await prisma.company.findUnique({ where: { vatNumber: row.vatNumber } });

	const roles = new Set(existing?.roles ?? []);

	if (addRole) {
		roles.add(addRole);
	}

	const data: Prisma.CompanyUncheckedCreateInput = {
		vatNumber: row.vatNumber,
		name: row.name || row.vatNumber,
		email: row.email ?? null,
		phone: row.phone ?? null,
		country: row.country ?? null,
		city: row.city ?? null,
		postalCode: row.postalCode ?? null,
		address1: row.address1 ?? null,
		address2: row.address2 ?? null,
		roles: Array.from(roles),
	};

	if (!existing) {
		await prisma.company.create({ data });
		return 'created' as const;
	} else {
		await prisma.company.update({ where: { vatNumber: row.vatNumber }, data });
		return 'updated' as const;
	}
}

async function upsertVehicle(row: VehicleImportRow) {
	const roles = await validateRolesToUpsert(row.transporterVat, 'TRANSPORTER');

	// garante a Company com role TRANSPORTER e obtém o id
	const t = await prisma.company.upsert({
		where: { vatNumber: row.transporterVat },
		create: { vatNumber: row.transporterVat, name: row.transporterVat, roles },
		update: {
			roles,
		},
	});

	const existing = await prisma.vehicle.findUnique({ where: { plateNumber: row.plateNumber } });

	const data: Prisma.VehicleUncheckedCreateInput = {
		plateNumber: row.plateNumber,
		vehicleType: row.vehicleType ?? null,
		tareWeight: row.tareWeight ?? null,
		maxLoadKg: row.maxLoadKg ?? null,
		transporterId: t.id,
	};

	if (!existing) {
		await prisma.vehicle.create({ data });
		return 'created' as const;
	} else {
		await prisma.vehicle.update({ where: { plateNumber: row.plateNumber }, data });
		return 'updated' as const;
	}
}

export async function upsertDeliveryPlant(row: DeliveryPlantImportRow) {
	const roles = await validateRolesToUpsert(row.companyVat, 'CUSTOMER');

	const c = await prisma.company.upsert({
		where: { vatNumber: row.companyVat },
		create: { vatNumber: row.companyVat, name: row.companyVat, roles },
		update: { roles },
	});

	const existing = await prisma.deliveryPlant.findFirst({ where: { name: row.name, companyId: c.id } });

	const data = {
		name: row.name,
		address1: row.address1 ?? null,
		postalCode: row.postalCode ?? null,
		city: row.city ?? null,
		country: row.country ?? null,
		companyId: c.id,
	};

	if (!existing) {
		await prisma.deliveryPlant.create({ data });
		return 'created' as const;
	}
	await prisma.deliveryPlant.update({ where: { id: existing.id }, data });
	return 'updated' as const;
}

async function upsertProduct(row: ProductImportRow) {
	let supplierId: string | null = null; // supplier opcional

	if (row.supplierVat) {
		const roles = await validateRolesToUpsert(row.supplierVat, 'SUPPLIER');

		const s = await prisma.company.upsert({
			create: { vatNumber: row.supplierVat, name: row.supplierVat, roles },
			update: { roles },
			where: { vatNumber: row.supplierVat },
		});

		supplierId = s.id;
	}

	const existing = await prisma.product.findUnique({ where: { code: row.code } });

	const data: Prisma.ProductUncheckedCreateInput = {
		code: row.code,
		description: row.description,
		unit: row.unit ?? null,
		density: row.density ?? null,
		supplierId,
	};

	if (!existing) {
		await prisma.product.create({ data });
		return 'created' as const;
	} else {
		await prisma.product.update({ where: { code: row.code }, data });
		return 'updated' as const;
	}
}

// ---------- Execução por entidade ----------
export async function processRow(entity: Entity, rawObj: Record<string, unknown>) {
	const parsed = parseRowForEntity(entity, rawObj);

	if (!parsed.ok) {
		throw new Error(parsed.error);
	}

	switch (entity) {
		case 'Company':
			return upsertCompany(parsed.data as CompanyImportRow);
		case 'Transporter':
			// Transporter é Company com role TRANSPORTER
			return upsertCompany(parsed.data as CompanyImportRow, 'TRANSPORTER');
		case 'Vehicle':
			return upsertVehicle(parsed.data as VehicleImportRow);
		case 'DeliveryPlant':
			return upsertDeliveryPlant(parsed.data as DeliveryPlantImportRow);
		case 'Product':
			return upsertProduct(parsed.data as ProductImportRow);
		default:
			throw new Error(`Entidade não suportada: ${entity}`);
	}
}
