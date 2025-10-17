'use client';

import { toast } from 'sonner';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { errorHandler } from '@/_http/error-handler/error-handler';
import { deleteAddress } from '@/_http/requests/address/delete-address';

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

export function DeleteAddressDialog({ clientId, addressId }: IProps) {
	const [isOpen, setIsOpen] = useState(false);

	const useQuery = useQueryClient();

	const { mutateAsync: deleteAddressFn, isPending } = useMutation({
		mutationFn: deleteAddress,
		onSuccess: async () => {
			await useQuery.invalidateQueries({ queryKey: ['client_details', clientId] });
			toast.success('Address removed!');
			setIsOpen(false);
		},
		onError: (error) => {
			errorHandler({ error });
		},
	});

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button size="xs" variant="ghost" className="text-xs font-semibold">
					Remove
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Remover endereço</DialogTitle>

					<DialogDescription className="text-muted-foreground text-sm">
						Would you really like to remove this address?
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline" disabled={isPending} onClick={() => setIsOpen(!isOpen)}>
							No
						</Button>
					</DialogClose>

					<Button onClick={() => deleteAddressFn({ addressId })} disabled={isPending}>
						{isPending && <Loader2 className="animate-spin" />}
						Yes
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
