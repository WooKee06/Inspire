'use client'

import { motion } from 'framer-motion'
import './HeroPost.scss'

export default function HeroPost() {
	return (
		<motion.div
			className='hero-post wrapper'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true, amount: 0.2 }}
		>
			<motion.div
				className='hero-post__main-img'
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, delay: 0.2 }}
				viewport={{ once: true, amount: 0.3 }}
			/>

			<motion.div
				className='hero-post__info'
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, delay: 0.3 }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<div>
					<h2>POST title 2</h2>
					<p>
						Explore the world of art by studying paintings by modern and ancient
						artists. You can find works from a variety of styles, schools and
						eras: from Renaissance to Art Nouveau, from self-portraits to
						religious painting.
					</p>
					<button className='m-btn'>
						Check post
						<svg
							width='40'
							height='8'
							viewBox='0 0 40 8'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM39.5467 4.35355C39.742 4.15829 39.742 3.84171 39.5467 3.64645L36.3647 0.464466C36.1695 0.269204 35.8529 0.269204 35.6576 0.464466C35.4624 0.659728 35.4624 0.976311 35.6576 1.17157L38.486 4L35.6576 6.82843C35.4624 7.02369 35.4624 7.34027 35.6576 7.53553C35.8529 7.7308 36.1695 7.7308 36.3647 7.53553L39.5467 4.35355ZM1 4.5H39.1932V3.5H1V4.5Z'
								fill='white'
							/>
						</svg>
					</button>
				</div>

				<motion.div
					className='hero-post__extra'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<div></div>
					<div></div>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}
