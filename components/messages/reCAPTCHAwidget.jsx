/** @format */

import ReCAPTCHA from 'react-google-recaptcha';
import { verifyCaptcha } from '@/utils/ServerActions';
import { useRef, useState } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const GoogleReCaptchaWidget = () => {
	const recaptchaRef = useRef(null);
	const [isVerified, setIsverified] = useState(false);

	async function handleCaptchaSubmission(token) {
		// Server function to verify captcha
		await verifyCaptcha(token)
			.then(() => setIsverified(true))
			.catch(() => setIsverified(false));
	}
	return (
		<>
			<ReCAPTCHA
				sitekey={SITE_KEY}
				ref={recaptchaRef}
				onChange={handleCaptchaSubmission}
			/>
			<button
				type='submit'
				disabled={!isVerified}
				className='w-full px-3 py-4 mt-3 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'>
				Send Message
			</button>
		</>
	);
};
export default GoogleReCaptchaWidget;
