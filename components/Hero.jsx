/** @format */

import { HeroImg } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import PageBreak from './PageBreak';

export default function Hero() {
	return (<>
		<section className='w-full max-h-[80%] hidden sm:block'>
			<div className='flex flex-col w-full h-full relative'>
				<Image
					src={HeroImg}
					width='w-full'
					height='h-full'
					alt='Hero Image'
					className='h-full w-full object-cover block'
				/>
				{/* Overlay */}
				<div className='absolute bottom-0 z-10 flex justify-center items-center w-full'>
					<div className='text-center text-gray-600 backdrop-blur-sm backdrop-opacity-400 bg-white/70 rounded-t-xl'>
						<h1 className='text-2xl lg:text-4xl  mb-4 mx-4 mt-2 lg:mt-6 font-medium'>
							Book now at the KC Quilt Retreat
						</h1>
						<p className='text-xl mb-6 lg:mb-8  px-4'>
							Please use our
							<Link
								href='/contact'
								target='_blank'
								rel='noopener'
								className='text-primary hover:cursor-pointer'>
								{' '}
								contact page{' '}
							</Link>
							or contact us @
						</p>
						<h2 className='px-6 py-3 text-lg lg:text-xl'>
							info@kcquiltretreat.com
						</h2>{' '}
						<h2 className='px-6 pb-3 text-lg lg:text-xl'>
							(913) 449-2411
						</h2>
					</div>{' '}
				</div>
			</div>
			</section>
			<div className='flex bg-secondary-foreground justify-center items-center w-full sm:hidden'>
				<div className='text-center text-gray-600 backdrop-blur-sm backdrop-opacity-400 bg-white/70 rounded-t-xl'>
					<h1 className='text-2xl lg:text-4xl  mb-4 mx-4 mt-2 lg:mt-6 font-medium'>
						Book now at the KC Quilt Retreat
					</h1>
					<div className='text-xl mb-6 lg:mb-8 px-4'>
						Please use our
						<Link
							href='/contact'
							target='_blank'
							rel='noopener'
							className='text-primary hover:cursor-pointer'>
							{' '}
							contact page{' '}
						</Link>
						or contact us @
					</div>
					<h2 className='px-6 py-3 text-lg lg:text-xl'>
						info@kcquiltretreat.com
					</h2>{' '}
					<h2 className='px-6 pb-3 text-lg lg:text-xl'>
						(913) 449-2411
					</h2>
				</div>{' '}

			</div>
			</>
	);
}
