/** @format */

import Cube3D from '@/components/3D-Grapics/Cube3D';
import PageBreak from '@/components/PageBreak';
import React from 'react';

export default function page() {
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className=' text-3xl font-medium'>About</h1>
			<div className='pt-6 lg:pt-8 w-full'>
				<PageBreak />
				
			</div>
			<h2 className=' text-2xl font-medium pt-4'>Coming Soon!</h2>
			<Cube3D />
		</div>
	);
}
