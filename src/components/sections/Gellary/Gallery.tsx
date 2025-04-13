'use client'

import useWindowSize from '@/hooks/useWindowSize'
import preloaderStore from '@/store/preloaderStore'
import axios from 'axios'
import { observer } from 'mobx-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FC, useEffect, useMemo, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDebounce } from 'use-debounce'
import './Gallery.scss'

interface Artwork {
	id: number
	title: string
	artist: string
	year: number
	image: string
	isLiked?: boolean
}

interface GalleryProps {
	movementArtworks?: Artwork[]
	favoriteArtworks?: Artwork[]
	searchArtworks?: string
}

const Gallery: FC<GalleryProps> = observer(
	({ movementArtworks, searchArtworks, favoriteArtworks }) => {
		const [artworks, setArtworks] = useState<Artwork[]>([])
		const [loading, setLoading] = useState(true)
		const [error, setError] = useState<string | null>(null)
		const params = useParams()
		const { width } = useWindowSize()
		const { addFavoriteAtrs, favoriteAtrs } = preloaderStore
		const [debouncedSearch] = useDebounce(searchArtworks, 300)

		const filteredArtworks = useMemo(() => {
			const baseArtworks = favoriteArtworks
				? favoriteArtworks
				: movementArtworks || artworks

			if (!debouncedSearch?.trim()) {
				return baseArtworks
			}

			const searchTerm = debouncedSearch.toLowerCase()
			return baseArtworks.filter(
				artwork =>
					artwork.title.toLowerCase().includes(searchTerm) ||
					artwork.artist.toLowerCase().includes(searchTerm)
			)
		}, [movementArtworks, artworks, debouncedSearch, favoriteArtworks])

		const addFavoriteHandler = (artwork: Artwork) => {
			addFavoriteAtrs(artwork)
		}

		const isFavorite = (id: number) => {
			return favoriteAtrs.some(item => item.id === id)
		}

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
			return (
				<div
					className='columns-container'
					style={
						{
							'--column-count': columnCount,
							width: '100%',
						} as React.CSSProperties
					}
				>
					{Array.from({ length: columnCount }).map((_, colIndex) => (
						<div key={`skeleton-col-${colIndex}`} className='artwork-column'>
							{Array.from({ length: 3 }).map((_, idx) => (
								<div
									key={`skeleton-${colIndex}-${idx}`}
									className='artwork-skeleton'
								>
									<Skeleton
										height={140}
										containerClassName='artwork-image-wrapper'
										style={{ display: 'flex' }}
									/>
									<div className='artwork-info' style={{ padding: '0' }}>
										<Skeleton width='70%' />
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			)
		}

		if (error) {
			return <div className='error'>Error: {error}</div>
		}

		const displayArtworks = movementArtworks || artworks || favoriteArtworks
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
							<div key={artwork.id} className='artwork'>
								<button
									onClick={() => addFavoriteHandler(artwork)}
									className={`like-button ${
										isFavorite(artwork.id) ? 'liked' : ''
									}`}
								>
									<svg
										width='30'
										height='30'
										viewBox='0 0 24 24'
										fill={isFavorite(artwork.id) ? 'red' : 'currentColor'}
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M2 9.13689C2 13.9999 6.02 16.5909 8.962 18.9109C10 19.7289 11 20.4999 12 20.4999C13 20.4999 14 19.7299 15.038 18.9099C17.981 16.5919 22 13.9999 22 9.13789C22 4.27589 16.5 0.824893 12 5.50089C7.5 0.824893 2 4.27389 2 9.13689Z' />
									</svg>
								</button>
								<Link
									href={
										movementArtworks
											? `${params.movementId}/${artwork.id}`
											: `/artworks/${artwork.id}`
									}
								>
									<div className='artwork-image-wrapper'>
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
							</div>
						))}
					</div>
				))}
			</div>
		)
	}
)

export default Gallery
