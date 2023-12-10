/** @format */

import Link from 'next/link';
import Image from 'next/image';
import { LogoEm } from '@/assets';

const Logo2 = () => {
	return (
		<Link href='/'>
			<Image src={LogoEm} width={100} height={100} priority alt='' />
		</Link>
	);
};

export default Logo2;
