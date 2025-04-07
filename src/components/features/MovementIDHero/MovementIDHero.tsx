'use client'

import Gallery from '@/components/sections/Gellary/Gallery'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
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

const MovementIDHero = () => {
	const [movement, setMovement] = useState<movementInfoType | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const params = useParams()

	useEffect(() => {
		const fetchMovement = async () => {
			try {
				setIsLoading(true)
				const response = await axios.get<movementInfoType>(
					`/api/movements?id=${params.movementId}`
				)
				setMovement(response.data)
				console.log(response.data)
			} catch (err) {
				console.error('Error fetching movement:', err)
				setError('Failed to load movement data')
			} finally {
				setIsLoading(false)
			}
		}

		if (params.movementId) {
			fetchMovement()
		}
	}, [params.movementId])

	const handleBack = () => {
		history.back()
	}
	return (
		<div className='MovementIDHero'>
			<div className='MovementIDHero-wrapper '>
				<span onClick={handleBack}>
					<svg
						width='33'
						height='8'
						viewBox='0 0 33 8'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0.646446 3.64644C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976308 4.7308 0.659726 4.53553 0.464464C4.34027 0.269201 4.02369 0.269201 3.82843 0.464464L0.646446 3.64644ZM33 3.5L1 3.5L1 4.5L33 4.5L33 3.5Z'
							fill='white'
						/>
					</svg>
					Back
				</span>
				<div>
					<div
						className='MovementIDHero__img'
						style={{ backgroundImage: `url('${movement?.image}')` }}
					></div>
					<div className='MovementIDHero__info'>
						<h1>{movement?.name} </h1>
						<p>{movement?.description}</p>
						<button>Follow this Movement</button>
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
				<div className='Gallery'>
					<span>
						Masterpieces in {movement?.name} ({movement?.artworks.length})
					</span>
					<div className='Gallery-fillter'>
						<div className='input'>
							<input type='text' placeholder='Search art...' />
							<svg
								width='24'
								height='25'
								viewBox='0 0 24 25'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M11.25 5.75C11.0511 5.75 10.8603 5.82902 10.7197 5.96967C10.579 6.11032 10.5 6.30109 10.5 6.5C10.5 6.69891 10.579 6.88968 10.7197 7.03033C10.8603 7.17098 11.0511 7.25 11.25 7.25C12.5098 7.25 13.718 7.75045 14.6088 8.64124C15.4996 9.53204 16 10.7402 16 12C16 12.1989 16.079 12.3897 16.2197 12.5303C16.3603 12.671 16.5511 12.75 16.75 12.75C16.9489 12.75 17.1397 12.671 17.2803 12.5303C17.421 12.3897 17.5 12.1989 17.5 12C17.5 11.1792 17.3383 10.3663 17.0242 9.608C16.71 8.84965 16.2495 8.16061 15.6691 7.58023C15.0886 6.99985 14.3995 6.5395 13.6411 6.22547C12.8827 5.91143 12.0698 5.74987 11.249 5.75'
									fill='white'
									fillOpacity='0.41'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M2 11.999C2 6.89 6.142 2.75 11.25 2.75C16.358 2.75 20.5 6.89 20.5 11.998C20.5042 14.1934 19.7232 16.318 18.298 17.988L21.779 21.468C21.8507 21.5372 21.9078 21.6199 21.9472 21.7114C21.9865 21.8029 22.0073 21.9013 22.0082 22.0008C22.0091 22.1004 21.9902 22.1992 21.9525 22.2914C21.9148 22.3836 21.8592 22.4673 21.7888 22.5378C21.7184 22.6082 21.6347 22.664 21.5425 22.7017C21.4504 22.7395 21.3516 22.7585 21.2521 22.7577C21.1525 22.7569 21.054 22.7362 20.9625 22.697C20.871 22.6577 20.7882 22.6006 20.719 22.529L17.237 19.048C15.5672 20.4711 13.4439 21.2506 11.25 21.246C6.142 21.246 2 17.107 2 11.999ZM11.25 4.25C10.222 4.23348 9.20108 4.42169 8.24657 4.80365C7.29207 5.18561 6.42312 5.75369 5.69033 6.47479C4.95755 7.1959 4.37558 8.05561 3.97834 9.00386C3.58109 9.9521 3.37651 10.9699 3.37651 11.998C3.37651 13.0261 3.58109 14.0439 3.97834 14.9921C4.37558 15.9404 4.95755 16.8001 5.69033 17.5212C6.42312 18.2423 7.29207 18.8104 8.24657 19.1924C9.20108 19.5743 10.222 19.7625 11.25 19.746C12.278 19.7625 13.2989 19.5743 14.2534 19.1924C15.2079 18.8104 16.0769 18.2423 16.8097 17.5212C17.5425 16.8001 18.1244 15.9404 18.5217 14.9921C18.9189 14.0439 19.1235 13.0261 19.1235 11.998C19.1235 10.9699 18.9189 9.9521 18.5217 9.00386C18.1244 8.05561 17.5425 7.1959 16.8097 6.47479C16.0769 5.75369 15.2079 5.18561 14.2534 4.80365C13.2989 4.42169 12.278 4.23348 11.25 4.25Z'
									fill='white'
									fillOpacity='0.41'
								/>
							</svg>
						</div>
						<hr />
						<div className='dropdawn'>
							<div>
								<span>Artist</span>
								<svg
									width='15'
									height='15'
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M3 6L7.5 10L12 6'
										stroke='white'
										strokeOpacity='0.59'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
						</div>
						<hr />

						<div className='dropdawn'>
							<div>
								<span>Sort By</span>
								<svg
									width='15'
									height='15'
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6.25 8.75H1.25M5 6.25H1.25M3.75 3.75H1.25M7.5 11.25H1.25M11.875 12.5V2.5M11.875 12.5L13.75 10.625M11.875 12.5L10 10.625M11.875 2.5L13.75 4.375M11.875 2.5L10 4.375'
										stroke='white'
										strokeOpacity='0.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
						</div>
						<hr />

						<div className='dropdawn'>
							<div>
								<span>Type/Medium</span>
								<svg
									width='15'
									height='15'
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M3 6L7.5 10L12 6'
										stroke='white'
										strokeOpacity='0.59'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
						</div>
					</div>
					<Gallery artworks={movement?.artworks || []} />
				</div>
			</div>
		</div>
	)
}

export default MovementIDHero
