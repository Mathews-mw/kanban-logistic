import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { signOut } from '@/_http/requests/auth/sign-out';
import { errorHandler } from '@/_http/error-handler/error-handler';

import { Button } from '../ui/button';
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';

import { Loader2 } from 'lucide-react';

export function SignoutDialog() {
	const navigate = useRouter();

	const { mutateAsync: signOutFn, isPending } = useMutation({
		mutationFn: signOut,
		onSuccess: () => {
			navigate.replace('/sign-in');
		},
		onError: (error) => errorHandler({ error: error }),
	});

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Are you sure you want to leave?</DialogTitle>
				<DialogDescription>This action will end your session.</DialogDescription>
			</DialogHeader>
			<DialogFooter>
				<DialogClose asChild>
					<Button variant="outline">Cancel</Button>
				</DialogClose>

				<Button onClick={() => signOutFn()}>
					{isPending && <Loader2 className="animate-spin" />}
					Sign-out
				</Button>
			</DialogFooter>
		</DialogContent>
	);
}
