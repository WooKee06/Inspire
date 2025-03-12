'use client'

import { motion } from 'framer-motion'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Explore.scss'

export default function Explore() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.2 }}
			viewport={{ once: true, amount: 0.2 }}
			className='explore'
		>
			<h2>Explore</h2>
			<div>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					slidesPerView={5}
					autoplay={{
						delay: 1,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					speed={2000}
					loop={true}
					pagination={{
						clickable: true,
					}}
					allowTouchMove={false}
					modules={[Autoplay]}
					className='mySwiper1'
				>
					<SwiperSlide>
						<span>Most popular art</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Renaissance masterpieces</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Art Nouveau</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Art Nouveau</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Most popular art</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Renaissance masterpieces</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Art Nouveau</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Art Nouveau</span>
					</SwiperSlide>
				</Swiper>
			</div>
			<div>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					slidesPerView={5}
					autoplay={{
						delay: 1,
						disableOnInteraction: false,
						reverseDirection: true,
						pauseOnMouseEnter: true,
					}}
					speed={2000}
					loop={true}
					pagination={{
						clickable: true,
					}}
					allowTouchMove={false}
					modules={[Autoplay]}
					className='mySwiper2'
				>
					<SwiperSlide>
						<span>Most popular art</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Renaissance masterpieces</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Art Nouveau</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Art Nouveau</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Most popular art</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Renaissance masterpieces</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Art Nouveau</span>
					</SwiperSlide>
					<SwiperSlide>
						<span>Art Nouveau</span>
					</SwiperSlide>
				</Swiper>
			</div>
		</motion.div>
	)
}
