import BackButton from '@/components/ui/BackButton/BackButton'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import '../PaintingIdHero/PaintingIdHero.scss'

type artworksType = {
	artist: string
	description: string
	id: number
	image: string
	movement_id: number
	title: string
	year: number
}

const ArtworkIdHero: FC = () => {
	const [isLoading, setIsLoading] = useState(true)
	const params = useParams()
	const [currentArtwork, setCurrentArtwork] = useState<
		artworksType | undefined
	>(undefined)

	useEffect(() => {
		const fetchMovement = async () => {
			try {
				setIsLoading(true)
				const response = await axios.get<artworksType>(
					`/api/artworks/${params.id}`
				)

				setCurrentArtwork(response.data)
			} catch (err) {
				console.log(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setIsLoading(false)
			}
		}

		if (params.id) {
			fetchMovement()
		}
	}, [params.id])

	return (
		<div className='PaintingIdHero'>
			<div className='PaintingIdHero-wrapper wrapper'>
				<BackButton />
				<div>
					<div className='PaintingIdHero__info'>
						<div className='art-btn'>
							<button className='download'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M12.5997 21.6001H6.5997C5.27421 21.6001 4.1997 20.5256 4.19971 19.2001L4.1998 4.80013C4.19981 3.47466 5.27432 2.40015 6.5998 2.40015H17.4001C18.7256 2.40015 19.8001 3.47466 19.8001 4.80015V9.00015M15.0001 15.548C15.0001 14.2513 16.0746 13.2001 17.4001 13.2001C18.7256 13.2001 19.8001 14.2513 19.8001 15.548C19.8001 16.8447 18.7256 17.8959 17.4001 17.8959M17.4001 21.0904V21.0001'
										stroke='#ffffff'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>
							<button className='like'>Add to Favorites</button>
						</div>
						<small>
							{currentArtwork?.title} {currentArtwork?.year}
						</small>
						<h1>{currentArtwork?.title}</h1>
						<p>{currentArtwork?.description}</p>

						<div className='artist-info'>
							<span>About artist</span>
							<p>{currentArtwork?.artist}</p>
						</div>
					</div>
					<div
						className='PaintingIdHero__img'
						style={{ backgroundImage: `url('${currentArtwork?.image}')` }}
					></div>
				</div>
			</div>
		</div>
	)
}

export default ArtworkIdHero
