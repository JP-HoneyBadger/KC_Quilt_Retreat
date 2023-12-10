/** @format */

import { render } from '@react-email/components';
import { transporter, smtpEmail } from '@/utils/nodemailer';
import { EmailWidget } from '@/components/messages/emailWidget';

export async function POST(req, res) {
	const body = await req.json();
	const { name, email, message } = body;

	const emailHtml = render(
		<EmailWidget name={name} email={email} message={message} />
	);

	const options = {
		from: smtpEmail,
		to: smtpEmail,
		subject: `New Widget Submission from ${name}`,
		html: emailHtml,
	};

	try {
		transporter.sendMail(options);
	} catch (error) {
		console.error('Failed to send email:', error);
	}
	return new Response('OK');
}
