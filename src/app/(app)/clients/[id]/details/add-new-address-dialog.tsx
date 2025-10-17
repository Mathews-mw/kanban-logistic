'use client';

import { z } from 'zod';
import { toast } from 'sonner';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { errorHandler } from '@/_http/error-handler/error-handler';
import { allBelgiumCities } from '@/data/cities/belgium-cities-data';
import { createAddress } from '@/_http/requests/address/create-address';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Autocomplete } from '@/components/autocomplete';
import { ErrorMessage } from '@/components/error-message';
import { CountryAutocomplete } from '@/components/country-autocomplete';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger,
} from '@/components/ui/dialog';

import { Loader2, MapPinPlus } from 'lucide-react';

interface IProps {
	clientId: string;
}

const addAddressFormSchema = z.object({
	street: z.string().min(1, { message: 'Required' }),
	number: z.string().min(1, { message: 'Required' }),
	complement: z.optional(z.string()),
	zipCode: z.string().min(1, { message: 'Required' }),
	city: z.string('Please, select a city'),
	country: z.string('Please, select a country'),
});

type AddAddressInputData = z.infer<typeof addAddressFormSchema>;

export function AddNewAddressDialog({ clientId }: IProps) {
	const {
		handleSubmit,
		register,
		control,
		formState: { isSubmitting, errors },
	} = useForm<AddAddressInputData>({
		resolver: zodResolver(addAddressFormSchema),
	});

	const [isOpen, setIsOpen] = useState(false);

	const useQuery = useQueryClient();

	const { mutateAsync: createAddressFn, isPending } = useMutation({
		mutationFn: createAddress,
		onSuccess: async () => {
			await useQuery.invalidateQueries({ queryKey: ['client_details', clientId] });
		},
	});

	async function handleAddAddressForm(data: AddAddressInputData) {
		try {
			await createAddressFn({
				clientId,
				street: data.street,
				number: data.number,
				complement: data.complement,
				city: data.city,
				country: data.country,
				zip: data.zipCode,
			});

			setIsOpen(false);
			toast.success('Address successfully registered!');
		} catch (error) {
			errorHandler({ error });
		}
	}

	return (
		<Dialog modal open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button size="sm" variant="outline">
					<MapPinPlus /> New Address
				</Button>
			</DialogTrigger>

			<DialogContent className="w-full max-w-[95%] rounded-lg lg:w-min lg:min-w-[640px]">
				<DialogHeader>
					<div className="flex items-center gap-2">
						<MapPinPlus className="text-primary" />
						<DialogTitle>Register new customer address</DialogTitle>
					</div>

					<DialogDescription className="text-muted-foreground text-justify text-sm">
						Here you can register a new customer address.
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit(handleAddAddressForm)} className="space-y-4">
					<div className="grid grid-cols-3 gap-2.5">
						<div className="col-span-2">
							<Input placeholder="Street" {...register('street')} />
							<ErrorMessage message={errors.street?.message} />
						</div>
						<div>
							<Input placeholder="Number" {...register('number')} />
							<ErrorMessage message={errors.number?.message} />
						</div>
					</div>

					<div className="grid grid-cols-3 gap-2.5">
						<div className="col-span-2">
							<Input placeholder="Complement (Optional)" {...register('complement')} />
						</div>

						<div className="space-y-2">
							<Input placeholder="Zip Code" {...register('zipCode')} />
							<ErrorMessage message={errors.zipCode?.message} />
						</div>
					</div>

					<div className="flex gap-2.5">
						<div className="w-full space-y-2">
							<Controller
								name="city"
								control={control}
								render={({ field }) => {
									return (
										<Autocomplete
											options={allBelgiumCities}
											placeholder="Select city"
											onSelectOption={(item) => field.onChange(item)}
										/>
									);
								}}
							/>

							<ErrorMessage message={errors.city?.message} />
						</div>
						<div className="w-full space-y-2">
							<Controller
								name="country"
								control={control}
								render={({ field }) => {
									return <CountryAutocomplete onSelectOption={(item) => field.onChange(item)} />;
								}}
							/>

							<small className="text-xs text-red-400">{errors.country?.message}</small>
						</div>
					</div>

					<div className="flex w-full justify-end gap-2">
						<Button type="submit" disabled={isSubmitting || isPending}>
							{(isSubmitting || isPending) && <Loader2 className="animate-spin" />}
							Save
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
