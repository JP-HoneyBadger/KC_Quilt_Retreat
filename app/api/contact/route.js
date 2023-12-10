/** @format */

import { render } from '@react-email/components';
import { transporter, smtpEmail } from '@/utils/nodemailer';
import { Email } from '@/components/messages/email';

export async function POST(req, res) {
	const body = await req.json();
	const { first_name, last_name, email, phone, subject, message } = body;

	const emailHtml = render(
		<Email
			first_name={first_name}
			last_name={last_name}
			email={email}
			phone={phone}
			subject={subject}
			message={message}
		/>
	);

	const options = {
		from: smtpEmail,
		to: smtpEmail,
		subject: `New Web Form Submission--${subject}`,
		html: emailHtml,
	};

	try {
		transporter.sendMail(options);
	} catch (error) {
		console.error('Failed to send email:', error);
	}
	return new Response('OK');
}
