import PaintingIdHero from '@/components/features/PaintingIdHero/PaintingIdHero'
import Gallery from '@/components/sections/Gellary/Gallery'
import SeeAlsoSwiper from '@/components/sections/SeeAlsoSwiper/SeeAlsoSwiper'

const PaintingId = () => {
	return (
		<>
			<PaintingIdHero />
			<SeeAlsoSwiper />
			<div className='Gallery'>
				<span>More paintings by this artist</span>
				<Gallery />
			</div>
		</>
	)
}

export default PaintingId
