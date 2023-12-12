/** @format */

import LocalAreaList from './LocalAreaList';
import { ScissorsSquareDashedBottom, Utensils } from 'lucide-react';

export default function LocalAreaVenues() {
	return (
		<div>
			<div className='flex flex-col justify-center items-center mt-4'>
				<h1 className='text-2xl lg:text-4xl  mb-4 mx-4 lg:mt-6 font-medium mt-8'>
					Local Area Venues
				</h1>
			</div>
			<div className='flex flex-col justify-center items-center text-xl mb-6 lg:mb-8 px-4 text-center'>
				<h3 className='font-medium mb-2 flex flex-row gap-x-2'>
					<ScissorsSquareDashedBottom />
					<h2>Local supplies and Resturants</h2>
					<Utensils />
				</h3>
				<LocalAreaList />
			</div>
		</div>
	);
}
