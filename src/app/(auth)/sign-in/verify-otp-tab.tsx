import z from 'zod';
import { toast } from 'sonner';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { verifyOtp } from '@/_http/requests/auth/verify-otp';
import { errorHandler } from '@/_http/error-handler/error-handler';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { TimerCounter } from '@/components/timer-counter';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { ArrowLeft, Loader2 } from 'lucide-react';

interface IProps {
	onTabChange: (tab: 'request-otp' | 'verify-otp') => void;
}

// Only allow digits in OTP input
const REGEXP_ONLY_DIGITS = '^\\d+$';

export function VerifyOtpTab({ onTabChange }: IProps) {
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const pathname = usePathname();
	const navigate = useRouter();

	const emailParams = searchParams.get('email') ?? '';
	const otpExpiresInSecondsParams = z.coerce.number().parse(searchParams.get('expires') ?? '300');

	const [isExpired, setIsExpired] = useState(false);
	const [otpInputValue, setOtpInputValue] = useState('');

	function handleBackToRequestOtp() {
		params.delete('email');
		params.delete('expires');
		navigate.replace(pathname);

		onTabChange('request-otp');
	}

	const { mutateAsync: verifyOtpFn, isPending } = useMutation({ mutationFn: verifyOtp });

	async function handleVerifyOtp() {
		if (otpInputValue.length !== 6) {
			return toast.warning('Please, enter the 6-digit code sent to your email.');
		}

		try {
			await verifyOtpFn({ email: emailParams, otp: otpInputValue });

			navigate.replace('/dashboard');
		} catch (error) {
			errorHandler({ error });
		}
	}

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<div>
					<Button size="sm" variant="ghost" disabled={isPending} onClick={handleBackToRequestOtp}>
						<ArrowLeft />
						Back
					</Button>
				</div>
				<CardTitle className="text-center text-lg">Validate security code</CardTitle>

				<CardDescription className="text-foreground text-pretty">
					Security code sent to the email address <strong>{emailParams}</strong>. Please enter it in the field below to
					authenticate yourself to the application.
				</CardDescription>
			</CardHeader>

			<CardContent>
				<div className="flex flex-col gap-4">
					<div className="flex w-full justify-center">
						<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} onChange={(value) => setOtpInputValue(value)}>
							<InputOTPGroup>
								<InputOTPSlot index={0} className="size-12" />

								<InputOTPSlot index={1} className="size-12" />

								<InputOTPSlot index={2} className="size-12" />

								<InputOTPSlot index={3} className="size-12" />

								<InputOTPSlot index={4} className="size-12" />

								<InputOTPSlot index={5} className="size-12" />
							</InputOTPGroup>
						</InputOTP>
					</div>

					<div>
						<TimerCounter expiresInSeconds={otpExpiresInSecondsParams} onExpire={setIsExpired} />
					</div>
				</div>

				<div className="mt-6">
					<Separator />
				</div>
			</CardContent>

			<CardFooter className="flex-col gap-2">
				<Button disabled={isPending || otpInputValue.length !== 6} onClick={() => handleVerifyOtp()} className="w-full">
					{isPending && <Loader2 className="animate-spin" />}
					Validate
				</Button>
				<span className="text-muted-foreground text-sm">Didn&apos;t receive the code??</span>

				<Button
					variant="outline"
					className="w-full disabled:pointer-events-auto disabled:cursor-not-allowed"
					disabled={!isExpired || isPending}
				>
					Resend code
				</Button>
			</CardFooter>
		</Card>
	);
}
