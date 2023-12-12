/** @format */

'use client';

import { toast } from 'react-toastify';
import { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import GoogleReCaptchaWidget from './reCAPTCHAwidget';
import Link from 'next/link';
const GpopWidget = () => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		reset,
		register,
		formState: { errors, isSubmitSuccessful, isSubmitting },
	} = useForm({
		mode: 'onTouched',
	});

	async function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);

		const data = {
			name: e.target.name.value,
			email: e.target.email.value,
			message: e.target.message.value,
		};
		console.log('Widget Input ', data);

		try {
			await fetch('/api/widget', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			// reset the form
			e.target.name.value = '';
			e.target.email.value = '';
			e.target.message.value = '';

			toast.success(
				'Message sent successfully! Someone will be in touch soon.'
                
			);
			setIsLoading(false);
		} catch (error) {
			toast.error('Error sending message, please try again.');
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className='fixed z-40 flex items-center justify-center transition duration-300 bg-primary rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-secondary focus:bg-primary ease'>
							<span className='sr-only'>
								Open Contact form Widget
							</span>
							<Transition
								show={!open}
								enter='transition duration-200 transform ease'
								enterFrom='opacity-0 -rotate-45 scale-75'
								leave='transition duration-100 transform ease'
								leaveTo='opacity-0 -rotate-45'
								className='absolute w-6 h-6 text-white'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path>
								</svg>{' '}
							</Transition>

							<Transition
								show={open}
								enter='transition duration-200 transform ease'
								enterFrom='opacity-0 rotate-45 scale-75'
								leave='transition duration-100 transform ease'
								leaveTo='opacity-0 rotate-45'
								className='absolute w-6 h-6 text-white'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<line x1='18' y1='6' x2='6' y2='18'></line>
									<line x1='6' y1='6' x2='18' y2='18'></line>
								</svg>{' '}
							</Transition>
						</Disclosure.Button>
						<Transition
							className='fixed  z-50 bottom-[100px] top-0 right-0  left-0 sm:top-auto sm:right-5 sm:left-auto'
							enter='transition duration-200 transform ease'
							enterFrom='opacity-0 translate-y-5'
							leave='transition duration-200 transform ease'
							leaveTo='opacity-0 translate-y-5'>
							<Disclosure.Panel className=' flex flex-col  overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white/40 shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]'>
								<div className='flex flex-col items-center justify-center h-32 p-5 bg-primary'>
									<h3 className='text-lg text-gray-300 antialiased font-medium'>
										How can we help?
									</h3>
									<p className='text-gray-300 opacity-70 antialiased font-medium'>
										We usually respond in a few hours
									</p>
								</div>
								<div className='flex-grow h-full p-6 overflow-auto bg-gray-50 '>
									<form onSubmit={handleSubmit} noValidate>
										<div className='mb-4'>
											<label
												htmlFor='full_name'
												className='block mb-2 text-sm text-gray-600 dark:text-gray-400 antialiased dark:font-medium'>
												Full Name
											</label>
											<input
												type='text'
												id='full_name'
												placeholder='John Doe'
												{...register('name', {
													required:
														'Full name is required',
													maxLength: 80,
												})}
												className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
													errors.name
														? 'border-red-600 focus:border-red-600 ring-red-100'
														: 'border-gray-300 focus:border-indigo-600 ring-indigo-100'
												}`}
											/>
											{errors.name && (
												<div className='mt-1 text-sm text-red-400 invalid-feedback'>
													{errors.name.message}
												</div>
											)}
										</div>

										<div className='mb-4'>
											<label
												htmlFor='email'
												className='block mb-2 text-sm text-gray-600 dark:text-gray-400 antialiased dark:font-medium'>
												Email Address
											</label>
											<input
												type='email'
												id='email'
												{...register('email', {
													required:
														'Enter your email',
													pattern: {
														value: /^\S+@\S+$/i,
														message:
															'Please enter a valid email',
													},
												})}
												placeholder='you@company.com'
												className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
													errors.email
														? 'border-red-600 focus:border-red-600 ring-red-100'
														: 'border-gray-300 focus:border-indigo-600 ring-indigo-100'
												}`}
											/>

											{errors.email && (
												<div className='mt-1 text-sm text-red-400 invalid-feedback'>
													{errors.email.message}
												</div>
											)}
										</div>

										<div className='mb-4'>
											<label
												htmlFor='message'
												className='block mb-2 text-sm text-gray-600 dark:text-gray-400 antialiased dark:font-medium'>
												Your Message
											</label>

											<textarea
												rows='4'
												id='message'
												{...register('message', {
													required:
														'Enter your Message',
												})}
												placeholder='Your Message'
												className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring   ${
													errors.message
														? 'border-red-600 focus:border-red-600 ring-red-100'
														: 'border-gray-300 focus:border-indigo-600 ring-indigo-100'
												}`}
												required></textarea>
											{errors.message && (
												<div className='mt-1 text-sm text-red-400 invalid-feedback'>
													{errors.message.message}
												</div>
											)}
										</div>
										<div className='mb-3'>
                                        
											{/* <GoogleReCaptchaWidget /> */}
										</div>
										<p
											className='text-xs text-center text-gray-400'
											id='result'>
											<span>
												Powered by{' '}
												<Link
													href='https://honeybadgerits.com'
													className='text-gray-600'
													target='_blank'
													rel='noopener noreferrer'>
													HoneyBadger IT Solutions
												</Link>
											</span>
										</p>
									</form>
								</div>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
		</div>
	);
};

export default GpopWidget;
