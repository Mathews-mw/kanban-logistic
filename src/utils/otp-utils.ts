import crypto from 'crypto';

export function generateOtp(length = 6): string {
	// gera 6 dígitos aleatórios
	const otp = Math.floor(100000 + Math.random() * 900000);
	return otp.toString().padStart(length, '0');
}

export function hashOtp(otp: string): string {
	return crypto.createHash('sha256').update(otp).digest('hex');
}
