'use client'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import MobileNav from '@/components/mobileNav/MobileNav'
import Preloader from '@/components/preloader/Preloader'
import preloaderStore from '@/store/preloaderStore'
import { observer } from 'mobx-react-lite'
import '../styles/global.scss'

const RootLayout = observer(({ children }: { children: React.ReactNode }) => {
	const { bodyScrollHidden } = preloaderStore

	return (
		<html lang='en'>
			<body className={`${bodyScrollHidden ? 'hidden' : ''}`}>
				<Preloader />
				<Header />
				<main>{children}</main>
				<MobileNav />
				<Footer />
			</body>
		</html>
	)
})

export default RootLayout
