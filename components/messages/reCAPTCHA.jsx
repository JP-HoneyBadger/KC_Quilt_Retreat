/** @format */

import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/utils/ServerActions";
import { useRef, useState } from "react";
import { RiMailSendLine } from "react-icons/ri";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const GoogleReCaptcha = () => {
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
			type="submit"
			disabled={!isVerified} className='btn rounded-full border ring-1 ring-indigo-500 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:dark:text-gray-500 hover:ring-inset hover:ring-green-900 group mt-4 shadow-md'>
				<span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 dark:text-gray-500'>
					Let&apos;s <span className='text-accent'>talk</span>
				</span>
				<RiMailSendLine
					className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'
					color='green'
				/>
			</button>
		</>
	);
};
export default GoogleReCaptcha;
