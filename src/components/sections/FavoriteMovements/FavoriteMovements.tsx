'use client'

import preloaderStore from '@/store/preloaderStore'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Swiper, SwiperSlide } from 'swiper/react'
import Gallery from '../Gellary/Gallery'
import './FavoriteMovements.scss'
const FavoriteMovements = observer(() => {
	const { favoriteAtrs, loadFromLocalStorage, movements } = preloaderStore
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const initialize = async () => {
			try {
				setIsLoading(true)
				await loadFromLocalStorage()
			} catch (error) {
				console.error('Failed to load data:', error)
			} finally {
				setIsLoading(false)
			}
		}
		initialize()
	}, [loadFromLocalStorage])

	return (
		<div className='FavoriteMovements wrapper'>
			<div className='FavoriteMovements__title'>Movements</div>

			<Swiper
				slidesPerView='auto'
				spaceBetween={20}
				className='FavoriteMovements__swiper'
			>
				{isLoading
					? Array(5)
							.fill(0)
							.map((_, index) => (
								<SwiperSlide key={`skeleton-${index}`}>
									<Skeleton
										height={250}
										style={{ display: 'block', borderRadius: '8px' }}
									/>
									<Skeleton
										width={120}
										height={20}
										style={{ marginTop: '8px' }}
									/>
								</SwiperSlide>
							))
					: movements.map((item, index) => (
							<SwiperSlide key={index}>
								<div
									className='movement-card'
									style={{ backgroundImage: `url('${item.image}')` }}
								>
									<span>{item.name}</span>
								</div>
								<small>{item.year}</small>
							</SwiperSlide>
					  ))}
			</Swiper>
			<br />

			<div className='gallary-title'>Atrs</div>

			<Gallery favoriteArtworks={favoriteAtrs} />
		</div>
	)
})

export default FavoriteMovements
