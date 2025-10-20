import z from 'zod';
import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

const bodySchema = z.object({
	file: z.object({
		size: z.number(),
		type: z.string(),
		name: z.string(),
		lastModified: z.number(),
	}),
	ticket_id: z.string(),
});

const MAX_FILE_SIZE = 10 * 1024 * 1024; // limite de 10MB p/ MVP

export async function POST(request: NextRequest) {
	if (request.method !== 'POST') {
		return Response.json(
			{
				error: 'Method not allowed!',
			},
			{ status: 405 }
		);
	}

	const actorId = request.headers.get('x-user-id');

	if (!actorId) {
		return Response.json({ code: 'UNAUTHORIZED_ERROR', message: 'Unauthorized.' }, { status: 401 });
	}

	const formData = await request.formData();

	const body = Object.fromEntries(formData);

	const validateBodySchema = bodySchema.safeParse(body);

	if (!validateBodySchema.success) {
		return NextResponse.json(
			{
				message: 'Error validating form data. Please check the submitted payload.',
				error: validateBodySchema.error.issues,
			},
			{ status: 400 }
		);
	}

	const file = (body.file as File) || null;

	if (!file) {
		return Response.json({ message: 'No file sent.' }, { status: 400 });
	}

	if (file.size > MAX_FILE_SIZE) {
		return NextResponse.json({ message: 'The file size is too large. The maximum allowed is 10 MB.' }, { status: 400 });
	}

	if (file.type !== 'application/xml' && file.type !== 'application/pdf') {
		return NextResponse.json(
			{ message: 'Unsupported file type. Only PDF and XML files are allowed.' },
			{ status: 400 }
		);
	}

	console.info('file: ', file);

	const { ticket_id } = validateBodySchema.data;

	try {
		const ticket = await prisma.ticket.findUnique({ where: { id: ticket_id } });

		if (!ticket) {
			return NextResponse.json({ message: 'Ticket not found.' }, { status: 404 });
		}

		const pathname = `files/tickets/${ticket_id}-${Date.now()}-${file.name.replace(/\s+/g, '_')}`;

		console.info('upload pathname: ', pathname);

		const blob = await put(pathname, file, {
			access: 'public',
			addRandomSuffix: false,
			contentType: file.type,
			// onUploadProgress: (p) => {
			// 	console.log('upload percentage: ', p.percentage);
			// },
		});

		const fileType = file.type.includes('/pdf') ? 'PDF' : 'XML';

		await prisma.$transaction(async (tx) => {
			await tx.ticketDocument.create({
				data: {
					path: pathname,
					type: fileType,
					ticketId: ticket.id,
				},
			});

			await prisma.ticketEventLog.create({
				data: {
					ticketId: ticket.id,
					actorId,
					action: 'FILE_UPLOADED',
					meta: { type: fileType, url: blob.url },
				},
			});
		});

		return Response.json(
			{
				message: 'Upload file successfully',
				blob,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error('Upload ticket file route error: ', error);
		return NextResponse.json({ message: 'Error during ticket file upload.' }, { status: 400 });
	}
}
