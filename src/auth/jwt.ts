import { env } from '@/env';
import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

const JWT_SECRET = new TextEncoder().encode(env.SECRET_TOKEN);
const ALGORITHM = 'HS256';

export type AppJwtPayload = JWTPayload & {
	sub: string; // userId
	email: string;
	activeCompanyId?: string;
	roles?: string[];
};

export async function signAppJwt(payload: AppJwtPayload, expiresIn = '7d') {
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: ALGORITHM })
		.setExpirationTime(expiresIn)
		.setIssuedAt()
		.sign(JWT_SECRET);
}

export async function verifyAppJwt(token: string): Promise<AppJwtPayload> {
	const { payload } = await jwtVerify(token, JWT_SECRET, { algorithms: [ALGORITHM] });

	return payload as AppJwtPayload;
}
