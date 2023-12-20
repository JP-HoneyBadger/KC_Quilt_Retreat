/** @format */

import React from 'react';
import Accommodations from './Accommodations';
import PageBreakSpinner from './PageBreakSpinner';
import {Button} from '@/components/ui/button'
import Link from 'next/link'

export default function Pricing() {
	return (
		<>
			<div className='flex flex-col justify-center items-center md:mt-10'>
				{' '}
				<div>
					<h1 className='text-2xl lg:text-4xl  mb-4 mx-4 mt-2 lg:mt-6 font-medium'>
						Current Pricing
					</h1>
				</div>
				<div className='flex flex-col justify-center items-center text-xl mb-6 lg:mb-8 px-4 text-center'>
					<h3 className='font-medium'>Thursday to Sunday Retreats</h3>
					<h3>*4 Person Minimum</h3>
					<h3>*8 Person Maximum</h3>
					<h3>$125.00 Per Each Person</h3>
				</div>
				<div>
					<div>
						<h3 className='font-medium'>
							Check in after 8am on Thrusday
						</h3>
					</div>
					<div>
						<h3 className='font-medium'>
							Check out before 8pm on Sunday
						</h3>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center py-2 mt-8'>
				<Button className=''>
                    <Link href='/calendar-page'>Calendar</Link>
                </Button></div>
			</div>
			<div className='mt-10'>
				<PageBreakSpinner />
				<Accommodations />
				
			</div>
		</>
	);
}
