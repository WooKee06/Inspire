'use client'

import Gallery from '@/components/sections/Gellary/Gallery'
import BackButton from '@/components/ui/BackButton/BackButton'
import preloaderStore from '@/store/preloaderStore'
import axios from 'axios'
import { observer } from 'mobx-react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Swiper, SwiperSlide } from 'swiper/react'
import './MovementIDHero.scss'

type artworksType = {
	artist: string
	description: string
	id: number
	image: string
	movement_id: number
	title: string
	year: number
}

type representativesType = {
	avatar: string
	id: number
	movement_id: number
	name: string
	quote: string
}

type movementInfoType = {
	year: number
	representatives: representativesType[]
	name: string
	image: string
	id: number
	history: string
	description: string
	artworks: artworksType[]
}

const MovementIDHero = observer(() => {
	const [movement, setMovement] = useState<movementInfoType | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	const params = useParams()
	const { addMovements, loadFromLocalStorage, isMovementFavorite } =
		preloaderStore

	const handleAddFavorite = () => {
		if (!movement) return
		addMovements(movement)
		isMovementFavorite(movement.id)
	}

	useEffect(() => {
		const fetchMovement = async () => {
			try {
				setIsLoading(true)
				const response = await axios.get<movementInfoType>(
					`/api/movements?id=${params.movementId}`
				)
				setMovement(response.data)
			} catch (err) {
				console.error('Error fetching movement:', err)
			} finally {
				setIsLoading(false)
			}
		}

		if (params.movementId) {
			fetchMovement()
		}

		loadFromLocalStorage()
	}, [params.movementId])

	if (isLoading) {
		return (
			<>
				<div className='MovementIDHero'>
					<div className='MovementIDHero-wrapper '>
						<BackButton />
						<div>
							<Skeleton height={500} />
							<div
								className='MovementIDHero__info'
								style={{ alignItems: 'stretch' }}
							>
								<Skeleton height={50} />
								<Skeleton height={20} count={12} />
								<Skeleton height={45} width={230} />
							</div>
						</div>
						<div
							className='history'
							style={{ margin: '0', alignItems: 'stretch' }}
						>
							<span>History</span>
							<Skeleton width={100} height={30} />
							<br />
							<Skeleton height={20} count={4} />

							<Skeleton height={20} count={2} />
						</div>
						<div className='representatives'>
							<span>
								Representatives of {<Skeleton width={200} height={30} />}
							</span>
							<ul>
								<Swiper
									spaceBetween={10}
									slidesPerView={6}
									freeMode={true}
									watchSlidesProgress={true}
									breakpoints={{
										320: { slidesPerView: 2 },
										480: { slidesPerView: 3 },
										768: { slidesPerView: 4 },
										1024: { slidesPerView: 5 },
										1280: { slidesPerView: 6 },
									}}
									className='thumbs-swiper'
								>
									{Array.from({ length: 2 }).map((item, index) => (
										<SwiperSlide key={index}>
											<li>
												<Skeleton width={80} height={80} circle={true} />
												<Skeleton width={120} height={20} />
											</li>
										</SwiperSlide>
									))}
								</Swiper>
							</ul>
							<div>
								<Swiper
									spaceBetween={10}
									slidesPerView={3}
									className='quotes-swiper'
									breakpoints={{
										320: { slidesPerView: 1 },
										480: { slidesPerView: 1 },
										768: { slidesPerView: 2 },
										1024: { slidesPerView: 3 },
										1280: { slidesPerView: 3 },
									}}
								>
									{Array.from({ length: 6 }).map((item, index) => (
										<SwiperSlide key={index}>
											<div>
												<Skeleton height={120} />
												<div style={{ width: '100%', alignItems: 'stretch' }}>
													<Skeleton width={200} height={25} />
													<Skeleton height={20} count={4} />
												</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}

	return (
		<div className='MovementIDHero'>
			<div className='MovementIDHero-wrapper '>
				<BackButton />
				<div>
					<div
						className='MovementIDHero__img'
						style={{ backgroundImage: `url('${movement?.image}')` }}
					></div>
					<div className='MovementIDHero__info'>
						<h1>{movement?.name} </h1>
						<p>{movement?.description}</p>
						<button
							onClick={handleAddFavorite}
							className={isMovementFavorite(movement.id) ? 'active' : ''}
						>
							{isMovementFavorite(movement.id)
								? 'Following'
								: 'Follow this Movement'}
						</button>
					</div>
				</div>
				<div className='history'>
					<span>History</span>
					<p>{movement?.history}</p>
				</div>
				<div className='representatives'>
					<span>Representatives of {movement?.name}</span>
					<ul>
						<Swiper
							spaceBetween={10}
							slidesPerView={6}
							freeMode={true}
							watchSlidesProgress={true}
							breakpoints={{
								320: { slidesPerView: 2 },
								480: { slidesPerView: 3 },
								768: { slidesPerView: 4 },
								1024: { slidesPerView: 5 },
								1280: { slidesPerView: 6 },
							}}
							className='thumbs-swiper'
						>
							{movement?.representatives.map((item, index) => (
								<SwiperSlide key={index}>
									<li>
										<div
											className='representative-img'
											style={{ backgroundImage: `url('${item.avatar}')` }}
										></div>
										<span>{item.name}</span>
									</li>
								</SwiperSlide>
							))}
						</Swiper>
					</ul>
					<div>
						<Swiper
							spaceBetween={10}
							slidesPerView={3}
							className='quotes-swiper'
							breakpoints={{
								320: { slidesPerView: 1 },
								480: { slidesPerView: 1 },
								768: { slidesPerView: 2 },
								1024: { slidesPerView: 3 },
								1280: { slidesPerView: 3 },
							}}
						>
							{movement?.representatives.map((item, index) => (
								<SwiperSlide key={index}>
									<div>
										<div
											style={{ backgroundImage: `url('${item.avatar}')` }}
										></div>
										<div>
											<span>{item.name}</span>
											<strong>{item.quote}</strong>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
				<div className='history'>
					<span>The influence of {movement?.name} </span>
					<p>
						The influence of Impressionism on art was significant and had an
						impact on the development of art and society. Here are some of the
						consequences: Shifting of traditional standards. Impressionism
						abandoned formal academic standards, emphasizing spontaneity and
						depicting light and color. This led to criticism of the strict rules
						of art academies and encouraged artists to explore new techniques
						and perspectives. 1 . The democratization of art. Focusing on
						everyday scenes and ordinary people, rather than great historical or
						mythological themes, has made art more accessible to the public. 1
						Influence on contemporary art. Impressionism laid the foundations
						for various modern art movements, including Post-Impressionism,
						Fauvism, and Expressionism. His emphasis on personal expression and
						experimentation with form and color inspired future artists to push
						the boundaries of artistic expression. 1 . Influence on popular
						culture. The focus on capturing fleeting moments and everyday life
						has been reflected in broader cultural trends, including the rise of
						photography and a growing interest in depicting the realities of
						modern life. 1 Influence on the formation of cultural identity.
						Impressionism influenced the formation of cultural identity,
						especially in France, where it was closely linked to the culture of
						Paris. The movement became a symbol of French artistic innovation
						and helped establish Paris as the center of the art world at the end
						of the 19th century.1
					</p>
				</div>
				<div className='MovementIDHero__gallery'>
					<span>
						Masterpieces in {movement?.name} ({movement?.artworks.length})
					</span>

					<Gallery movementArtworks={movement?.artworks || []} />
				</div>
			</div>
		</div>
	)
})

export default MovementIDHero
