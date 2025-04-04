'use client'

import MainHero from '@/components/features/MainHero/MainHero'
import Collection from '@/components/sections/Collection/Collection'
import Explore from '@/components/sections/Explore/Explore'
import HeroPost from '@/components/sections/HeroPost/HeroPost'

export default function Home() {
	return (
		<>
			<MainHero />
			<Collection />
			<HeroPost />
			<Explore />
			{/* <AlsoLike /> */}
		</>
	)
}
