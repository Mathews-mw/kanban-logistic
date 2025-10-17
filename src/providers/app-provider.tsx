'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authEmitter } from '@/events/auth-events';

export function AppProvider({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	useEffect(() => {
		const onLogout = () => {
			router.push('/api/auth/sign-out');
		};

		const onRedirectToLogin = () => {
			router.push('/sign-out');
		};

		const onForbidden = () => {
			router.push('/403');
		};

		authEmitter.on('logout', onLogout);
		authEmitter.on('forbidden', onForbidden);
		authEmitter.on('redirectToLogin', onRedirectToLogin);

		return () => {
			authEmitter.off('logout', onLogout);
			authEmitter.off('forbidden', onForbidden);
			authEmitter.off('redirectToLogin', onRedirectToLogin);
		};
	}, [router]);

	return <>{children}</>;
}
