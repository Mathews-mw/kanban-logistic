'use client';

import { toast } from 'sonner';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { errorHandler } from '@/_http/error-handler/error-handler';
import { markPrimary } from '@/_http/requests/address/mark-primary';

import { Button } from '@/components/ui/button';
import { DialogDescription } from '@radix-ui/react-dialog';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import { Loader2 } from 'lucide-react';

interface IProps {
	clientId: string;
	addressId: string;
}

export function MarkAddressPrimaryDialog({ clientId, addressId }: IProps) {
	const [isOpen, setIsOpen] = useState(false);

	const useQuery = useQueryClient();

	const { mutateAsync: makeAddressPrincipalFn, isPending } = useMutation({
		mutationFn: markPrimary,
		onSuccess: async () => {
			await useQuery.invalidateQueries({ queryKey: ['client_details', clientId] });
			toast.success('Address successfully updated!');
			setIsOpen(false);
		},
		onError: (error) => {
			errorHandler({ error });
		},
	});

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button size="xs" variant="outline" className="text-xs font-semibold">
					Mark as primary
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Mark address as primary</DialogTitle>

					<DialogDescription className="text-muted-foreground text-sm">
						Would you like to mark this address as the primary address?
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline" disabled={isPending} onClick={() => setIsOpen(!isOpen)}>
							No
						</Button>
					</DialogClose>

					<Button onClick={() => makeAddressPrincipalFn({ addressId })} disabled={isPending}>
						Yes
						{isPending && <Loader2 className="animate-spin" />}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
