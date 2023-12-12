/** @format */
'use client';
import Image from 'next/image';
import { useState } from 'react';

// import images
import { images } from '@/lib/images';

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import 'swiper/css/effect-cube';

export default function Hero() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImageSrc, setModalImageSrc] = useState('');

	const handleImageClick = (src) => {
		setModalImageSrc(src);
		setIsModalOpen(true);
	};

	const handleModalClick = () => {
		setIsModalOpen(false);
		setModalImageSrc('');
	};

	return (
		<section className=' -z-10'>
			<div className='flex flex-1 w-full '>
				<Swiper
					loop={true}
					spaceBetween={30}
					centeredSlides={true}
					// set time interval
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					effect='fade'
					speed={1000}
					navigation={true}
					// pagination={{ clickable: true }}
					modules={[Navigation, Autoplay, EffectFade]}
					className='h-96 w-full rounded-lg '>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<div className='flex h-full w-full items-center justify-center cursor-pointer'>
								<Image
									src={image.src}
									alt={image.alt}
									className='block h-full w-full object-cover'
									onClick={() => handleImageClick(image.src)}
									loading='lazy'
								/>
								<div className='swiper-lazy-preloader'></div>
							</div>
						</SwiperSlide>
					))}
					{/* Full-screen modal */}
					{isModalOpen && (
						<div
							onClick={handleModalClick}
							style={{
								position: 'fixed',
								zIndex: 50,
								top: 120,
								left: 0,
								right: 0,
								bottom: 0,
								backgroundColor: 'rgba(0,0,0,0.7)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								cursor: 'pointer',
							}}>
							<Image
								src={modalImageSrc}
								alt='Modal Image'
								layout='fill'
								objectFit='contain'
							/>
						</div>
					)}
				</Swiper>
			</div>
		</section>
	);
}
