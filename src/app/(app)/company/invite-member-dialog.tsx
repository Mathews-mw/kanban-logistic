'use client';

import z from 'zod';
import { toast } from 'sonner';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { errorHandler } from '@/_http/error-handler/error-handler';
import { sendInvitation } from '@/_http/requests/invitations/send-invitation';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ErrorMessage } from '@/components/error-message';
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
import {
	MultiSelect,
	MultiSelectContent,
	MultiSelectGroup,
	MultiSelectItem,
	MultiSelectTrigger,
	MultiSelectValue,
} from '@/components/ui/multi-select';

import { Loader2, UserPlus } from 'lucide-react';

const formSchema = z.object({
	email: z.email({ error: 'Please provide a valid email address' }).min(1, 'Please provide a valid email address'),
	roles: z.array(z.string()).min(1, 'Please select at least one role'),
});

type FormData = z.infer<typeof formSchema>;

interface IProps {
	companyId: string;
}

export function InviteMemberDialog({ companyId }: IProps) {
	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const [open, setOpen] = useState(false);

	const queryClient = useQueryClient();

	const { mutateAsync: sendInvitationFn, isPending } = useMutation({
		mutationFn: sendInvitation,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['company_invitations', companyId],
			});
		},
	});

	async function handleSendInvitation(data: FormData) {
		try {
			await sendInvitationFn({ companyId, email: data.email, roles: data.roles });

			toast.success('Invitation sent', {
				description: `Your invitation has been successfully sent to ${data.email}.`,
			});

			reset();
			setOpen(false);
		} catch (error) {
			errorHandler({ error });
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<form id="invitationForm" onSubmit={handleSubmit(handleSendInvitation)}>
				<DialogTrigger asChild>
					<Button variant="outline">
						<UserPlus /> Invite Member
					</Button>
				</DialogTrigger>

				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Invite member</DialogTitle>
						<DialogDescription>
							I sent an invitation to invite a member to join your organization. Carefully choose the roles you want to
							assign to this guest.
						</DialogDescription>
					</DialogHeader>

					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="email">E-mail</Label>
							<Input id="email" type="email" {...register('email')} />
							<ErrorMessage message={errors.email?.message} />
						</div>

						<div className="grid gap-3">
							<Label htmlFor="roles">Assign roles</Label>
							<Controller
								name="roles"
								control={control}
								render={({ field }) => {
									return (
										<MultiSelect onValuesChange={field.onChange} values={field.value}>
											<MultiSelectTrigger className="w-full max-w-[400px]">
												<MultiSelectValue placeholder="Select roles" />
											</MultiSelectTrigger>
											<MultiSelectContent search={false}>
												<MultiSelectGroup>
													<MultiSelectItem value="CUSTOMER">CUSTOMER</MultiSelectItem>
													<MultiSelectItem value="SUPPLIER">SUPPLIER</MultiSelectItem>
													<MultiSelectItem value="TRANSPORTER">TRANSPORTER</MultiSelectItem>
													<MultiSelectItem value="VIEWER">VIEWER</MultiSelectItem>
												</MultiSelectGroup>
											</MultiSelectContent>
										</MultiSelect>
									);
								}}
							/>
							<ErrorMessage message={errors.roles?.message} />
						</div>
					</div>

					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline" disabled={isPending || isSubmitting}>
								Cancel
							</Button>
						</DialogClose>

						<Button type="submit" form="invitationForm" disabled={isPending || isSubmitting}>
							{(isPending || isSubmitting) && <Loader2 className="animate-spin" />}
							Invite
						</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
