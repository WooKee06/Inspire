'use client'

import ArtworkIdHero from '@/components/features/ArtworkIdHero/ArtworkIdHero'
import Gallery from '@/components/sections/Gellary/Gallery'

const PaintingId = () => {
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
