'use client'

import ArtworkIdHero from '@/components/features/ArtworkIdHero/ArtworkIdHero'
import Gallery from '@/components/sections/Gellary/Gallery'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type artworksType = {
	artist: string
	description: string
	id: number
	image: string
	movement_id: number
	title: string
	year: number
}

const PaintingId = () => {
	const [artwork, setArtwork] = useState<artworksType | null>(null)

	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const params = useParams()

	useEffect(() => {
		const fetchMovement = async () => {
			try {
				setIsLoading(true)
				const response = await axios.get<artworksType>(
					`/api/movements?id=${params.movementId}`
				)

				setArtwork(response.data)
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

	return (
		<>
			<ArtworkIdHero />
			<div className='Gallery'>
				<span>More paintings </span>
				<Gallery />
			</div>
		</>
	)
}

export default PaintingId
