'use client';

import z from 'zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';

import { errorHandler } from '@/_http/error-handler/error-handler';
import { createTicket } from '@/_http/requests/tickets/create-ticket';
import { listingVehicles } from '@/_http/requests/vehicles/listing-vehicles';
import { listingProducts } from '@/_http/requests/products/listing-products';
import { listingCompanies } from '@/_http/requests/companies/listing-companies';
import { listingDeliveryPlants } from '@/_http/requests/delivery-plants/listing-delivery-plants';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Container } from '@/components/container';
import { PageTitle } from '@/components/page-title';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@/components/error-message';
import { AsyncAutoComplete } from '@/components/async-autocomplete';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Info, Loader2 } from 'lucide-react';
import { useUser } from '@/context/user-context';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const formSchema = z.object({
	supplierId: z.string().min(1, 'Please, select the Supplier'),
	customerId: z.string().min(1, 'Please, select the Customer'),
	deliveryPlantId: z.string().min(1, 'Please, select the Delivery Plant'),
	transporterId: z.string().min(1, 'Please, select the Transporter'),
	vehicleId: z.string().min(1, 'Please, select the Vehicle'),
	productId: z.string().min(1, 'Please, select the Product'),
	tareWeight: z.string().optional(),
	grossWeight: z.string().optional(),
	unit: z.string().optional(),
	weighedAt: z.string().optional(),
	notes: z.string().max(2000).optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function NewTicketPage() {
	const {
		control,
		register,
		handleSubmit,
		reset,
		setValue,
		watch,
		formState: { isSubmitting, errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const { userProfile } = useUser();

	const [supplierSearch, setSupplierSearch] = useState<string | undefined>(undefined);
	const [customerSearch, setCustomerSearch] = useState<string | undefined>(undefined);
	const [transportersSearch, setTransportersSearch] = useState<string | undefined>(undefined);
	const [deliveryPlantSearch, setDeliveryPlantSearch] = useState<string | undefined>(undefined);
	const [productsSearch, setProductsSearch] = useState<string | undefined>(undefined);

	// valores assistentes
	const customerId = watch('customerId');
	const transporterId = watch('transporterId');
	const tareWeight = watch('tareWeight');
	const grossWeight = watch('grossWeight');

	const navigate = useRouter();

	const { data: suppliersResponse, isFetching: isFetchingSuppliers } = useQuery({
		queryKey: ['suppliers', supplierSearch],
		queryFn: async () => {
			const response = listingCompanies({ page: 1, perPage: 100, role: 'SUPPLIER', search: supplierSearch });

			return (await response).companies.map((item) => ({ value: item.id, label: item.name }));
		},
	});

	const { data: customersResponse, isFetching: isFetchingCustomers } = useQuery({
		queryKey: ['customers', customerSearch],
		queryFn: async () => {
			const response = listingCompanies({ page: 1, perPage: 100, role: 'CUSTOMER', search: customerSearch });

			return (await response).companies.map((item) => ({ value: item.id, label: item.name }));
		},
	});

	const { data: transportersResponse, isFetching: isFetchingTransporters } = useQuery({
		queryKey: ['transporters', transportersSearch],
		queryFn: async () => {
			const response = listingCompanies({ page: 1, perPage: 100, role: 'TRANSPORTER', search: transportersSearch });

			return (await response).companies.map((item) => ({ value: item.id, label: item.name }));
		},
	});

	const { data: deliveryPlantsResponse, isFetching: isFetchingDeliveryPlants } = useQuery({
		queryKey: ['delivery_plants', customerId, deliveryPlantSearch],
		queryFn: async () => {
			const response = listingDeliveryPlants({
				page: 1,
				perPage: 100,
				customerId,
				search: deliveryPlantSearch,
			});

			return (await response).deliveryPlants.map((item) => ({ value: item.id, label: item.name }));
		},
		enabled: !!customerId,
	});

	const { data: vehiclesResponse, isFetching: isFetchingVehicles } = useQuery({
		queryKey: ['vehicles', transporterId],
		queryFn: async () => {
			const response = listingVehicles({
				page: 1,
				perPage: 100,
				transporterId,
			});

			return (await response).vehicles.map((item) => ({ value: item.id, label: item.plateNumber }));
		},
		enabled: !!transporterId,
	});

	const { data: productsResponse, isFetching: isFetchingProducts } = useQuery({
		queryKey: ['products', productsSearch],
		queryFn: async () => {
			const response = listingProducts({ page: 1, perPage: 100, search: productsSearch });

			return (await response).products.map((item) => ({ value: item.id, label: item.description }));
		},
	});

	const netWeight = useMemo(() => {
		if (grossWeight == null || tareWeight == null || grossWeight === undefined || tareWeight === undefined) return null;

		const net = Number(grossWeight) - Number(tareWeight);

		return Math.max(net, 0);
	}, [grossWeight, tareWeight]);

	const { mutateAsync: createTicketFn, isPending } = useMutation({ mutationFn: createTicket });

	async function handleCreateTicket(data: FormData) {
		console.log('form error: ', errors);
		console.log('form data: ', data);

		try {
			const response = await createTicketFn({
				supplierId: data.supplierId,
				customerId: data.customerId,
				transporterId: data.transporterId,
				vehicleId: data.vehicleId,
				deliveryPlantId: data.deliveryPlantId,
				productId: data.productId,
				grossWeight: data.grossWeight ? Number(data.grossWeight) : undefined,
				tareWeight: data.tareWeight ? Number(data.tareWeight) : undefined,
				unit: data.unit,
				weighedAt: data.weighedAt ? new Date(data.weighedAt) : undefined,
				notes: data.notes,
			});

			toast.success('Ticket successfully created', {
				description: `Ticket with number ${response.ticket.number} was generated successfully`,
			});

			reset();
			navigate.push(`/tickets/${response.ticket.id}/details`);
		} catch (error) {
			errorHandler({ error });
		}
	}

	// coerência: trocar parent → limpar child
	useEffect(() => {
		setValue('deliveryPlantId', '');
	}, [customerId, setValue]);

	useEffect(() => {
		setValue('vehicleId', '');
	}, [transporterId, setValue]);

	useEffect(() => {
		const companyId = userProfile?.companyId;
		const companyName = userProfile?.company.name;

		if (companyId) {
			setValue('supplierId', companyId, { shouldValidate: true });
			// (opcional) guardar um label para o resumo, veja item 3
			// setSupplierLabel(companyName || 'Sua empresa');
		}
	}, [userProfile]);

	return (
		<div className="space-y-8">
			<PageTitle title="New Ticket" description="Fill in the details to create a draft ticket" backButton />

			<form onSubmit={handleSubmit(handleCreateTicket)} className="space-y-4">
				<Container>
					<div className="flex items-center gap-2">
						<Popover>
							<PopoverTrigger className="cursor-pointer">
								<Info className="size-5" />
							</PopoverTrigger>
							<PopoverContent>
								<ul className="text-muted-foreground space-y-2 text-xs text-pretty">
									<li>
										<strong>Supplier</strong>: This is usually your own company (the one issuing the ticket).
									</li>
									<li>
										<strong>Customer</strong>: The person to whom the shipment is being shipped.
									</li>
									<li>
										<strong>Delivery Plant</strong>: The physical delivery location within the customer&apos;s location.
									</li>
								</ul>
							</PopoverContent>
						</Popover>

						<span className="font-medium">Who receives and where to unload</span>
					</div>

					<div className="space-y-2">
						<Label>Supplier</Label>
						<Controller
							control={control}
							name="supplierId"
							render={({ field }) => {
								return (
									<AsyncAutoComplete
										options={suppliersResponse ?? []}
										isFetching={isFetchingSuppliers}
										onSelectValue={(v) => field.onChange(v)}
										onSearchValue={(q) => setSupplierSearch(q)}
										placeholder="Select a supplier"
									/>
								);
							}}
						/>
						<ErrorMessage message={errors.supplierId?.message} />
					</div>

					<div className="space-y-2">
						<Label>Customer</Label>
						<Controller
							control={control}
							name="customerId"
							render={({ field }) => {
								return (
									<AsyncAutoComplete
										placeholder="Select a customer"
										options={customersResponse ?? []}
										isFetching={isFetchingCustomers}
										onSelectValue={(v) => field.onChange(v)}
										onSearchValue={(q) => setCustomerSearch(q)}
									/>
								);
							}}
						/>
						<ErrorMessage message={errors.customerId?.message} />
					</div>

					<div className="space-y-2">
						<Label>Delivery Plant</Label>
						<Controller
							control={control}
							name="deliveryPlantId"
							render={({ field }) => {
								return (
									<AsyncAutoComplete
										disabled={!customerId}
										options={deliveryPlantsResponse ?? []}
										isFetching={isFetchingDeliveryPlants}
										onSelectValue={(v) => field.onChange(v)}
										onSearchValue={(q) => setDeliveryPlantSearch(q)}
										placeholder="Select Delivery Plant"
									/>
								);
							}}
						/>
						<ErrorMessage message={errors.deliveryPlantId?.message} />
					</div>
				</Container>

				<Container>
					<div className="flex items-center gap-2">
						<Popover>
							<PopoverTrigger className="cursor-pointer">
								<Info className="size-5" />
							</PopoverTrigger>
							<PopoverContent>
								<ul className="text-muted-foreground space-y-2 text-xs text-pretty">
									<li>
										<strong>Transporter</strong>: company responsible for shipping.
									</li>
									<li>
										<strong>Vehicle</strong>: license plate associated with the selected carrier.
									</li>
									<li>
										<strong>Product</strong>: material being transported (e.g., gravel, sand, clay).
									</li>
								</ul>
							</PopoverContent>
						</Popover>

						<span className="font-medium">Who transports and with which product/vehicle</span>
					</div>

					<div className="space-y-2">
						<Label>Transporter</Label>
						<Controller
							control={control}
							name="transporterId"
							render={({ field }) => {
								return (
									<AsyncAutoComplete
										options={transportersResponse ?? []}
										isFetching={isFetchingTransporters}
										onSelectValue={(v) => field.onChange(v)}
										onSearchValue={(q) => setTransportersSearch(q)}
										placeholder="Select a transporter"
									/>
								);
							}}
						/>
						<ErrorMessage message={errors.transporterId?.message} />
					</div>

					<div className="space-y-2">
						<Label>Vehicle</Label>
						<Controller
							control={control}
							name="vehicleId"
							render={({ field }) => {
								return (
									<AsyncAutoComplete
										disabled={!transporterId}
										options={vehiclesResponse ?? []}
										isFetching={isFetchingVehicles}
										onSelectValue={(v) => field.onChange(v)}
										placeholder="Select a vehicle"
									/>
								);
							}}
						/>
						<ErrorMessage message={errors.vehicleId?.message} />
					</div>

					<div className="space-y-2">
						<Label>Products</Label>
						<Controller
							control={control}
							name="productId"
							render={({ field }) => {
								return (
									<AsyncAutoComplete
										options={productsResponse ?? []}
										isFetching={isFetchingProducts}
										onSelectValue={(v) => field.onChange(v)}
										onSearchValue={(q) => setProductsSearch(q)}
										placeholder="Select a product"
									/>
								);
							}}
						/>
						<ErrorMessage message={errors.productId?.message} />
					</div>
				</Container>

				<Container>
					<div className="flex items-center gap-2">
						<Popover>
							<PopoverTrigger className="cursor-pointer">
								<Info className="size-5" />
							</PopoverTrigger>
							<PopoverContent>
								<ul className="text-muted-foreground space-y-2 text-xs text-pretty">
									<li>
										<strong>Tare</strong>: Empty vehicle weight.
									</li>
									<li>
										<strong>Gross</strong>: Loaded vehicle weight.
									</li>
									<li>
										<strong>Net</strong>: Automatic calculation (Gross - Tare, never negative).
									</li>
									<li>
										<strong>Unit</strong>: Applicable weight unit.
									</li>
									<li>
										*If you don&apos;t have a weight at the time of creation, leave Tare/Gross blank and create the
										ticket as a DRAFT; you can fill it in later, before marking it as READY/SHARED.
									</li>
								</ul>
							</PopoverContent>
						</Popover>

						<span className="font-medium">Weight Line — Measurements and Unit</span>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-4">
							<div className="space-y-2">
								<Label>Tare</Label>
								<Input type="number" step="0.01" id="tareWeight" placeholder="Ex.: 12480" {...register('tareWeight')} />
							</div>

							<div className="space-y-2">
								{/* Peso liquido bruto */}
								<Label>Gross </Label>
								<Input
									type="number"
									id="grossWeight"
									step="0.01"
									placeholder="Ex.: 26340"
									{...register('grossWeight')}
								/>
							</div>

							<div className="space-y-2">
								<Label>Unit</Label>

								<Controller
									control={control}
									name="unit"
									render={({ field }) => (
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select an unit" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="KG">KG</SelectItem>
												<SelectItem value="T">T</SelectItem>
											</SelectContent>
										</Select>
									)}
								/>
							</div>
						</div>

						<div>
							{/* Peso Líquido */}
							<Label>Net</Label>
							<div className="bg-muted/40 mt-2 flex h-9 items-center rounded-md border px-3 text-sm">
								{netWeight ?? '—'}
							</div>
						</div>
					</div>
				</Container>

				<Container>
					<div className="flex items-center gap-2">
						<Popover>
							<PopoverTrigger className="cursor-pointer">
								<Info className="size-5" />
							</PopoverTrigger>
							<PopoverContent>
								<ul className="text-muted-foreground space-y-2 text-xs text-pretty">
									<li>
										<strong>Weighed At</strong>: Timestamp of the weighing (optional in DRAFT, useful for auditing and
										reporting).
									</li>
									<li>
										<strong>Notes</strong>: Free field for internal notes (driver, tracking document, instructions,
										etc.).
									</li>
									<li>
										Tip: Use the notes field for any information that helps the back office team and the customer
										understand the context of the ticket.
									</li>
								</ul>
							</PopoverContent>
						</Popover>

						<span className="font-medium">Operational details</span>
					</div>

					<div className="space-y-2">
						<Label>
							Weighed At <small className="text-muted-foreground">(optional)</small>
						</Label>
						<Input id="weighedAt" type="datetime-local" {...register('weighedAt')} />
					</div>

					<div className="space-y-2">
						<Label htmlFor="notes">Notes</Label>

						<Textarea id="notes" rows={3} {...register('notes')} />
					</div>
				</Container>

				<div className="flex w-full justify-end">
					<Button type="submit">
						{(isPending || isSubmitting) && <Loader2 className="animate-spin" />}
						{isPending || isSubmitting ? 'Creating...' : 'Create Ticket'}
					</Button>
				</div>
			</form>
		</div>
	);
}
