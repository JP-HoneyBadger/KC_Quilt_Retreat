/** @format */

'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// components
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import MobileNav from './MobileNav';
import Nav from './Nav';
import Socials from './Socials';

export default function Header() {
	const [header, setHeader] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const scrollYPos = window.addEventListener('scroll', () => {
			window.scrollY > 50 ? setHeader(true) : setHeader(false);
		});
		// remove event
		return () => {
			window.removeEventListener('scroll', scrollYPos);
		};
	}, []);

	return (
		<header
			className={`${
				header
					? 'py-4 bg-white shadow-lg dark:bg-accent'
					: 'py-6 dark:bg-transparent'
			} sticky top-0 z-30 transition-all ${
				pathname === '/' && 'bg-[#fef9f5]'
			}`}>
			<div className='container mx-auto '>
				<div className='flex justify-between items-center'>
					<Logo />
					<div className='flex items-center gap-x-2 md:gap-x-4'>
						{/* nav */}
						<Nav
							containerStyles='hidden xl:flex gap-x-8 items-center'
							linkStyles='relative hover:text-primary transition-all'
							underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
						/>
					</div>
					<div className='flex gap-x-2 md:gap-x-4'>
						<Socials
							containerStyles='flex mx-auto xl:mx-0'
							iconsStyles='text-primary dark:text-white/70 text-[2.5rem] hover:text-gray-400 dark:hover:text-primary transition-all'
						/>
						<ThemeToggler />
						<div className='xl:hidden'>
							{/* mobile nav */}
							<MobileNav />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
