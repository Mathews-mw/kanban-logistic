import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { UserRole } from '@/generated/client';
import { InternalServerError } from '@/_http/errors/internal-server-error';
import { ResourceNotFoundError } from '@/_http/errors/resource-not-found-error';

interface IParamsProps {
	params: {
		id: string;
	};
}

const bodySchema = z.object({
	name: z.optional(z.string()),
	email: z.optional(z.email()),
	default_company_id: z.optional(z.string()),
	role: z.optional(z.string()),
	is_active: z.optional(z.coerce.boolean()),
});

export async function PUT(request: NextRequest, { params }: IParamsProps) {
	if (request.method !== 'PUT') {
		return Response.json(
			{
				error: 'Method not allowed',
			},
			{ status: 405 }
		);
	}

	const data = await request.json();

	const { id: userId } = await params;

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

	const { name, email, default_company_id, is_active, role } = dataParse.data;

	try {
		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
		});

		if (!user) {
			throw new ResourceNotFoundError('User not found', 'RESOURCE_NOT_FOUND_ERROR');
		}

		user.name = name ?? user.name;
		user.email = email ?? user.email;
		user.role = role ? (role as UserRole) : user.role;
		user.isActive = is_active ?? user.isActive;
		user.defaultCompanyId = default_company_id ?? user.defaultCompanyId;

		await prisma.user.update({
			data: user,
			where: {
				id: user.id,
			},
		});

		return Response.json(
			{
				message: 'User updated successfully.',
			},
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof InternalServerError) {
			return NextResponse.json({ code: error.code, message: error.message }, { status: error.status });
		}

		return NextResponse.json({ message: 'Something went wrong... Please, try again later.' }, { status: 500 });
	}
}
