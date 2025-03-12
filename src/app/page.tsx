import Footer from '@/components/Footer/Footer'
import Collection from '@/components/sections/Collection/Collection'
import Explore from '@/components/sections/Explore/Explore'
import Hero from '@/components/sections/Hero/Hero'
import HeroPost from '@/components/sections/HeroPost/HeroPost'

export default function Home() {
	return (
		<>
			<Hero />
			<Collection />
			<HeroPost />
			<Explore />
			{/* <AlsoLike /> */}
			<Footer />
		</>
	)
}
