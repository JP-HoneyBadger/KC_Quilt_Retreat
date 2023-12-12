/** @format */

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { LogoPNG } from '@/assets';
import { LogoPNGWhite } from '@/assets';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function LogoButton() {
	const pageTheme = useTheme();

	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			{theme === 'dark' ? (
				<Link href='/'>
					<Image
						src={LogoPNGWhite}
						width={254}
						height={54}
						priority
						alt=''
					/>
				</Link>
			) : (
				<Link href='/'>
					<Image
						src={LogoPNG}
						width={254}
						height={54}
						priority
						alt=''
					/>
				</Link>
			)}
		</>
	);
}
