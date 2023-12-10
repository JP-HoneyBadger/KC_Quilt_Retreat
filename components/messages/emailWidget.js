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

export const EmailWidget = ({
	name,
	email,
	message,
}) => {
	return (
		<Html>
			<Head />
			<Body className='mx-auto my-auto bg-grey-800 font-sora'>
				<Container className='container my-[40px] mx-[465px] rounded boarder'>
					<h1 className='h1 mx-0 my-[30px] p-1 text-center'>
						You got a Widget message from your website!
					</h1>
					<Text className='text-[14px] leading-[24px] text-white'>
						Hello, HoneyBadger IT Solutions!
					</Text>
					<Text className='text-[14px] leading-[24px] text-white'>
						You got an Widget message from{' '}
						<strong>
							{name} 
						</strong>
						. {name}&apos;s email is {email}.
					</Text>
					<Text className='text-[14px] leading-[24px] text-white'>
						Message: {message}
					</Text>
				</Container>
			</Body>
		</Html>
	);
};
