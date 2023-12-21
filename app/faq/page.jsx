/** @format */

import Faq from "@/components/Faq";
import PageBreak from "@/components/PageBreak";

export default function page() {
	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<h1 className=' text-3xl font-medium'>
					FAQ
				</h1>	<h2 className=' text-xl font-medium'>
					Coming Soon!
				</h2>
				<div className="w-full pt-2"><PageBreak/></div>
				
				<Faq/>

			</div>
			<div className='h-[60vh]'></div>
		</>
	);
}
