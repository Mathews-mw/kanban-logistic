'use client';

import z from 'zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ITransporterDetails } from '@/@types/transporter';
import { Container } from '@/components/container';

import { FaClipboardUser } from 'react-icons/fa6';

interface IProps {
	transporter: ITransporterDetails;
}

const createTransporterForm = z.object({
	name: z.string().min(1, { message: 'Required' }),
	vat: z.string().min(1, { message: 'Required' }),
	phone: z.optional(z.string()),
});

type CreateTransporterForm = z.infer<typeof createTransporterForm>;

export function UpdateTransporterForm({ transporter }: IProps) {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { isSubmitting, errors },
	} = useForm<CreateTransporterForm>({
		resolver: zodResolver(createTransporterForm),
	});

	useEffect(() => {
		setValue('name', transporter.name);
		setValue('vat', transporter.vat);
		setValue('phone', transporter.phone ?? '');
	}, [transporter]);

	return (
		<Container className="h-min flex-grow">
			<form className="space-y-4">
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
					<Label htmlFor="vat">VAT</Label>
					<Input id="vat" inputMode="numeric" {...register('vat')} />
					<small className="text-xs text-red-400">{errors.vat?.message}</small>
				</div>

				<div className="space-y-2">
					<Label htmlFor="phone">Phone</Label>
					<Input id="phone" inputMode="numeric" {...register('phone')} />
				</div>

				<div className="flex w-full justify-end">
					<Button type="submit">Save</Button>
				</div>
			</form>
		</Container>
	);
}
