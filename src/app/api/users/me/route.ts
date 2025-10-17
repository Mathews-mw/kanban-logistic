import { NextRequest } from 'next/server';

import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
	if (request.method !== 'GET') {
		return Response.json(
			{
				error: 'Method Not Allowed',
			},
			{ status: 405 }
		);
	}

	const userId = request.headers.get('x-user-id');

	if (!userId) {
		return Response.json({ error: 'Unauthorized' }, { status: 401 });
	}

	try {
		const user = await prisma.user.findUnique({
			where: { id: userId },
			include: {
				company: true,
			},
		});

		if (!user) {
			return Response.json({ code: 'RESOURCE_NOT_FOUND_ERROR', message: 'User not found.' }, { status: 404 });
		}

		const userResponse = {
			id: user.id,
			name: user.name,
			email: user.email,
			companyId: user.companyId,
			role: user.role,
			createdAt: user.createdAt,
			company: user.company
				? {
						id: user.company.id,
						vatNumber: user.company.vatNumber,
						roles: user.company.roles,
					}
				: null,
		};

		return Response.json({
			profile: userResponse,
		});
	} catch (error) {
		console.error('User profile route error: ', error);

		return new Response(JSON.stringify(error), {
			status: 400,
		});
	}
}
