import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

interface IParamsProps {
	params: {
		id: string;
	};
}

export async function DELETE(request: NextRequest, { params }: IParamsProps) {
	if (request.method !== 'DELETE') {
		return Response.json(
			{
				error: 'Method Not Allowed!',
			},
			{ status: 405 }
		);
	}

	const addressId = z.string().parse(params.id);

	try {
		const address = await prisma.address.findUnique({
			where: {
				id: addressId,
			},
		});

		if (!address) {
			return NextResponse.json({ message: 'Address not found!' }, { status: 404 });
		}

		await prisma.address.delete({
			where: {
				id: addressId,
			},
		});

		return Response.json(
			{
				message: 'Address successfully deleted!',
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log('delete customer address route error: ', error);
		return NextResponse.json({ message: 'Erro during delete address.' }, { status: 400 });
	}
}
