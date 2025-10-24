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
				defaultCompany: true,
				memberships: {
					select: {
						id: true,
						companyId: true,
						company: {
							select: {
								name: true,
							},
						},
					},
				},
			},
		});

		if (!user) {
			return Response.json({ code: 'RESOURCE_NOT_FOUND_ERROR', message: 'User not found.' }, { status: 404 });
		}

		let defaultCompany = user.defaultCompany;

		if (!user.defaultCompany) {
			const userCompanyMemberships = await prisma.userCompanyMembership.findMany({
				where: {
					userId: user.id,
				},
				include: { company: true },
			});

			defaultCompany = userCompanyMemberships[0].company;
		}

		const userResponse = {
			id: user.id,
			name: user.name,
			email: user.email,
			defaultCompanyId: defaultCompany?.id,
			role: user.role,
			createdAt: user.createdAt,
			activeCompany: user.defaultCompany
				? {
						id: user.defaultCompany.id,
						name: user.defaultCompany.name,
						vatNumber: user.defaultCompany.vatNumber,
						roles: user.defaultCompany.roles,
					}
				: null,
			memberships: user.memberships.map((membership) => {
				return {
					id: membership.id,
					companyId: membership.companyId,
					companyName: membership.company.name,
				};
			}),
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
