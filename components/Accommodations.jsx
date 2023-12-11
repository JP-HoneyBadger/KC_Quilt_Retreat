/** @format */

import AccomList from './AccomList';

export default function Accommodations() {
	return (
		<div>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-2xl lg:text-4xl  mb-4 mx-4 lg:mt-6 font-medium mt-8'>
					Accommodations
				</h1>
			</div>
			<div className='flex flex-col justify-center items-center text-xl mb-6 lg:mb-8 px-4 text-center'>
				<h3 className='font-medium mb-2'>
					Overnight and Crafting Area for 8
				</h3>
			<AccomList/>
			</div>
			
		</div>
	);
}
