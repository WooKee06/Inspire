import './MainHero.scss'

function MainHero() {
	return (
		<div className='MainHero'>
			<div className='hero-title'>
				<span>Welcome to</span>
				<h1>Inspire</h1>
			</div>

			<div className='hero-pictures'>
				<div className='hero-pictures__right'>
					<div className='img'></div>
					<p>
						Explore the world of art by studying paintings by modern and ancient
						artists. You can find works from a variety of styles, schools and
						eras: from Renaissance to Art Nouveau, from self-portraits to
						religious painting. Art language is rich in possibilities for
						expressing thoughts about the world around us. The artist operates
						with color, signs and images, revealing the idea of ​​his work. In
						classical fine art, a whole system of artistic means has been
						developed for reading the concept of a painting.
					</p>
				</div>

				<div className='hero-pictures__left'>
					<div className='img'></div>
					<div className='img'></div>
					<p>
						Explore the world of art by studying paintings by modern and ancient
						artists. You can find works from a variety of styles, schools and
						eras: from Renaissance to Art Nouveau, from self-portraits to
						religious painting. Art language is rich in possibilities for
						expressing thoughts about the world around us.
					</p>
				</div>
			</div>
		</div>
	)
}

export default MainHero
