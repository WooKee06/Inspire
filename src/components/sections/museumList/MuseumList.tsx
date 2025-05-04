'use client'

import axios from 'axios'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Swiper, SwiperSlide } from 'swiper/react'
import './museumList.scss'

interface artworksType {
	title: string
	image: string
	artist: string
	year: number
}

interface museumsType {
	id: number
	name: string
	preview_image: string
	full_description: string
	short_description: string
	website_link: string
	artworks: artworksType[]
}

function MuseumList() {
	const [museums, setMuseums] = useState<museumsType[]>([])
	const [loading, setLoading] = useState(false)
	const museumRefs = useRef<(HTMLLIElement | null)[]>([])

	useEffect(() => {
		const FetchData = async () => {
			try {
				setLoading(true)
				const response = await axios.get('/api/museums')
				console.log(response.data)
				setMuseums(response.data)
			} catch (error) {
				console.log(error, 'error FetchDataMuseums')
			} finally {
				setLoading(false)
			}
		}

		FetchData()
	}, [])

	const scrollToMuseum = (index: number) => {
		museumRefs.current[index]?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		})
	}

	if (loading || !museums) {
		return (
			<div className=' wrapper museum-list'>
				<div className='museum-list__best'>
					<span
						style={{
							display: 'flex',
							alignItems: 'stretch',
							flexDirection: 'column',
						}}
					>
						<Skeleton height={40} />
					</span>
					<ul>
						{Array.from({ length: 10 }).map((_, index) => (
							<Skeleton height={60} key={index} />
						))}
					</ul>
				</div>
				<div className='museum-list__museums'>
					<Skeleton height={60} width={320} />
					<ul>
						{Array.from({ length: 10 }).map((_, index) => (
							<li key={index} className='museum-item'>
								<div>
									<div className='museum-item__info'>
										<div>
											<span>
												<Skeleton height={80} width={60} />
											</span>
											<div style={{ alignItems: 'stretch' }}>
												<small>
													<Skeleton height={20} width={250} />
												</small>
												<h2
													style={{
														alignItems: 'stretch',
														flexDirection: 'column',
													}}
												>
													<Skeleton height={40} />
												</h2>
											</div>
										</div>
										<p>
											<Skeleton count={8} />
										</p>

										<div className='btns'>
											<Skeleton height={45} width={320} />
										</div>
									</div>
									<Skeleton height={370} />
								</div>
								<div className='museum-item__swiper'>
									<Swiper
										spaceBetween={20}
										slidesPerView='auto'
										grabCursor={true}
										autoplay={{ delay: 3000, disableOnInteraction: false }}
									>
										{Array.from({ length: 10 }).map((_, index) => (
											<SwiperSlide key={index}>
												<Skeleton height={220} />
											</SwiperSlide>
										))}
									</Swiper>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}

	return (
		<div className=' wrapper museum-list'>
			<div className='museum-list__best'>
				<span>{museums.length} Best Museums in the World</span>
				<ul>
					{museums.map((item, index) => (
						<li key={index} onClick={() => scrollToMuseum(index)}>
							{item.id}. {item.name}
						</li>
					))}
				</ul>
			</div>
			<div className='museum-list__museums'>
				<span>Museums</span>
				<ul>
					{museums.map((museum, index) => (
						<li
							key={index}
							className='museum-item'
							ref={el => {
								museumRefs.current[index] = el
							}}
						>
							<div>
								<div className='museum-item__info'>
									<div>
										<span>{museum.id}</span>
										<div>
											<small>{museum.short_description.slice(0, 40)}...</small>
											<h2>{museum.name}</h2>
										</div>
									</div>
									<p>{museum.full_description}</p>

									<div className='btns'>
										<Link href={museum?.website_link}>
											<button>Visit the museum </button>
										</Link>
									</div>
								</div>
								<div
									className='museum-item__img'
									style={{ backgroundImage: `url('${museum.preview_image}')` }}
								></div>
							</div>
							<div className='museum-item__swiper'>
								<Swiper
									spaceBetween={20}
									slidesPerView='auto'
									grabCursor={true}
									autoplay={{ delay: 3000, disableOnInteraction: false }}
								>
									{museum.artworks.map((item, index) => (
										<SwiperSlide
											key={index}
											style={{ backgroundImage: `url('${item.image}')` }}
										></SwiperSlide>
									))}
								</Swiper>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default MuseumList
