import z from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

const bodySchema = z.object({
	name: z.string(),
	email: z.email(),
	vat: z.string(),
	phone: z.optional(z.string()),
});

export async function POST(request: NextRequest) {
	if (request.method !== 'POST') {
		return Response.json(
			{
				error: 'Method not allowed!',
			},
			{ status: 405 }
		);
	}

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

	const { name, email, vat, phone } = dataParse.data;

	try {
		const clientAlreadyExists = await prisma.client.findUnique({
			where: {
				vat,
			},
		});

		if (clientAlreadyExists) {
			return NextResponse.json({ message: `Customer with VAT "${vat}" already registered.` }, { status: 400 });
		}

		const newClient = await prisma.client.create({
			data: {
				name,
				email,
				vat,
				phone,
			},
		});

		return Response.json(
			{
				message: 'Customer successfully registered',
				client: {
					id: newClient.id,
					vat: newClient.vat,
				},
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log('Create client route error: ', error);
		return NextResponse.json({ message: 'Error during customer registration.' }, { status: 400 });
	}
}
