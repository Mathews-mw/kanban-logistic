import z from 'zod';
import Papaparse from 'papaparse';
import { NextRequest, NextResponse } from 'next/server';

const bodySchema = z.object({
	file: z.object({
		size: z.number(),
		type: z.string(),
		name: z.string(),
		lastModified: z.number(),
	}),
});

export async function POST(request: NextRequest) {
	if (request.method !== 'POST') {
		return Response.json(
			{
				error: 'Method not allowed!',
			},
			{ status: 405 }
		);
	}

	const formData = await request.formData();
	const body = Object.fromEntries(formData);

	const validateBodySchema = bodySchema.safeParse(body);

	if (!validateBodySchema.success) {
		return Response.json(
			{
				message: 'Error validating form data. Please check the submitted payload.',
				error: validateBodySchema.error.issues,
			},
			{ status: 400 }
		);
	}

	const file = (body.file as File) || null;

	if (!file) {
		return NextResponse.json({ message: 'No file uploaded.' }, { status: 400 });
	}

	try {
		const text = await file.text();

		const parsed = Papaparse.parse<string[]>(text, { delimiter: ';', skipEmptyLines: true });

		if (parsed.errors.length > 0) {
			console.log('CSV parsing errors: ', parsed.errors);
			return NextResponse.json({ message: 'Error parsing CSV file.' }, { status: 400 });
		}

		const rows = parsed.data;
		const headers = rows[0];
		const sample = rows.slice(1, 11); // Get first 10 data rows as sample

		return Response.json(
			{
				headers,
				sample,
				totalRows: rows.length - 1, // Exclude header row
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log('Import preview route error: ', error);
		return NextResponse.json({ message: 'Error during import preview.' }, { status: 400 });
	}
}
