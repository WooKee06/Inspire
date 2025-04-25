'use client'

import axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Explore.scss'

type artworks = {
	artist: string
	description: string
	id: number
	image: string
	movement_id: number
	movement_image: string
	movement_name: string
	title: string
	year: number
}

function Explore() {
	const [data, setData] = useState<artworks[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('/api/artworks')
				setData(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

	const middle = Math.ceil(data.length / 2)
	const firstHalf = data.slice(0, middle)
	const secondHalf = data.slice(middle)

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
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 10,
						},

						480: {
							slidesPerView: 2,
							spaceBetween: 15,
						},

						768: {
							slidesPerView: 3,
							spaceBetween: 20,
						},

						1024: {
							slidesPerView: 4,
							spaceBetween: 25,
						},

						1200: {
							slidesPerView: 5,
							spaceBetween: 30,
						},
					}}
					className='mySwiper1'
				>
					{firstHalf.map((art, index) => (
						<SwiperSlide
							style={{ backgroundImage: `url('${art.image}')` }}
							key={index}
						>
							<span>{art.title}</span>
						</SwiperSlide>
					))}
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
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 10,
						},

						480: {
							slidesPerView: 2,
							spaceBetween: 15,
						},

						768: {
							slidesPerView: 3,
							spaceBetween: 20,
						},

						1024: {
							slidesPerView: 4,
							spaceBetween: 25,
						},

						1200: {
							slidesPerView: 5,
							spaceBetween: 30,
						},
					}}
					className='mySwiper2'
				>
					{secondHalf.map((art, index) => (
						<SwiperSlide
							key={index}
							style={{ backgroundImage: `url('${art.image}')` }}
						>
							<span>{art.title}</span>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</motion.div>
	)
}

export default Explore
