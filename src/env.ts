import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(['development', 'qas', 'production']).default('development'),
		DATABASE_URL: z.string(),
		SECRET_TOKEN: z.string(),
		AUTH_COOKIE_NAME: z.string(),
		NEXTAUTH_URL: z.string(),
		NEXTAUTH_SECRET: z.string(),
		MAILER_SEND_API_TOKEN: z.string(),
	},
	client: {
		NEXT_PUBLIC_API_BASE_URL: z.string(),
	},

	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		DATABASE_URL: process.env.DATABASE_URL,
		SECRET_TOKEN: process.env.SECRET_TOKEN,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		AUTH_COOKIE_NAME: process.env.AUTH_COOKIE_NAME,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
		MAILER_SEND_API_TOKEN: process.env.MAILER_SEND_API_TOKEN,
	},
});
