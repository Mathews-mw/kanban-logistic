import z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { requestOtp } from '@/_http/requests/auth/request-otp';
import { errorHandler } from '@/_http/error-handler/error-handler';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Loader2, LogIn } from 'lucide-react';

interface IProps {
	onTabChange: (tab: 'request-otp' | 'verify-otp') => void;
}

const formSchema = z.object({
	email: z.email({ error: 'Please, provide a valid e-mail' }).min(1, { message: 'Required' }),
});

type FormData = z.infer<typeof formSchema>;

export function RequestOtpTab({ onTabChange }: IProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const pathname = usePathname();
	const { replace } = useRouter();

	const [loading, setLoading] = useState(false);

	async function handleRequestOtp(data: FormData) {
		setLoading(true);

		try {
			const { otp_expires_in_seconds } = await requestOtp({ email: data.email });

			onTabChange('verify-otp');

			params.set('email', data.email);
			params.set('expires', String(otp_expires_in_seconds));

			replace(`${pathname}?${params.toString()}`);

			reset();
		} catch (error) {
			errorHandler({ error });
		} finally {
			setLoading(false);
		}
	}

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle className="text-center">Welcome!</CardTitle>
				<CardDescription className="text-center">
					Please, enter your email to receive a verification code.
				</CardDescription>
			</CardHeader>

			<CardContent>
				<form onSubmit={handleSubmit(handleRequestOtp)} className="space-y-6">
					<div className="space-y-2">
						<Label htmlFor="email">E-mail</Label>
						<Input id="email" type="email" {...register('email')} />
						<small className="text-xs text-red-400">{errors.email?.message}</small>
					</div>

					<Button type="submit" disabled={loading} className="flex w-full gap-2">
						{loading ? <Loader2 className="animate-spin" /> : <LogIn />}
						Sign-in
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
