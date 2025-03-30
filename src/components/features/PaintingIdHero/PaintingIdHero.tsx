import './PaintingIdHero.scss'

const PaintingIdHero = () => {
	return (
		<div className='PaintingIdHero'>
			<div className='PaintingIdHero-wrapper wrapper'>
				<div className='PaintingIdHero__info'>
					<div className='art-btn'>
						<button className='download'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M5 16.25C5.19891 16.25 5.38968 16.329 5.53033 16.4697C5.67098 16.6103 5.75 16.8011 5.75 17V19C5.75 19.138 5.862 19.25 6 19.25H18C18.0663 19.25 18.1299 19.2237 18.1768 19.1768C18.2237 19.1299 18.25 19.0663 18.25 19V17C18.25 16.8011 18.329 16.6103 18.4697 16.4697C18.6103 16.329 18.8011 16.25 19 16.25C19.1989 16.25 19.3897 16.329 19.5303 16.4697C19.671 16.6103 19.75 16.8011 19.75 17V19C19.75 19.4641 19.5656 19.9092 19.2374 20.2374C18.9092 20.5656 18.4641 20.75 18 20.75H6C5.53587 20.75 5.09075 20.5656 4.76256 20.2374C4.43437 19.9092 4.25 19.4641 4.25 19V17C4.25 16.8011 4.32902 16.6103 4.46967 16.4697C4.61032 16.329 4.80109 16.25 5 16.25Z'
									fill='white'
								/>
								<path
									d='M10.7379 3.75C10.4896 3.74961 10.2502 3.84253 10.0672 4.01034C9.88419 4.17815 9.77092 4.4086 9.74986 4.656C9.59728 6.40849 9.56988 8.16962 9.66786 9.926C9.42119 9.93934 9.17452 9.955 8.92786 9.973L7.43786 10.082C7.30663 10.0916 7.18015 10.1351 7.0708 10.2083C6.96144 10.2815 6.87295 10.3818 6.81398 10.4994C6.75502 10.617 6.7276 10.7479 6.73442 10.8793C6.74123 11.0107 6.78204 11.1381 6.85286 11.249C7.91561 12.9105 9.28378 14.3553 10.8849 15.507L11.4819 15.936C11.6329 16.0441 11.8141 16.1023 11.9999 16.1023C12.1856 16.1023 12.3668 16.0441 12.5179 15.936L13.1149 15.507C14.7159 14.3553 16.0841 12.9105 17.1469 11.249C17.2177 11.1381 17.2585 11.0107 17.2653 10.8793C17.2721 10.7479 17.2447 10.617 17.1857 10.4994C17.1268 10.3818 17.0383 10.2815 16.9289 10.2083C16.8196 10.1351 16.6931 10.0916 16.5619 10.082L15.0719 9.973C14.8253 9.95516 14.5787 9.93949 14.3319 9.926C14.4302 8.16964 14.4031 6.40851 14.2509 4.656C14.2298 4.40843 14.1164 4.17784 13.9332 4.01C13.7499 3.84217 13.5103 3.74936 13.2619 3.75H10.7379Z'
									fill='white'
								/>
							</svg>
						</button>
						<button className='like'>Add to Favorites</button>
					</div>
					<small>Impression, Sunrise (1872)</small>
					<h1>art Title</h1>
					<p>
						Impressionism is an artistic movement that appeared in the second
						half of the 19th century, which sought to convey fleeting
						impressions of light, color and movement. Impressionist artists used
						fast, light brushstrokes and bright, pure colors, avoiding harsh
						contours. Their works often depicted everyday life, natural
						landscapes, and urban scenes filled with air and light. The main
						goal is to capture the moment as it appears to the eye at a certain
						moment.
					</p>

					<div className='artist-info'>
						<span>About artist</span>
						<p>
							Camille Pissarro was born on July 10, 1830 on the island of St.
							Thomas in the Danish West Indies to a wealthy Jewish family[7].
							His father, Frederic Pissarro, was a Sephardic Jew whose ancestors
							came from Portugal and had French citizenship.
						</p>
					</div>
				</div>
				<div className='PaintingIdHero__img'></div>
			</div>
		</div>
	)
}

export default PaintingIdHero
