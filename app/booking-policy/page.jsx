/** @format */

import Hero from '@/components/Hero';
import PageBreak from '@/components/PageBreak';
import Pricing from '@/components/Pricing';
import React from 'react';

export default function page() {
	return (
		<>
			<section>
				<div className='flex flex-col w-full h-96 -z-10'>
					<Hero />
					<div className='py-6 lg:py-8'>
						<PageBreak />
					</div>
				</div>
				<Pricing />
			</section>
		</>
	);
}
