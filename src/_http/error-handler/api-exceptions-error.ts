export class ApiExceptionsError extends Error {
	readonly code: string;
	readonly status: number;

	constructor(message?: string, code?: string, status?: number) {
		super(message ?? 'An error occurred while trying to process the request!');

		this.name = 'ApiExceptionsError';
		this.code = code ?? 'REQUEST_ERROR';
		this.status = status ?? 400;
	}
}
