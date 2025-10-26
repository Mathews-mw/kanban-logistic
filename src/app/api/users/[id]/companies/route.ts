import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { InternalServerError } from '@/_http/errors/internal-server-error';

interface IParamsProps {
	params: {
		id: string;
	};
}

export async function GET(request: NextRequest, { params }: IParamsProps) {
	if (request.method !== 'GET') {
		return Response.json(
			{
				error: 'Method not allowed',
			},
			{ status: 405 }
		);
	}

	const { id: userId } = await params;

	try {
		const companiesMembership = await prisma.userCompanyMembership.findMany({
			where: { userId },
			include: {
				company: true,
			},
		});

		return Response.json({ companies_membership: companiesMembership }, { status: 200 });
	} catch (error) {
		if (error instanceof InternalServerError) {
			return NextResponse.json({ code: error.code, message: error.message }, { status: error.status });
		}

		return NextResponse.json({ message: 'Something went wrong... Please, try again later.' }, { status: 500 });
	}
}
