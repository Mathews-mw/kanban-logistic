import { Container } from '@/components/container';

import { GrNotes } from 'react-icons/gr';

interface IProps {
	description?: string | null;
}

export function NotesSection({ description }: IProps) {
	return (
		<Container>
			<div className="flex items-center gap-2">
				<GrNotes className="text-primary size-6" />
				<span>Notes</span>
			</div>

			{description ? (
				<p className="text-muted-foreground text-pretty">{description}</p>
			) : (
				<p className="text-muted-foreground text-sm">There is no description.</p>
			)}
		</Container>
	);
}
