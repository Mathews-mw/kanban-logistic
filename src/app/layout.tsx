import './globals.css';

import dayjs from 'dayjs';
// import 'dayjs/locale/pt-br';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { getAuthFromHeaders } from '@/auth/auth';
import { AppProvider } from '@/providers/app-provider';
import { AuthProvider } from '@/providers/auth-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { UserContextProvider } from '@/context/user-context';
import { TanstackQueryClientProvider } from '@/providers/tanstack-query-client-provider';

// dayjs.locale('pt-br');
dayjs.extend(utc);
dayjs.extend(relativeTime);

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Alzagri Dashboard',
	description: 'Alzagri Dashboard Web Application',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const auth = await getAuthFromHeaders(); // lido do middleware

	return (
		<html lang="en">
			<body className={`${inter.className} h-screen antialiased`}>
				<TanstackQueryClientProvider>
					<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
						<AppProvider>
							<AuthProvider initialAuth={auth}>
								<UserContextProvider>{children}</UserContextProvider>?
							</AuthProvider>
						</AppProvider>
					</ThemeProvider>
				</TanstackQueryClientProvider>

				<Toaster richColors closeButton duration={1000 * 10} />
			</body>
		</html>
	);
}
