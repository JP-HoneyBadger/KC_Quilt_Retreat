/** @format */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from '@headlessui/react';

const Links = [
	{ path: '/', name: 'home' },
	{ path: '/booking', name: 'booking' },
	{ path: '/policy', name: 'policy' },
	{ path: '/faq', name: 'faq' },
	{ path: '/contact', name: 'contact' },
	{ path: '/about', name: 'about' },
];

// const dropdownLinks = [
// 	// { href: '/account-settings', label: 'Account settings' },
// 	{ href: '/booking-policy', label: 'Booking & Policy' },
// 	{ href: '/meet-the-owners', label: 'Meet the Owners' },
// ];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
	const pathname = usePathname();
	return (
		<nav className={`${containerStyles}`}>
			{Links.map((link, index) => {
				// if (link.name === 'about') {
				// 	return (
				// 		<Menu
				// 			as='div'
				// 			className='relative inline-block text-left'
				// 			key={index}>
				// 			<div>
				// 				<Menu.Button
				// 					className={`capitalize ${linkStyles}`}>
				// 					{link.name}
				// 				</Menu.Button>
				// 			</div>
				// 			<Menu.Items className="absolute  w-56 mt-2 origin-top-right bg-white dark:bg-gray-500 divide-y divide-gray-200 dark:divide-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                //                 {dropdownLinks.map((dropdownLink, dropdownIndex) => (
                //                     <Menu.Item key={dropdownIndex}>
                //                         {({ active }) => (
                //                             <Link href={dropdownLink.href}
                //                                 className={`${
                //                                     active ? 'bg-gray-100 dark:bg-gray-600' : ''
                //                                 } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                //                                     {dropdownLink.label}
                                                
                //                             </Link>
                //                         )}
                //                     </Menu.Item>
                //                 ))}
                //             </Menu.Items>
				// 		</Menu>
				// 	);
				// } else {
					return (
						<Link
							href={link.path}
							key={index}
							className={`capitalize ${linkStyles}`}>
							{link.path === pathname && (
								<motion.span
									initial={{ y: '-100%' }}
									animate={{ y: 0 }}
									transition={{ type: 'tween' }}
									layoutId='underline'
									className={`${underlineStyles}`}
								/>
							)}
							{link.name}
						</Link>
					);
			// 	}

                            })}
		</nav>
	);
};

export default Nav;
