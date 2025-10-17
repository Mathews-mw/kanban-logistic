import z from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

const bodySchema = z.object({
	clientId: z.string(),
	street: z.string(),
	number: z.string(),
	complement: z.optional(z.string()),
	city: z.string(),
	country: z.string(),
	zip: z.string(),
	isPrimary: z.optional(z.coerce.boolean()),
});

export async function POST(request: NextRequest) {
	if (request.method !== 'POST') {
		return Response.json(
			{
				error: 'Method not allowed',
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

	const { clientId, street, number, city, country, zip, isPrimary, complement } = dataParse.data;

	try {
		const client = await prisma.client.findUnique({
			where: {
				id: clientId,
			},
		});

		if (!client) {
			return NextResponse.json({ message: 'Client not found!' }, { status: 404 });
		}

		await prisma.address.create({
			data: {
				street,
				number,
				city,
				country,
				zip,
				complement,
				isPrimary,
				clientId,
			},
		});

		return Response.json(
			{
				message: 'Address successfully registered',
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log('Create address route error: ', error);
		return NextResponse.json({ message: 'Error during address registration.' }, { status: 400 });
	}
}
