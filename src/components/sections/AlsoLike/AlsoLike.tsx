'use client'

import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './AlsoLike.scss'

const AlsoLike = React.memo(() => {
	return (
		<div className='also-like'>
			<div className='also-like__info'>
				<h2>You may also like</h2>
				<p>
					This page contains collections of the largest art museums in the
					world. We are constantly working on the collection and the amount of
					information about the location of the masterpieces is constantly
					growing. Come back to see the updates.
				</p>
			</div>
			<div className='also-like__swiper'>
				<Swiper
					slidesPerView='auto'
					spaceBetween={20}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					speed={1000}
					modules={[Autoplay]}
					className='mySwiper'
				>
					<SwiperSlide>
						<div className='card'>
							<span></span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='card'>
							<span></span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='card'>
							<span></span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='card'>
							<span></span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='card'>
							<span></span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='card'>
							<span></span>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
})

export default AlsoLike
