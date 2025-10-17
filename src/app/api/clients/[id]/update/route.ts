import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

interface IParamsProps {
	params: {
		id: string;
	};
}

const bodySchema = z.object({
	name: z.optional(z.string()),
	email: z.optional(z.email()),
	vat: z.optional(z.string()),
	phone: z.optional(z.string()),
});

export async function PUT(request: NextRequest, { params }: IParamsProps) {
	if (request.method !== 'PUT') {
		return Response.json(
			{
				error: 'Method Not Allowed!',
			},
			{ status: 405 }
		);
	}

	const data = await request.json();

	const { id } = await params;
	const clientId = z.string().parse(id);

	const dataParse = bodySchema.safeParse(data);

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
		const client = await prisma.client.findUnique({
			where: {
				id: clientId,
			},
		});

		if (!client) {
			return NextResponse.json({ message: 'Client not found!' }, { status: 404 });
		}

		client.name = name ?? client.name;
		client.email = email ?? client.email;
		client.vat = vat ?? client.vat;
		client.phone = phone ?? client.phone;

		await prisma.client.update({
			data: client,
			where: {
				id: client.id,
			},
		});

		return Response.json(
			{
				message: 'Client successfully updated!',
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log('update user route error: ', error);
		return NextResponse.json({ message: 'Error during customer update.' }, { status: 400 });
	}
}
