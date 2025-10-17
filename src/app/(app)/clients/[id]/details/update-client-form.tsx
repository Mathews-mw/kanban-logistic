'use client';

import z from 'zod';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { errorHandler } from '@/_http/error-handler/error-handler';
import { updateClient } from '@/_http/requests/clients/update-client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IClientDetails } from '@/@types/client';
import { Container } from '@/components/container';

import { Loader2 } from 'lucide-react';
import { FaClipboardUser } from 'react-icons/fa6';

interface IProps {
	client: IClientDetails;
}

const createClientForm = z.object({
	name: z.string().min(1, { message: 'Required' }),
	email: z.email({ error: 'Please, provide a valid e-mail' }).min(1, { message: 'Required' }),
	vat: z.string().min(1, { message: 'Required' }),
	phone: z.optional(z.string()),
});

type CreateClientForm = z.infer<typeof createClientForm>;

export function UpdateClientForm({ client }: IProps) {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { isSubmitting, errors },
	} = useForm<CreateClientForm>({
		resolver: zodResolver(createClientForm),
	});

	const queryClient = useQueryClient();

	const { mutateAsync: updateClientFn, isPending } = useMutation({
		mutationFn: updateClient,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['client_details', client.id] });
		},
	});

	async function handleUpdateClient(data: CreateClientForm) {
		try {
			await updateClientFn({
				clientId: client.id,
				name: data.name,
				email: data.email,
				vat: data.vat,
				phone: data.phone,
			});

			reset();
			toast.success('Customer successfully updated!');
		} catch (error) {
			errorHandler({ error: error });
		}
	}

	useEffect(() => {
		setValue('name', client.name);
		setValue('email', client.email);
		setValue('vat', client.vat);
		setValue('phone', client.phone ?? '');
	}, [client]);

	return (
		<Container className="h-min flex-grow">
			<form onSubmit={handleSubmit(handleUpdateClient)} className="space-y-4">
				<div className="flex items-center gap-2">
					<FaClipboardUser className="fill-primary size-6" />
					<span className="text-lg font-semibold">Registration information</span>
				</div>

				<div className="space-y-2">
					<Label htmlFor="name">Name</Label>
					<Input id="name" {...register('name')} />
					<small className="text-xs text-red-400">{errors.name?.message}</small>
				</div>

				<div className="space-y-2">
					<Label htmlFor="email">E-mail</Label>
					<Input id="email" type="email" {...register('email')} />
					<small className="text-xs text-red-400">{errors.email?.message}</small>
				</div>

				<div className="space-y-2">
					<Label htmlFor="vat">VAT</Label>
					<Input id="vat" inputMode="numeric" {...register('vat')} />
					<small className="text-xs text-red-400">{errors.vat?.message}</small>
				</div>

				<div className="space-y-2">
					<Label htmlFor="phone">Phone</Label>
					<Input id="phone" inputMode="numeric" {...register('phone')} />
				</div>

				<div className="flex w-full justify-end">
					<Button type="submit" disabled={isPending || isSubmitting}>
						{(isPending || isSubmitting) && <Loader2 className="animate-spin" />}
						Save
					</Button>
				</div>
			</form>
		</Container>
	);
}
