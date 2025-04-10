'use client'

import useWindowSize from '@/hooks/useWindowSize'
import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FC, useEffect, useMemo, useState } from 'react'
import { useDebounce } from 'use-debounce'
import './Gallery.scss'

interface Artwork {
	id: number
	title: string
	artist: string
	year: number
	image: string
}

interface GalleryProps {
	movementArtworks?: Artwork[]
	searchArtworks?: string
}

const Gallery: FC<GalleryProps> = ({ movementArtworks, searchArtworks }) => {
	const [artworks, setArtworks] = useState<Artwork[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const params = useParams()
	const { width } = useWindowSize()

	const [debouncedSearch] = useDebounce(searchArtworks, 300)

	const filteredArtworks = useMemo(() => {
		const displayArtworks = movementArtworks || artworks

		if (!debouncedSearch?.trim()) {
			return displayArtworks
		}

		const searchTerm = debouncedSearch.toLowerCase()

		return displayArtworks.filter(
			artwork =>
				artwork.title.toLowerCase().includes(searchTerm) ||
				artwork.artist.toLowerCase().includes(searchTerm)
		)
	}, [movementArtworks, artworks, debouncedSearch])

	const columnCount = useMemo(() => {
		if (width < 640) return 2
		if (width < 768) return 3
		if (width < 1024) return 4
		if (width < 1280) return 5
		return 6
	}, [width])

	const columns = useMemo(() => {
		const cols: Artwork[][] = Array.from({ length: columnCount }, () => [])

		filteredArtworks.forEach((artwork, index) => {
			cols[index % columnCount].push(artwork)
		})

		return cols
	}, [filteredArtworks, columnCount])

	useEffect(() => {
		const fetchArtworks = async () => {
			try {
				setLoading(true)
				const response = await axios.get<Artwork[]>('/api/artworks')
				setArtworks(response.data)
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setLoading(false)
			}
		}

		if (!movementArtworks) {
			fetchArtworks()
		}
	}, [movementArtworks])

	if (loading && !movementArtworks) {
		return <div className='loading'>Loading artworks...</div>
	}

	if (error) {
		return <div className='error'>Error: {error}</div>
	}

	const displayArtworks = movementArtworks || artworks
	if (!displayArtworks.length) {
		return <div className='empty-gallery'>No artworks available</div>
	}

	return (
		<div
			className='columns-container'
			style={{ '--column-count': columnCount } as React.CSSProperties}
		>
			{columns.map((column, colIndex) => (
				<div key={`column-${colIndex}`} className='artwork-column'>
					{column.map(artwork => (
						<Link
							key={artwork.id}
							href={
								movementArtworks
									? `${params.movementId}/${artwork.id}`
									: `/artworks/${artwork.id}`
							}
						>
							<div className='artwork-image-wrapper'>
								<button className='like-button'>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M2 9.13689C2 13.9999 6.02 16.5909 8.962 18.9109C10 19.7289 11 20.4999 12 20.4999C13 20.4999 14 19.7299 15.038 18.9099C17.981 16.5919 22 13.9999 22 9.13789C22 4.27589 16.5 0.824893 12 5.50089C7.5 0.824893 2 4.27389 2 9.13689Z'
											fill='currentColor'
										/>
									</svg>
								</button>
								<img
									src={artwork.image}
									alt={artwork.title}
									className='artwork-image'
									loading='lazy'
									style={{
										width: '100%',
										height: 'auto',
										display: 'block',
									}}
								/>
								<div className='artwork-info'>
									<span className='artwork-title'>{artwork.title}</span>
									<small className='artwork-year'>{artwork.year}</small>
								</div>
							</div>
						</Link>
					))}
				</div>
			))}
		</div>
	)
}

export default Gallery
