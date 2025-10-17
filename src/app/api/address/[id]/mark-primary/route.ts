import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

interface IParamsProps {
	params: {
		id: string;
	};
}

export async function PATCH(request: NextRequest, { params }: IParamsProps) {
	if (request.method !== 'PATCH') {
		return Response.json(
			{
				error: 'Method Not Allowed',
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

		await prisma.address.updateMany({
			data: {
				isPrimary: false,
			},
			where: {
				isPrimary: true,
				clientId: address.clientId,
			},
		});

		await prisma.address.update({
			data: {
				isPrimary: true,
			},
			where: {
				id: addressId,
			},
		});

		return Response.json(
			{
				message: 'Address successfully updated!',
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log('update client address route error: ', error);
		return NextResponse.json({ message: 'Error during address update.' }, { status: 400 });
	}
}
