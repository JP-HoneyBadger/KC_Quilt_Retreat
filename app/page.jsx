/** @format */

import HeroSlider from '@/components/HeroSlider';
import HeroSection from '@/components/HeroSection';


export default function Home() {
	return (
		<>
			<HeroSlider className='z-0'/>
			<HeroSection/>
			<div className='h-[250px]'></div>
		</>
	);
}
