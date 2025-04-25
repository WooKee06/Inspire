'use client'

import PaintingIdHero from '@/components/features/PaintingIdHero/PaintingIdHero'
import Gallery from '@/components/sections/Gellary/Gallery'
import SeeAlsoSwiper from '@/components/sections/SeeAlsoSwiper/SeeAlsoSwiper'
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

const PaintingId = () => {
	const [movementInfo, setMovementInfo] = useState<movementInfoType | null>(
		null
	)
	const params = useParams()

	useEffect(() => {
		const fetchMovement = async () => {
			try {
				const response = await axios.get<movementInfoType>(
					`/api/movements?id=${params.movementId}`
				)

				setMovementInfo(response.data)
			} catch (err) {
				console.error('Error fetching movement:', err)
			}
		}

		if (params.movementId) {
			fetchMovement()
		}
	}, [params.movementId])

	return (
		<>
			<PaintingIdHero movementInfo={movementInfo?.name || ''} />
			<SeeAlsoSwiper artworks={movementInfo?.artworks || []} />
			<div className='Gallery'>
				<span>More paintings </span>
				<Gallery />
			</div>
		</>
	)
}

export default PaintingId
