'use client';

import { AuthSession } from '@/auth/auth';
import { createContext, useContext, useMemo, useState } from 'react';

type Ctx = {
	auth: AuthSession;
	setAuth: (a: AuthSession) => void;
};

const AuthCtx = createContext<Ctx | null>(null);

export function AuthProvider({ initialAuth, children }: { initialAuth: AuthSession; children: React.ReactNode }) {
	const [auth, setAuth] = useState<AuthSession>(initialAuth);

	const value = useMemo(() => ({ auth, setAuth }), [auth]);

	return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
	const ctx = useContext(AuthCtx);

	if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');

	return ctx; // { auth, setAuth }
}
