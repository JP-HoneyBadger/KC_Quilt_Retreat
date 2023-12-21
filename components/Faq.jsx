/** @format */

'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { Button } from './ui/button';

const faqData = [
	{
		question: 'Present question here.',
		answer: 'Put the answer here.',
	},
	{
		question: 'Present question here.',
		answer: 'Put the answer here.',
	},
	{
		question: 'Present question here.',
		answer: 'Put the answer here.',
	},
	{
		question: 'Present question here.',
		answer: 'Put the answer here.',
	},
	{
		question: 'Present question here.',
		answer: 'Put the answer here.',
	},
];

export default function Faq() {
	return (
		<div className='flex flex-1 justify-center items-center pt-8'>
			<div className='w-full max-w-2xl p-2 mx-auto rounded-2xl'>
				{faqData.map((item, index) => (
					<div key={item.question} className='mb-5'>
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className='flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-muted hover:bg-muted-foreground hover:text-gray-200 dark:hover:text-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200'>
										<span>{item.question}</span>
										<ChevronUpIcon
											className={`${
												open
													? 'transform rotate-180'
													: ''
											} w-5 h-5 text-primary`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className='px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300'>
										{item.answer}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</div>
	);
}
