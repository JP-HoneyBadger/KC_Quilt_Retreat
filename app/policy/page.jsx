/** @format */
'use client';
import Download from '@/components/download/Download';
import PdfViewer from '@/components/download/PdfViewer';

export default function page() {
	return (
		<div className='h-100vh'>
			<div className='flex flex-col justify-center items-center'>
				<h1 className=' text-3xl font-medium pb-10'>Policy</h1>
			</div>
			<div className='flex flex-col-reverse md:flex-row justify-evenly items-center h-100vh gap-6'>
				<div className='flex flex-col justify-center items-center mb-8 md:ms-20 lg:ms-40'>
					<Download />
				</div>
				<div className='w-full h-full md:w-[500px] md:mb-4 md:ms-20 flex justify-center items-center'>
					<PdfViewer />
				</div>
			</div>
		</div>
	);
}
