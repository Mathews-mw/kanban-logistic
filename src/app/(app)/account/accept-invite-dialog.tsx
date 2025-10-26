import { useState } from 'react';

import { IInvitationDetails } from '@/@types/invitation';

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

import { Check } from 'lucide-react';

interface IProps {
	invitation: IInvitationDetails;
}

export function AcceptInviteDialog({ invitation }: IProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" className="text-emerald-500 hover:text-emerald-500/80">
					<Check />
					Accept
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Accept the invitation</DialogTitle>
					<DialogDescription>
						Would you like to accept the invitation from <b>{invitation.company.name}</b> company to join the team?
					</DialogDescription>
				</DialogHeader>

				<div>
					<span className="text-muted-foreground">From: </span>
					<span className="font-medium">{invitation.company.name}</span>
				</div>

				<div className="flex flex-col gap-1.5">
					<span className="text-muted-foreground">Granted roles:</span>
					<ul className="ml-4 list-disc">
						{invitation.roles.map((role) => {
							return (
								<li key={role} className="font-medium">
									{role}
								</li>
							);
						})}
					</ul>
				</div>

				<DialogFooter className="space-x-2">
					<DialogClose>Close</DialogClose>

					<Button variant="outline" className="text-emerald-500 hover:text-emerald-500/80">
						<Check />
						Accept
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
