import { z } from 'zod';

/** helpers */
const optionalTrimmed = z
	.string()
	.transform((s) => s.trim())
	.pipe(z.string().min(0))
	.optional();

const trimmed = z
	.string()
	.min(1)
	.transform((s) => s.trim());

const vat = z
	.string({ error: 'Please, provide a valid VAT' })
	.min(1, { error: 'Please, provide a valid VAT' })
	.transform((s) =>
		s
			.trim()
			.toUpperCase()
			.replace(/\s+|\./g, '')
	);
const numberEU = z.coerce
	.number()
	.transform((s) => s.toString().trim())
	.transform((s) => (s === '' ? undefined : Number(s.replace(/\./g, '').replace(',', '.'))))
	.refine((v) => v === undefined || Number.isFinite(v), 'Invalid number')
	.optional();

/** Company / Transporter (mesma shape; role é regra do serviço, não do DTO) */
export const CompanyRowSchema = z.object({
	vatNumber: vat,
	name: trimmed,
	email: optionalTrimmed,
	phone: optionalTrimmed,
	country: optionalTrimmed,
	city: optionalTrimmed,
	postalCode: optionalTrimmed,
	address1: optionalTrimmed,
	address2: optionalTrimmed,
});

export type CompanyImportRow = z.infer<typeof CompanyRowSchema>;

/** Vehicle */
export const VehicleRowSchema = z.object({
	plateNumber: trimmed.transform((s) => s.toUpperCase()),
	vehicleType: optionalTrimmed,
	tareWeight: numberEU,
	maxLoadKg: numberEU, // aceita "1.234,56"
	transporterVat: vat, // obrigatório (FK)
});

export type VehicleImportRow = z.infer<typeof VehicleRowSchema>;

/** DeliveryPlant */
export const DeliveryPlantRowSchema = z.object({
	name: trimmed,
	address1: optionalTrimmed,
	postalCode: optionalTrimmed,
	city: optionalTrimmed,
	country: optionalTrimmed,
	companyVat: vat, // obrigatório (FK)
});

export type DeliveryPlantImportRow = z.infer<typeof DeliveryPlantRowSchema>;

/** Product */
export const ProductRowSchema = z.object({
	code: trimmed,
	description: trimmed,
	unit: optionalTrimmed,
	density: numberEU,
	supplierVat: vat.optional(),
});
export type ProductImportRow = z.infer<typeof ProductRowSchema>;

/** Discriminated por Entity */
export const SchemasByEntity = {
	Company: CompanyRowSchema,
	Transporter: CompanyRowSchema, // mesma shape, regra de role no serviço
	Vehicle: VehicleRowSchema,
	DeliveryPlant: DeliveryPlantRowSchema,
	Product: ProductRowSchema,
} as const;

export type Entity = keyof typeof SchemasByEntity;

export type ImportRowByEntity = {
	Company: CompanyImportRow;
	Transporter: CompanyImportRow;
	Vehicle: VehicleImportRow;
	DeliveryPlant: DeliveryPlantImportRow;
	Product: ProductImportRow;
};
