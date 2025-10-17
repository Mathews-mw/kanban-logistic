'use client';

import { useQuery } from '@tanstack/react-query';
import { createContext, useContext } from 'react';

import { IProfile } from '@/@types/user';
import { getUserProfile } from '@/_http/users/get-user-profile';

interface UserContextType {
	userProfile?: IProfile;
	isLoading: boolean;
	isError?: boolean;
	refetch: () => void;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: { children: React.ReactNode }) {
	const {
		data: userProfile,
		isLoading,
		isError,
		refetch,
	} = useQuery<IProfile>({
		queryKey: ['profile'],
		queryFn: async () => {
			const response = await getUserProfile();
			return response.profile;
		},
		staleTime: 1000 * 60 * 60, // 1h
		retry: false,
	});

	return <UserContext.Provider value={{ userProfile, isLoading, isError, refetch }}>{children}</UserContext.Provider>;
}

export function useUser() {
	const ctx = useContext(UserContext);

	if (!ctx) {
		throw new Error('useUser must be used within a UserProvider');
	}

	return ctx;
}
