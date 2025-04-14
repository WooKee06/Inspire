'use client'

import { motion } from 'framer-motion'
import React from 'react'
import './Collection.scss'

const Collection = React.memo(() => {
	return (
		<motion.div
			className='collection wrapper'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true, amount: 0.2 }}
		>
			<motion.div
				className='collection__info'
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<h2>Our collection</h2>
				<p>
					Explore the world of art by studying paintings by modern and ancient
					artists. You can find works from a variety of styles, schools and
					eras: from Renaissance to Art Nouveau, from self-portraits to
					religious painting.
				</p>
				<button className='m-btn'>
					Check artworks
					<svg
						width='37'
						height='8'
						viewBox='0 0 37 8'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM36.3536 4.35355C36.5488 4.15829 36.5488 3.84171 36.3536 3.64645L33.1716 0.464466C32.9763 0.269204 32.6597 0.269204 32.4645 0.464466C32.2692 0.659728 32.2692 0.976311 32.4645 1.17157L35.2929 4L32.4645 6.82843C32.2692 7.02369 32.2692 7.34027 32.4645 7.53553C32.6597 7.7308 32.9763 7.7308 33.1716 7.53553L36.3536 4.35355ZM1 4.5H36V3.5H1V4.5Z'
							fill='white'
						/>
					</svg>
				</button>
			</motion.div>

			<motion.div
				className='collection__img'
				initial={{ opacity: 0, x: 25 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
				viewport={{ once: true, amount: 0.3 }}
			/>
		</motion.div>
	)
})

export default Collection
