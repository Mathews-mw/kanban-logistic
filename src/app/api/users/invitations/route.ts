import z from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { InternalServerError } from '@/_http/errors/internal-server-error';

const queryParamsSchema = z.object({
	to: z.email(),
	company_id: z.optional(z.string()),
	created_by_id: z.optional(z.string()),
	only_available: z.optional(z.coerce.boolean()).default(false),
});

export async function GET(request: NextRequest) {
	if (request.method !== 'GET') {
		return Response.json(
			{
				error: 'Method not allowed!',
			},
			{ status: 405 }
		);
	}

	const { searchParams } = request.nextUrl;

	try {
		const { to, company_id, created_by_id, only_available } = queryParamsSchema.parse({
			to: searchParams.get('to'),
			company_id: searchParams.get('company_id') ?? undefined,
			created_by_id: searchParams.get('created_by_id') ?? undefined,
			only_available: searchParams.get('only_available') ?? false,
		});

		const invitations = await prisma.invitation.findMany({
			include: { company: true },
			where: {
				email: to,
				companyId: company_id,
				createdById: created_by_id,
				expiresAt: only_available ? { gt: new Date() } : undefined,
				acceptedAt: only_available ? { equals: null } : undefined,
				revokedAt: only_available ? { equals: null } : undefined,
			},
			orderBy: {
				createdAt: 'desc',
			},
		});

		return NextResponse.json({ invitations }, { status: 200 });
	} catch (error) {
		if (error instanceof InternalServerError) {
			return NextResponse.json({ code: error.code, message: error.message }, { status: error.status });
		}

		return NextResponse.json({ message: 'Something went wrong... Please, try again later.' }, { status: 500 });
	}
}
