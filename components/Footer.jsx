/** @format */

import Link from 'next/link';
import Socials from './Socials';

const Footer = () => {
	return (
		<footer className='bg-secondary py-12'>
			<div className='container mx-auto'>
				<div
					className='flex flex-col justify-between items-center
				'>
					{/* socials */}
					<Socials
						containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
						iconsStyles='text-primary dark:text-white/70 text-[20px] sm:text-[30px] hover:text-white dark:hover:text-primary transition-all'
					/>
					{/* copyright */}
					<div className='text-muted-foreground'>
						<h2 className='px-6 py-3 text-lg lg:text-xl text-gray-400'>
							info@kcquiltretreat.com
						</h2>{' '}
						<h2 className='px-6 pb-3 text-lg lg:text-xl text-gray-400'>
							(913) 449-2411
						</h2>
					</div>
					<div className='my-10 text-sm text-center text-gray-600 dark:text-gray-500'>
						Copyright © {new Date().getFullYear()}. Designed and
						Powered by Joe Plankinton dba{' '}
						<Link
							href='https://honeybadgerits.com/'
							target='_blank'
							rel='noopener'
							className='underline underline-offset-4 text-gray-400'>
							HoneyBadger IT Solutions
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
