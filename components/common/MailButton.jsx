/** @format */

import { Mail } from 'lucide-react';

export default function MailButton() {
	return (
		<div className='flex flex-row justify-center items-center ps-6'>
			<Mail
				size={30}
				className='text-primary dark:text-gray-400 transition-all'
			/>
			<h5 className='text-sm md:text-lg ml-4 text-gray-400 '>
				info@kcquiltretreat.com
			</h5>
		</div>
	);
}
