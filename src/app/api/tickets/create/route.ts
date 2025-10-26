import z, { ZodError } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { CompanyRole } from '@/generated/client';
import { BadRequestError } from '@/_http/errors/bad-request-errors';
import { ResourceNotFoundError } from '@/_http/errors/resource-not-found-error';
import { assertRole } from '@/auth/guard-helpers';
import { UnauthorizedError } from '@/_http/errors/unauthorized-error';

const bodySchema = z.object({
	supplierId: z.string().min(1),
	customerId: z.string().min(1),
	transporterId: z.string().min(1),
	vehicleId: z.string().min(1),
	deliveryPlantId: z.string().min(1),
	productId: z.string().min(1),
	grossWeight: z.number().positive().optional(),
	tareWeight: z.number().nonnegative().optional(),
	unit: z.string().min(1).optional(), // "KG" | "T" etc
	weighedAt: z.coerce.date().optional(), // ISO string
	notes: z.string().max(2000).optional(),
});

function computeNetWeight(gross?: number | null, tare?: number | null) {
	if (gross == null || tare == null) return null;

	return Math.max(gross - tare, 0);
}

function yyyymm(d = new Date()) {
	return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}`;
}

/**
 * Gera número único transacional: YYYYMM-000001
 */
async function nextTicketNumber() {
	const ym = yyyymm();

	const seq = await prisma.$transaction(async (tx) => {
		const existing = await tx.ticketSequence.findUnique({ where: { yearMonth: ym } });

		if (!existing) {
			const created = await tx.ticketSequence.create({
				data: { yearMonth: ym, counter: 1 },
			});

			return created.counter;
		} else {
			const updated = await tx.ticketSequence.update({
				where: { yearMonth: ym },
				data: { counter: { increment: 1 } },
			});

			return updated.counter;
		}
	});

	return `${ym}-${String(seq).padStart(6, '0')}`;
}

// --------- validações de coerência ----------
async function assertCompanyHasRole(id: string, role: CompanyRole) {
	const c = await prisma.company.findUnique({ where: { id }, select: { roles: true } });

	if (!c) {
		throw new ResourceNotFoundError(`Company ${id} not found`, 'RESOURCE_NOT_FOUND_ERROR');
	}

	if (!c.roles?.includes(role)) {
		throw new BadRequestError(`Company ${id} is not ${role}`, 'BAD_REQUEST_ERROR');
	}
}

async function assertDeliveryPlantBelongsToCustomer(deliveryPlantId: string, customerId: string) {
	const plant = await prisma.deliveryPlant.findUnique({ where: { id: deliveryPlantId }, select: { companyId: true } });

	if (!plant) {
		throw new ResourceNotFoundError('Delivery Plant not found.', 'RESOURCE_NOT_FOUND_ERROR');
	}

	if (plant.companyId !== customerId) {
		throw new BadRequestError('Delivery Plant does not belong to selected Customer', 'BAD_REQUEST_ERROR');
	}
}

async function assertVehicleBelongsToTransporter(vehicleId: string, transporterId: string) {
	const v = await prisma.vehicle.findUnique({ where: { id: vehicleId }, select: { transporterId: true } });

	if (!v) {
		throw new ResourceNotFoundError('Vehicle not found.', 'RESOURCE_NOT_FOUND_ERROR');
	}

	if (v.transporterId !== transporterId) {
		throw new BadRequestError('Vehicle does not belong to selected Transporter', 'BAD_REQUEST_ERROR');
	}
}

export async function POST(request: NextRequest) {
	if (request.method !== 'POST') {
		return Response.json(
			{
				error: 'Method not allowed',
			},
			{ status: 405 }
		);
	}

	try {
		const actorId = request.headers.get('x-user-id');
		const companyId = request.headers.get('x-active-company-id');

		if (!actorId) {
			throw new UnauthorizedError('Unauthorized', 'UNAUTHORIZED_ERROR');
		}

		if (!companyId) {
			throw new UnauthorizedError('User has no company context', 'UNAUTHORIZED_ERROR');
		}

		await assertRole(actorId, companyId, ['SUPPLIER', 'ADMIN']);

		const dataBody = await request.json();

		const dataParse = await bodySchema.safeParse(dataBody);

		if (!dataParse.success) {
			return NextResponse.json(
				{
					message: 'Error validating form data. Please check the submitted payload.',
					error: dataParse.error.issues,
				},
				{ status: 400 }
			);
		}

		const {
			customerId,
			deliveryPlantId,
			productId,
			supplierId,
			transporterId,
			vehicleId,
			grossWeight,
			notes,
			tareWeight,
			unit,
			weighedAt,
		} = dataParse.data;

		// --- validação de FKs (existência + coerência de papéis/pertencimentos) ---
		await assertCompanyHasRole(supplierId, 'SUPPLIER');
		await assertCompanyHasRole(customerId, 'CUSTOMER');
		await assertCompanyHasRole(transporterId, 'TRANSPORTER');

		const [supplier, customer, transporter, vehicle, plant, product] = await Promise.all([
			prisma.company.findUnique({ where: { id: supplierId }, select: { id: true } }),
			prisma.company.findUnique({ where: { id: customerId }, select: { id: true } }),
			prisma.company.findUnique({ where: { id: transporterId }, select: { id: true } }),
			prisma.vehicle.findUnique({ where: { id: vehicleId }, select: { id: true, transporterId: true } }),
			prisma.deliveryPlant.findUnique({ where: { id: deliveryPlantId }, select: { id: true, companyId: true } }),
			prisma.product.findUnique({ where: { id: productId }, select: { id: true } }),
		]);

		if (!supplier || !customer || !transporter || !vehicle || !plant || !product) {
			return Response.json(
				{ code: 'RESOURCE_NOT_FOUND_ERROR', message: 'FK not found (company/vehicle/plant/product).' },
				{ status: 404 }
			);
		}

		// coerências
		await assertDeliveryPlantBelongsToCustomer(deliveryPlantId, customerId);
		await assertVehicleBelongsToTransporter(vehicleId, transporterId);

		// pesos
		const netWeight = computeNetWeight(grossWeight ?? null, tareWeight ?? null);

		// gera número e cria ticket + log em transação
		const result = await prisma.$transaction(async (tx) => {
			const number = await nextTicketNumber();

			const ticket = await tx.ticket.create({
				data: {
					number,
					direction: 'IN',
					status: 'DRAFT',
					supplierId,
					customerId,
					transporterId,
					vehicleId,
					deliveryPlantId,
					productId,
					grossWeight: grossWeight ?? null,
					tareWeight: tareWeight ?? null,
					netWeight,
					unit: unit ?? null,
					weighedAt: weighedAt ? new Date(weighedAt) : null,
					notes: notes ?? null,
				},
			});

			await tx.ticketEventLog.create({
				data: {
					ticketId: ticket.id,
					actorId,
					action: 'CREATED',
					from: null,
					to: 'DRAFT',
					meta: { grossWeight, tareWeight, unit },
				},
			});

			return ticket;
		});

		return Response.json(
			{
				message: 'Ticket successfully created',
				ticket: result,
			},
			{ status: 201 }
		);
	} catch (error: unknown) {
		console.log('Create ticket route error: ', error);

		if (error instanceof BadRequestError || error instanceof ResourceNotFoundError) {
			return NextResponse.json({ code: error.code, message: error.message }, { status: error.status });
		}

		if (error instanceof ZodError) {
			return NextResponse.json(
				{ message: 'Validation error', errors: z.treeifyError(error), details: error.issues },
				{ status: 400 }
			);
		}

		return NextResponse.json({ message: 'Something went wrong... Please, try again later.' }, { status: 500 });
	}
}
