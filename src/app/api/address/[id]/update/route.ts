import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

interface IParamsProps {
	params: {
		id: string;
	};
}

const bodySchema = z.object({
	street: z.optional(z.string()),
	number: z.optional(z.email()),
	complement: z.optional(z.string()),
	zipCode: z.optional(z.string()),
	city: z.optional(z.string()),
	country: z.optional(z.string()),
	isPrimary: z.optional(z.coerce.boolean()),
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
	const addressId = z.string().parse(id);

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

	const { street, number, complement, zipCode, city, country, isPrimary } = dataParse.data;

	try {
		const address = await prisma.address.findUnique({
			where: {
				id: addressId,
			},
		});

		if (!address) {
			return NextResponse.json({ message: 'Address not found!' }, { status: 404 });
		}

		address.street = street ?? address.street;
		address.number = number ?? address.number;
		address.complement = complement ?? address.complement;
		address.zip = zipCode ?? address.zip;
		address.city = city ?? address.city;
		address.country = country ?? address.country;
		address.isPrimary = isPrimary ?? address.isPrimary;

		await prisma.address.update({
			data: address,
			where: {
				id: address.id,
			},
		});

		return Response.json(
			{
				message: 'Address successfully updated!',
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log('update address route error: ', error);
		return NextResponse.json({ message: 'Error during address update.' }, { status: 400 });
	}
}
