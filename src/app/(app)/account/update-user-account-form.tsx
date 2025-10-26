'use client';

import { z } from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { IProfile } from '@/@types/user';
import { errorHandler } from '@/_http/error-handler/error-handler';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ErrorMessage } from '@/components/error-message';
import { UserRoleBadge } from '@/components/user-role-badge';
import { updateUser } from '@/_http/requests/users/update-user';

import { Loader2 } from 'lucide-react';

interface IProps {
	user: IProfile;
}

const updateForm = z.object({
	name: z.string().min(3, { error: 'Por favor, preencha o campo.' }),
	email: z.email({ error: 'Please provide a valid email address.' }).min(1, { error: 'Please fill in the field.' }),
});

type UpdateForm = z.infer<typeof updateForm>;

export function UpdateUserInfosForm({ user }: IProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, errors },
	} = useForm<UpdateForm>({
		resolver: zodResolver(updateForm),
		defaultValues: {
			name: user.name,
			email: user.email,
		},
	});

	const queryClient = useQueryClient();

	const { mutateAsync: updateUserFn, isPending } = useMutation({
		mutationFn: updateUser,
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['user', user.id] });
		},
	});

	async function handleUpdateForm(data: UpdateForm) {
		try {
			await updateUserFn({
				userId: user.id,
				name: data.name,
			});

			reset();

			toast.success('Data updated successfully.');
		} catch (error) {
			errorHandler({ error });
		}
	}

	return (
		<form onSubmit={handleSubmit(handleUpdateForm)} className="flex flex-col gap-4">
			<div className="space-y-2">
				<Label htmlFor="name">Name</Label>
				<Input id="name" {...register('name')} />
				<ErrorMessage message={errors.name?.message} />
			</div>

			<div className="space-y-2">
				<Label>E-mail</Label>
				<Input disabled readOnly {...register('email')} />
			</div>

			<div className="space-y-2">
				<Label>Role</Label>
				<UserRoleBadge variant={user.role}>{user.role}</UserRoleBadge>
			</div>

			<div className="flex justify-end">
				<Button type="submit" disabled={isPending || isSubmitting}>
					{(isPending || isSubmitting) && <Loader2 className="animate-spin" />}
					Save
				</Button>
			</div>
		</form>
	);
}
