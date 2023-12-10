/** @format */

'use client';

import { Quilt } from '@/assets';
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GoogleReCaptcha from '@/components/messages/reCAPTCHA';
import Container from '@/components/common/container';

// export const metadata = {
// 	title: 'HoneyBadger IT Solutions | Contact',
// 	description: 'HoneyBadger IT Solutions contact page',
// };

export default function Page() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	async function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);

		const data = {
			first_name: e.target.first_name.value,
			last_name: e.target.last_name.value,
			email: e.target.email.value,
			phone: e.target.phone.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};
		console.log('Contact Input ', data);

		try {
			await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			// reset the form
			e.target.first_name.value = '';
			e.target.last_name.value = '';
			e.target.email.value = '';
			e.target.phone.value = '';
			e.target.subject.value = '';
			e.target.message.value = '';

			toast.success(
				'Message sent successfully! Someone will be in touch soon.'
			);
			router.push('/');
			setIsLoading(false);
		} catch (error) {
			toast.error('Error sending message, please try again.');
		} finally {
			setIsLoading(false);
		}
	}
	return (
		<div className='flex flex-col sm:flex-row pt-10 justify-evenly items-center'>
			<Container>
				<div className=''>
					<div className='bg-cover  max-w-xl mx-3 bg-center rounded-lg flex flex-1 justify-center items-center pb-2 lg:mx-auto'>
						<Image
							src={Quilt}
							alt='Quilt'
							width='1200'
							height='720'
							className='object-cover rounded-xl shadow-2xl ring-1 ring-gray-800 w-[390] -mx-1'
						/>
					</div>
				</div>
			</Container>
			<Container className=''>
				<div className='mt-10 flex flex-1 justify-start items-center max-w-[512px]'>
					<div className='mx-3'>
						{/* text */}
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='text-2xl leading-tight lg:text-4xl lg:leading-snug mb-4 font-semibold text-center'>
							Let&apos;s <span className=''>connect.</span>
						</motion.h2>
						{/* form */}
						<motion.form
							onSubmit={handleSubmit}
							variants={fadeIn('up', 0.4)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='mx-auto mt-16 max-w-lg sm:mt-20 '>
							{/* input group */}
							<div className='grid grid-cols-1 lg:grid-cols-2 '>
								<div className='mx-3'>
									<label
										htmlFor='first-name'
										className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500'>
										First name
									</label>
									<div className='mt-2.5'>
										<input
											id='first_name'
											required
											type='text'
											placeholder=''
											className='input-text capitalize block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
								<div className='mx-3 '>
									<label
										htmlFor='last-name'
										className='block text-sm font-semibold  leading-6 text-gray-900 dark:text-gray-500'>
										Last name
									</label>
									<div className='mt-2.5'>
										<input
											id='last_name'
											required
											type='text'
											placeholder=''
											className='input-text capitalize block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
							</div>
							<div className='grid grid-cols-1 lg:grid-cols-2'>
								<div className='mx-3'>
									<label
										htmlFor='email'
										className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500'>
										Email
									</label>
									<div className='mt-2.5'>
										<input
											id='email'
											required
											type='email'
											placeholder=''
											className='input-email lowercase block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='mx-3'>
									<label
										htmlFor='phone'
										className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500'>
										Phone number
									</label>
									<div className='mt-2.5'>
										<input
											id='phone'
											type='tel'
											placeholder=''
											className='input-phone block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
							</div>
							<div className='mx-3 '>
								<label
									htmlFor='subject'
									className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500'>
									Subject
								</label>
								<div className='mt-2.5'>
									<input
										id='subject'
										required
										type='text'
										placeholder=''
										className='input-text  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div className='mx-3 '>
								<label
									htmlFor='message'
									className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500'>
									Message
								</label>
								<div className='mt-2.5'>
									<textarea
										id='message'
										required
										type='text'
										placeholder=''
										className='textarea input-text block w-full h-[180px] p-3.5 rounded-lg resize-none border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div className='mx-3 mt-6 mb-4 pt-4'>
								{/* <GoogleReCaptcha /> */}
							</div>
						</motion.form>
					</div>
				</div>
			</Container>
		</div>
	);
}
