/** @format */

import { ImageResponse } from 'next/og';

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'KC Quilt Retreat';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

// Image generation
export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);

		const hasTitle = searchParams.has('title');
		const title = hasTitle
			? searchParams.get('title')?.slice(0, 100)
			: 'KC Quilt Retreat';

		const fontData = await fetch(
			new URL(
				'../../../assets/fonts/Montserrat-SemiBold.ttf',
				import.meta.url
			)
		).then((res) => res.arrayBuffer());

		const imageData = await fetch(
			new URL('../../../assets/Logos/Horizontal.jpg', import.meta.url)
		).then((res) => res.arrayBuffer());

		return new ImageResponse(
			(
				<div tw='flex flex-col w-full h-full items-center justify-center'>
					<div tw='bg-white flex w-full'>
						<div tw='relative flex flex-col md:flex-row w-full h-full md:items-center justify-between'>
							<img
								width={1200}
								height={630}
								src={imageData}
								alt='KC Quilt Retreat'
							/>
						</div>
					</div>
				</div>
			),
			{
				// emoji: 'openmoji',
				fonts: [
					{
						name: 'Montserrat',
						data: fontData,
						style: 'normal',
					},
				],
			}
		);
	} catch (error) {
		return new Response('Failed to generate Twitter image.', {
			status: 500,
		});
	}
}
