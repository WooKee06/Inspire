'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FC } from 'react'
import './Gallery.scss'

interface Artwork {
	id: number
	title: string
	artist: string
	year: number
	image: string
}

interface GalleryProps {
	artworks?: Artwork[]
}

const Gallery: FC<GalleryProps> = ({ artworks = [] }) => {
	const columns: Artwork[][] = [[], [], [], [], [], []]

	const params = useParams()
	const movementIdFromParams = params.movementId

	artworks.forEach((artwork, index) => {
		columns[index % 6].push(artwork)
	})

	if (!artworks.length) {
		return <div className='empty-gallery'>No artworks available</div>
	}

	return (
		<div className='columns-container'>
			{columns.map((column, colIndex) => (
				<div key={colIndex} className='artwork-column'>
					{column.map((artwork, index) => (
						<Link key={index} href={`${movementIdFromParams}/${artwork.id}`}>
							<div className='artwork-image-wrapper'>
								<button>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M2 9.13689C2 13.9999 6.02 16.5909 8.962 18.9109C10 19.7289 11 20.4999 12 20.4999C13 20.4999 14 19.7299 15.038 18.9099C17.981 16.5919 22 13.9999 22 9.13789C22 4.27589 16.5 0.824893 12 5.50089C7.5 0.824893 2 4.27389 2 9.13689Z'
											fill='black'
										/>
									</svg>
								</button>
								<img
									src={artwork.image}
									alt={artwork.title}
									className='artwork-image'
									style={{
										width: '100%',
										height: 'auto',
										display: 'block',
									}}
								/>
								<div>
									<span>{artwork.title}</span>
									<small>{artwork.year}</small>
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
