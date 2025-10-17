interface IPagination {
	page: number;
	per_page: number;
	total_occurrences: number;
	total_pages: number;
}

interface ICursorResponse {
	has_more: boolean;
	next_cursor?: string;
	previous_cursor?: string;
}
