/** @format */

import { Phone } from 'lucide-react';

export default function PhoneButton() {
	return (
		<div className='flex flex-row justify-center items-center ps-6'>
			<Phone
				size={30}
				className='text-primary dark:text-gray-400 transition-all'
			/>
			<h5 className='text-sm md:text-lg ml-4 text-gray-400 '>
				(913) 449-2411
			</h5>
		</div>
	);
}
