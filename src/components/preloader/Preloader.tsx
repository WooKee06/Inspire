'use client'

import preloaderStore from '@/store/preloaderStore'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import style from '../../styles/preloader.module.scss'

const Preloader = observer(() => {
	const text = 'Dare to Dream, Dare to Inspire'
	const { isLoading, isInitialLoad, setIsLoading, completeInitialLoad } =
		preloaderStore

	useEffect(() => {
		if (isInitialLoad) {
			const timer = setTimeout(() => {
				setIsLoading(false)
				completeInitialLoad()
			}, 3000)

			return () => {
				clearTimeout(timer)
			}
		}
	}, [isInitialLoad, setIsLoading, completeInitialLoad])

	if (!isInitialLoad || !isLoading) return null

	return (
		<div className={style.container}>
			<motion.div
				initial={{ y: 100, scale: 0.5, opacity: 0 }}
				animate={{ y: 0, scale: 1, opacity: 1 }}
				transition={{ type: 'spring', stiffness: 120, damping: 10 }}
			>
				<motion.svg
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					viewBox='0 0 511.001 511.001'
					fill='none'
					stroke='white'
					strokeWidth='3'
					width='200'
					height='200'
				>
					<motion.path
						d='M359.501,48h-64.5v-7.5c0-4.687-3.813-8.5-8.5-8.5h-23.5V7.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5V32h-23.5
            c-4.687,0-8.5,3.813-8.5,8.5V48h-64.5c-8.547,0-15.5,6.953-15.5,15.5v264c0,8.547,6.953,15.5,15.5,15.5h8.5v7.5
            c0,4.687,3.813,8.5,8.5,8.5h13.756l-30.096,142.955c-0.853,4.053,1.741,8.031,5.794,8.884c0.521,0.109,1.041,0.162,1.553,0.162
            c3.471,0,6.588-2.424,7.332-5.957L177.376,455h70.625v48.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V455h70.625l10.536,50.045
            c0.744,3.533,3.86,5.957,7.332,5.957c0.512,0,1.032-0.053,1.553-0.162c4.053-0.854,6.647-4.831,5.794-8.884L328.744,359h13.756
            c4.687,0,8.5-3.813,8.5-8.5V343h8.5c8.547,0,15.5-6.953,15.5-15.5v-264C375.001,54.953,368.048,48,359.501,48z M280.001,47v17h-49
            v-8.481c0-0.007,0.001-0.013,0.001-0.019s-0.001-0.013-0.001-0.019V47H280.001z M180.534,440l17.053-81h50.414v81H180.534z
            M330.468,440h-67.467v-81h50.414L330.468,440z M319.484,344c-0.011,0-0.023,0-0.035,0H191.538c-0.002,0-0.003,0-0.005,0h-16.532
            v-17h161v8.49c0,0.003,0,0.006,0,0.01s0,0.006,0,0.01V344H319.484z M360.001,327.5c0,0.276-0.224,0.5-0.5,0.5h-8.5v-7.5
            c0-4.687-3.813-8.5-8.5-8.5h-174c-4.687,0-8.5,3.813-8.5,8.5v7.5h-8.5c-0.276,0-0.5-0.224-0.5-0.5v-264c0-0.276,0.224-0.5,0.5-0.5
            h64.5v7.5c0,4.687,3.813,8.5,8.5,8.5h62c4.687,0,8.5-3.813,8.5-8.5V63h64.5c0.276,0,0.5,0.224,0.5,0.5V327.5z'
						strokeDasharray='1720'
						strokeDashoffset='1720'
						initial={{ strokeDashoffset: 1720 }}
						animate={{ strokeDashoffset: 0 }}
						transition={{ duration: 3, ease: 'easeInOut' }}
					/>
					<motion.path
						d='M278.627,134.212c-2.679-1.504-6.005-1.222-8.393,0.712c-15.628,12.662-34.502,20.883-54.583,23.777
            c-3.037,0.438-5.5,2.681-6.221,5.663c-0.962,3.985-1.43,7.627-1.43,11.136c0,26.191,21.309,47.5,47.5,47.5s47.5-21.309,47.5-47.5
            C303.001,158.473,293.661,142.652,278.627,134.212z M255.501,208c-17.92,0-32.5-14.58-32.5-32.5c0-0.927,0.05-1.867,0.154-2.841
            c18.931-3.553,36.776-11.32,52.16-22.701c7.923,6.115,12.686,15.53,12.686,25.542C288.001,193.42,273.421,208,255.501,208z'
						strokeDasharray='1500'
						strokeDashoffset='1500'
						initial={{ strokeDashoffset: 1500 }}
						animate={{ strokeDashoffset: 0 }}
						transition={{ duration: 3, ease: 'easeInOut' }}
					/>
					<motion.path
						d='M327.001,236.832V175.5c0-39.425-32.075-71.5-71.5-71.5s-71.5,32.075-71.5,71.5v61.332c0,0.048,0.006,0.095,0.007,0.143
            c-5.096,7.609-8.007,16.753-8.007,26.525v24c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-24
            c0-15.267,10.376-28.296,25.233-31.686c0.576-0.129,0.776,0.59,0.811,0.737C221.251,250.479,237.065,263,255.501,263
            c18.437,0,34.25-12.521,38.456-30.449c0.034-0.146,0.232-0.865,0.811-0.737c14.857,3.39,25.233,16.419,25.233,31.686v24
            c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-24c0-9.771-2.911-18.915-8.007-26.524
            C326.994,236.927,327.001,236.88,327.001,236.832z M298.103,217.189c-8.49-1.935-16.725,3.306-18.75,11.936
            C276.746,240.238,266.938,248,255.501,248c-11.437,0-21.246-7.762-23.853-18.875c-2.024-8.63-10.261-13.874-18.75-11.936
            c-5.02,1.145-9.683,3.05-13.897,5.566V175.5c0-31.154,25.346-56.5,56.5-56.5s56.5,25.346,56.5,56.5v47.256
            C307.787,220.24,303.123,218.334,298.103,217.189z'
						strokeDasharray='1500'
						strokeDashoffset='1500'
						initial={{ strokeDashoffset: 1500 }}
						animate={{ strokeDashoffset: 0 }}
						transition={{ duration: 3, ease: 'easeInOut' }}
					/>
				</motion.svg>
			</motion.div>
			<div className={style.info}>
				<motion.span
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					Welcome to the Inspire!
				</motion.span>
				<motion.h1
					className='text-4xl font-bold flex gap-1'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					{text.split('').map((char, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.4,
								delay: Math.sin(index * 0.5) * 0.2 + index * 0.05,
							}}
						>
							{char}
						</motion.span>
					))}
				</motion.h1>
			</div>
		</div>
	)
})

export default Preloader
