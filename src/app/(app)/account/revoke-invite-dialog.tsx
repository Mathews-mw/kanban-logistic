import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import { X } from 'lucide-react';

export function RevokeInviteDialog() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" className="text-rose-400 hover:text-rose-400/80">
					<X /> Refuse
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Refuse the invitation</DialogTitle>
					<DialogDescription>Are you sure you want to decline this invitation?</DialogDescription>
				</DialogHeader>

				<DialogFooter className="space-x-2">
					<DialogClose>Close</DialogClose>

					<Button variant="outline" className="text-rose-400 hover:text-rose-400/80">
						<X /> Refuse
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
