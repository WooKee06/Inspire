'use client'

import Header from '@/components/Header/Header'
import Preloader from '@/components/preloader/Preloader'
import preloaderStore from '@/store/preloaderStore'
import { observer } from 'mobx-react-lite'
import '../styles/global.scss'

const RootLayout = observer(({ children }: { children: React.ReactNode }) => {
	const { isLoading } = preloaderStore

	return (
		<html lang='en'>
			<body>
				{isLoading ? (
					<Preloader />
				) : (
					<>
						<Header />
						<main>{children}</main>
					</>
				)}
			</body>
		</html>
	)
})

export default RootLayout
