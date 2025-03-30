'use client'

import Header from '@/components/Header/Header'
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
			</body>
		</html>
	)
})

export default RootLayout
