/** @format */

import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import GpopWidget from '@/components/messages/GpopWidget';

const mont = Montserrat({ subsets: ['latin'] });

export const viewport = 'width=device-width; initial-scale=1.0';

export const metadata = {
	title: 'KC Quilt Retreat',
	description:
		"Kansas City's newest premier Quilting, Crafting, and Scrapbooking retreat center with overnight accommodations for 8",
	keywords:
		"Kansas City's newest premier Quilting, Crafting, and Scrapbooking retreat center with overnight accommodations for 8",

	publisher: 'Joe Plankinton dba HoneyBadger IT Solutions',
	openGraph: {
		title: 'KC Quilt Retreat',
		description:
			"Kansas City's newest premier Quilting, Crafting, and Scrapbooking retreat center with overnight accommodations for 8",
		url: 'https://kcquiltretreat.honeybadgerits.com/',
		site_name:
			"HoneyBager IT Solutions - Kansas City's newest premier Quilting, Crafting, and Scrapbooking retreat center with overnight accommodations for 8",
		locale: 'en_US',
		type: 'website',
		images: [
			{
				secure_url: 'https://kcquiltretreat.honeybadgerits.com/api/og',
				url: 'https://kcquiltretreat.honeybadgerits.com/api/og',
				width: 1200,
				height: 630,
				alt: "KC Quilt Retreat - Kansas City's newest premier Quilting, Crafting, and Scrapbooking retreat center with overnight accommodations for 8",
			},
		],
	},
	twitter: {
		title: 'KC Quilt Retreat',
		description:
			"Kansas City's newest premier Quilting, Crafting, and Scrapbooking retreat center with overnight accommodations for 8",
		url: 'https://kcquiltretreat.honeybadgerits.com/',
		site_name:
			"HoneyBager IT Solutions - Kansas City's newest premier Quilting, Crafting, and Scrapbooking retreat center with overnight accommodations for 8",
		images: [
			{
				secure_url:
					'https://kcquiltretreat.honeybadgerits.com/api/twitter',
				url: 'https://kcquiltretreat.honeybadgerits.com/api/twitter',
				width: 1200,
				height: 630,
				alt: "KC Quilt Retreat - Kansas City's newest premier Quilting, Crafting, and Scrapbooking retreat center with overnight accommodations for 8",
			},
		],
	},
	sitemap: 'https://kcquiltretreat.honeybadgerits.com/sitemap.xml',
	robots: 'https://kcquiltretreat.honeybadgerits.com/robots.txt',
	charset: 'utf-8',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicons/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicons/favicon-16x16.png'
				/>
				<link rel='manifest' href='/favicons/site.webmanifest' />
				<link
					rel='mask-icon'
					href='/favicons/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff'></meta>
			</head>
			<body className={mont.className}>
				<ThemeProvider attribute='class' defaultTheme='light'>
					<Header />
					<main>{children}</main>

					<GpopWidget />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
