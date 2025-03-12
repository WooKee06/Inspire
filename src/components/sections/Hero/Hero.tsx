'use client'

import { motion } from 'framer-motion'
import './Hero.scss'

export default function Hero() {
	return (
		<motion.div
			className='hero'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 3 }}
		>
			<motion.div
				className='hero-title'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 3 }}
			>
				<span>Welcome to</span>
				<h1>Inspire</h1>
			</motion.div>

			<div className='hero-pictures'>
				<motion.div
					className='hero-pictures__right'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 3.2 }}
				>
					<motion.div
						className='img'
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 3.4 }}
					></motion.div>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 3.6 }}
					>
						Explore the world of art by studying paintings by modern and ancient
						artists. You can find works from a variety of styles, schools and
						eras: from Renaissance to Art Nouveau, from self-portraits to
						religious painting. Art language is rich in possibilities for
						expressing thoughts about the world around us. The artist operates
						with color, signs and images, revealing the idea of ​​his work. In
						classical fine art, a whole system of artistic means has been
						developed for reading the concept of a painting.
					</motion.p>
				</motion.div>

				<motion.div
					className='hero-pictures__left'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 3.3 }}
				>
					<motion.div
						className='img'
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 3.5 }}
					></motion.div>
					<motion.div
						className='img'
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 3.1 }}
					></motion.div>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 3.8 }}
					>
						Explore the world of art by studying paintings by modern and ancient
						artists. You can find works from a variety of styles, schools and
						eras: from Renaissance to Art Nouveau, from self-portraits to
						religious painting. Art language is rich in possibilities for
						expressing thoughts about the world around us.
					</motion.p>
				</motion.div>
			</div>
		</motion.div>
	)
}
