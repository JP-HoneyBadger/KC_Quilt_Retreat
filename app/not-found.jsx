/** @format */

import Link from 'next/link';

export const metadata = {
	title: 'kcquiltretreat.com | 404 Page Not Found',
	description: 'kcquiltretreat.com not found page',
};


export default function NotFound() {
	return (
		<main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
			<div className='text-center'>
				<p className='text-xl font-semibold text-indigo-600'>404</p>
				<h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-500 sm:text-5xl'>
					Page not found
				</h1>
				<p className='mt-6 text-base leading-7 text-gray-600'>
					Sorry, we couldn&apos;t find the page you&apos;re looking
					for.
				</p>
				<div className='mt-10 flex items-center justify-center gap-x-6 pb-5'>
					<Link
						href='/'
						className='rounded-md px-2 bg-indigo-500 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-3'>
						Go back home
					</Link>
					<Link
						href='/contact'
						className='text-sm font-semibold text-gray-900  hover:text-indigo-500 dark:text-gray-500 dark:hover:text-indigo-500'>
						Contact support <span aria-hidden='true'>&rarr;</span>
					</Link>
				</div>
			</div>
		</main>
	);
}
