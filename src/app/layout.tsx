'use client'

import Header from '@/components/Header/Header'
import MobileNav from '@/components/mobileNav/MobileNav'
import Preloader from '@/components/preloader/Preloader'
import preloaderStore from '@/store/preloaderStore'
import { Provider } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/global.scss'
const RootLayout = observer(({ children }: { children: React.ReactNode }) => {
	const { bodyScrollHidden } = preloaderStore

	return (
		<html lang='en'>
			<body className={`${bodyScrollHidden ? 'hidden' : ''}`}>
				<SkeletonTheme baseColor='#202020' highlightColor='#444'>
					<Provider preloaderStore={preloaderStore}>
						<Preloader />
						<Header />
						<main>{children}</main>
						<MobileNav />
					</Provider>
				</SkeletonTheme>
			</body>
		</html>
	)
})

export default RootLayout
