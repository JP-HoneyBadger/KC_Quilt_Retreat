/** @format */

import Iframe from 'react-iframe';
import { Map } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

export default function MapButton() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='link'>
					{' '}
					<Map
						size={30}
						className='text-primary dark:text-gray-400  hover:text-white dark:hover:text-primary transition-all'
					/>
					<h5 className='text-sm md:text-xl ml-4 text-gray-400 hover:text-primary font-normal'>
						6407 NE 156th St, Smithville, MO
					</h5>
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[340px] md:w-[640px]'>
				<div className='flex flex-col'>
					{/* <div className='space-y-2'>
						<h4 className='font-medium leading-none'>
							KC Quilt Retreat
						</h4>
						<p className='text-sm text-muted-foreground'>
							Google Map -- 6407 NE 156th St, Smithville, MO,
							United States
						</p>
					</div> */}
					<div className='flex flex-1 w-280 md:w-600'>
						<Iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.2235726910885!2d-94.50222199999999!3d39.373816000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0515c64e39bc5%3A0x3b76578a2dfce53c!2sKC%20Quilt%20Retreat!5e0!3m2!1sen!2sus!4v1702338637989!5m2!1sen!2sus'
							width='600'
							height='450'
							style='border:0;'
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
							className='flex flex-1 w-300'></Iframe>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
