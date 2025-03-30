'use client'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './SeeAlsoSwiper.scss'

const SeeAlsoSwiper = () => {
	return (
		<div className='SeeAlsoSwiper'>
			<div className='SeeAlsoSwiper__title'>
				<span>See also</span>
				<div>
					<button className='SeeAlsoSwiper-prev'>
						<svg
							width='45'
							height='16'
							viewBox='0 0 45 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M44 9C44.5523 9 45 8.55228 45 8C45 7.44772 44.5523 7 44 7L44 9ZM0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928929C7.68054 0.538405 7.04738 0.538405 6.65685 0.928929L0.292893 7.29289ZM44 7L1 7L1 9L44 9L44 7Z'
								fill='white'
							/>
						</svg>
					</button>
					<button className='SeeAlsoSwiper-next'>
						<svg
							width='45'
							height='16'
							viewBox='0 0 45 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 9C0.447715 9 4.82823e-08 8.55228 0 8C-4.82823e-08 7.44772 0.447715 7 1 7L1 9ZM44.7071 7.29289C45.0976 7.68341 45.0976 8.31658 44.7071 8.7071L38.3431 15.0711C37.9526 15.4616 37.3195 15.4616 36.9289 15.0711C36.5384 14.6805 36.5384 14.0474 36.9289 13.6569L42.5858 8L36.9289 2.34314C36.5384 1.95262 36.5384 1.31945 36.9289 0.928929C37.3195 0.538405 37.9526 0.538405 38.3431 0.928929L44.7071 7.29289ZM1 7L44 7L44 9L1 9L1 7Z'
								fill='white'
							/>
						</svg>
					</button>
				</div>
			</div>

			<Swiper
				slidesPerView='auto'
				spaceBetween={20}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				modules={[Autoplay, Navigation]}
				navigation={{
					prevEl: '.SeeAlsoSwiper-prev',
					nextEl: '.SeeAlsoSwiper-next',
				}}
				className='mySwiper'
			>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
			</Swiper>
		</div>
	)
}

export default SeeAlsoSwiper
