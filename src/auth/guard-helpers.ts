import { prisma } from '@/lib/prisma';
import { ForbiddenError } from '@/_http/errors/forbidden-error';
import { ResourceNotFoundError } from '@/_http/errors/resource-not-found-error';

// Verifica se user ∈ company
export async function assertMembership(userId: string, companyId: string) {
	const m = await prisma.userCompanyMembership.findUnique({
		where: { userId_companyId: { userId, companyId } },
		select: { id: true, isActive: true },
	});

	if (!m || !m.isActive) {
		throw new ForbiddenError('User is not member of this company', 'FORBIDDEN_ERROR');
	}
}

// Verifica se user tem algum dos roles no tenant
export async function assertRole(userId: string, companyId: string, roles: string[]) {
	const m = await prisma.userCompanyMembership.findUnique({
		where: { userId_companyId: { userId, companyId } },
		select: { roles: true },
	});

	if (!m || !m.roles.some((r) => roles.includes(r))) {
		throw new ForbiddenError('Insufficient role', 'FORBIDDEN_ERROR');
	}
}

// Scoping para tickets (lista):
export function scopeTicketsByCompany(activeCompanyId: string) {
	return {
		where: {
			OR: [{ supplierId: activeCompanyId }, { customerId: activeCompanyId }, { transporterId: activeCompanyId }],
		},
	};
}

// Guarda por ticket
export async function assertCanViewTicket(userId: string, activeCompanyId: string, ticketId: string) {
	const ticket = await prisma.ticket.findUnique({
		where: { id: ticketId },
		select: { supplierId: true, customerId: true, transporterId: true },
	});

	if (!ticket) {
		throw new ResourceNotFoundError('Ticket not found', 'RESOURCE_NOT_FOUND_ERROR');
	}

	const involved = [ticket.supplierId, ticket.customerId, ticket.transporterId].filter(Boolean);

	if (!involved.includes(activeCompanyId)) {
		throw new ForbiddenError('Not allowed to view this ticket', 'FORBIDDEN_ERROR');
	}
}
