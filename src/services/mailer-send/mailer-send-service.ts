import { env } from '@/env';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { InternalServerError } from '@/_http/errors/internal-server-error';
import { APIResponse } from 'mailersend/lib/services/request.service';

const mailerSend = new MailerSend({
	apiKey: env.MAILER_SEND_API_TOKEN,
});

export async function sendOtpEmail({ to, otp, name }: { to: string; otp: string; name: string }) {
	const sentFrom = new Sender('no-reply@test-r9084zvov38gw63d.mlsender.net', 'Kanban Logistic');

	const recipients = [new Recipient(to, name)];

	try {
		const emailParams = new EmailParams()
			.setFrom(sentFrom)
			.setTo(recipients)
			.setSubject(`Your access code is ${otp}`)
			.setHtml(`<p>Hi, ${name}! Here's your access code: <strong>${otp}</strong>. It's only valid for 5 minutes.</p>`)
			.setText(`Hi, ${name}! Here's your access code: ${otp}. It's only valid for 5 minutes.`);

		await mailerSend.email.send(emailParams);
	} catch (error) {
		console.error('Email sender error: ', (error as APIResponse).body);

		throw new InternalServerError(
			'An unexpected error occurred while trying to send e-mail. Please try again later.',
			'INTERNAL_SERVER_ERROR'
		);
	}
}
