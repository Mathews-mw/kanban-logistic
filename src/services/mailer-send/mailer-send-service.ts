import { env } from '@/env';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

const mailerSend = new MailerSend({
	apiKey: env.MAILER_SEND_API_TOKEN,
});

export async function sendOtpEmail({ to, otp, name }: { to: string; otp: string; name: string }) {
	const sentFrom = new Sender('no-reply@yalzagri.com', 'Kanban Logistic');

	const recipients = [new Recipient(to, name)];

	const emailParams = new EmailParams()
		.setFrom(sentFrom)
		.setTo(recipients)
		.setSubject(`Your access code is ${otp}`)
		.setHtml(`<p>Hi, ${name}! Here's your access code: <strong>${otp}</strong>. It's only valid for 5 minutes.</p>`)
		.setText(`Hi, ${name}! Here's your access code: ${otp}. It's only valid for 5 minutes.`);

	await mailerSend.email.send(emailParams);
}
