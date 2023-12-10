/** @format */

import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Tailwind,
	Text,
} from '@react-email/components';

export const Email = ({
	first_name,
	last_name,
	email,
	phone,
	subject,
	message,
}) => {
	return (
		<Html>
			<Head />
			<Body className='mx-auto my-auto bg-grey-800 font-sora'>
				<Container className='container my-[40px] mx-[465px] rounded boarder'>
					<h1 className='h1 mx-0 my-[30px] p-1 text-center'>
						You got a message from your website!
					</h1>
					<Text className='text-[14px] leading-[24px] text-white'>
						Hello, HoneyBadger IT Solutions!
					</Text>
					<Text className='text-[14px] leading-[24px] text-white'>
						You got an email from{' '}
						<strong>
							{first_name} {last_name}
						</strong>
						. {first_name}&apos;s email is {email}, and their phone
						number is {phone}.{' '}
					</Text>
					<Text className='text-[14px] leading-[24px] text-white'>
						Subject: {subject}
					</Text>
					<Text className='text-[14px] leading-[24px] text-white'>
						Message: {message}
					</Text>
				</Container>
			</Body>
		</Html>
	);
};
