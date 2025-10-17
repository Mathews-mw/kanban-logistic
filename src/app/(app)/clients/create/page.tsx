'use client';

import z from 'zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { errorHandler } from '@/_http/error-handler/error-handler';
import { allBelgiumCities } from '@/data/cities/belgium-cities-data';
import { createClient } from '@/_http/requests/clients/create-cliente';
import { createAddress } from '@/_http/requests/address/create-address';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { PageTitle } from '@/components/page-title';
import { Autocomplete } from '@/components/autocomplete';
import { CountryAutocomplete } from '@/components/country-autocomplete';

import { Loader2 } from 'lucide-react';
import { FaAddressCard } from 'react-icons/fa';
import { RiUserLocationFill } from 'react-icons/ri';

const createClientForm = z.object({
	name: z.string().min(1, { message: 'Required' }),
	email: z.email({ error: 'Please, provide a valid e-mail' }).min(1, { message: 'Required' }),
	vat: z.string().min(1, { message: 'Required' }),
	phone: z.optional(z.string()),
	street: z.string().min(1, { message: 'Required' }),
	number: z.string().min(1, { message: 'Required' }),
	complement: z.optional(z.string()),
	zipCode: z.string().min(1, { message: 'Required' }),
	city: z.string('Please, select a city'),
	country: z.string('Please, select a country'),
});

type CreateClientForm = z.infer<typeof createClientForm>;

export default function CreateClientPage() {
	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, errors },
	} = useForm<CreateClientForm>({
		resolver: zodResolver(createClientForm),
	});

	const navigator = useRouter();
	const queryClient = useQueryClient();

	const { mutateAsync: createClientFn, isPending } = useMutation({
		mutationFn: async (data: CreateClientForm) => {
			const { client } = await createClient({
				name: data.name,
				email: data.email,
				vat: data.vat,
				phone: data.phone,
			});

			await createAddress({
				clientId: client.id,
				street: data.street,
				number: data.number,
				complement: data.complement,
				city: data.city,
				country: data.country,
				zip: data.zipCode,
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['clients'] });
		},
	});

	async function handleCreateClient(data: CreateClientForm) {
		try {
			await createClientFn(data);

			reset();
			toast.success('Customer successfully registered!');
			navigator.push('/clients');
		} catch (error) {
			errorHandler({ error: error });
		}
	}

	return (
		<div className="space-y-8">
			<PageTitle title="Register Customer" description="Register a new customer" backButton />

			<form onSubmit={handleSubmit(handleCreateClient)} className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<FaAddressCard className="fill-primary size-6" />
						<span className="text-muted-foreground font-bold">Costumer personal information</span>
					</div>

					<Container>
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
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
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="vat">VAT</Label>
									<Input id="vat" inputMode="numeric" {...register('vat')} />
									<small className="text-xs text-red-400">{errors.vat?.message}</small>
								</div>

								<div className="space-y-2">
									<Label htmlFor="phone">Phone</Label>
									<Input id="phone" inputMode="numeric" {...register('phone')} />
								</div>
							</div>
						</div>
					</Container>
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<RiUserLocationFill className="fill-primary size-6" />
						<span className="text-muted-foreground font-bold">Costumer address</span>
					</div>

					<Container>
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="street">Street</Label>
									<Input id="street" {...register('street')} />
									<small className="text-xs text-red-400">{errors.street?.message}</small>
								</div>

								<div className="space-y-2">
									<Label htmlFor="number">Number</Label>
									<Input id="number" {...register('number')} />
									<small className="text-xs text-red-400">{errors.number?.message}</small>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="complement">Complement</Label>
									<Input id="complement" {...register('complement')} />
								</div>

								<div className="space-y-2">
									<Label htmlFor="zipCode">Postal Code</Label>
									<Input id="zipCode" inputMode="numeric" {...register('zipCode')} />
									<small className="text-xs text-red-400">{errors.zipCode?.message}</small>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label>City</Label>
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

									<small className="text-xs text-red-400">{errors.city?.message}</small>
								</div>

								<div className="space-y-2">
									<Label>Country</Label>
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
						</div>
					</Container>
				</div>

				<div className="flex w-full justify-end">
					<Button type="submit" disabled={isPending || isSubmitting}>
						{(isPending || isSubmitting) && <Loader2 className="animate-spin" />}
						Save
					</Button>
				</div>
			</form>
		</div>
	);
}
