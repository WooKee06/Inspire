'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import './museumList.scss'
const MuseumList = () => {
	return (
		<div className=' wrapper museum-list'>
			<div className='museum-list__best'>
				<span>10 Best Museums in the World</span>
				<ul>
					<li>1. The Louvre, France</li>
					<li>2. Smithsonian National Air and Space Museum, USA</li>
					<li>3. British Museum, England</li>
					<li>4. Vatican Museums, Vatican City</li>
					<li>5. The Metropolitan Museum of Art, USA</li>
					<li>6. State Hermitage Museum, Russia</li>
					<li>6. State Hermitage Museum, Russia</li>
					<li>6. State Hermitage Museum, Russia</li>
				</ul>
			</div>
			<div className='museum-list__museums'>
				<span>Museums</span>
				<ul>
					{Array.from({ length: 4 }).map((_, index) => (
						<li key={index} className='museum-item'>
							<div>
								<div className='museum-item__info'>
									<div>
										<span>1</span>
										<div>
											<small>The Uffizi Gallery, Florence, Italy</small>
											<h2>Museum Name</h2>
										</div>
									</div>
									<p>
										The Louvre Museum is a world-renowned museum located in the
										heart of Paris, France. It is home to some of the world's
										most famous works of art, including the Mona Lisa by
										Leonardo da Vinci and the Venus de Milo sculpture. The
										museum's collection includes over 380,000 objects, with
										works of art from all over the world and from various time
										periods, from antiquity to the present day. The museum is
										housed in a former royal palace and covers an area of over
										60,000 square meters. Its stunning architecture and
										impressive collection make it one of the most popular
										tourist attractions in Paris.
									</p>

									<div className='btns'>
										<button>Visit the museum </button>
										<button>
											<svg
												width='26'
												height='26'
												viewBox='0 0 26 26'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M13.1624 4.73214C14.3641 3.61871 15.9412 2.99886 17.5795 2.99609C19.3504 2.99609 21.0413 3.72458 22.2787 5.00711C23.51 6.29068 24.1959 8.00154 24.1922 9.78021C24.1959 11.5589 23.51 13.2697 22.2787 14.5533C21.462 15.3998 20.6463 16.2668 19.8265 17.1369C18.1602 18.9057 16.4765 20.6941 14.7271 22.3778L14.724 22.3819C14.2896 22.7933 13.7105 23.0166 13.1124 23.0033C12.5144 22.99 11.9457 22.7413 11.53 22.3111L4.04508 14.5533C1.49539 11.9092 1.49539 7.6512 4.04508 5.00814C5.22358 3.77322 6.84089 3.05191 8.54713 3.00026C10.2534 2.94861 11.9113 3.57076 13.1624 4.73214Z'
													fill='white'
												/>
											</svg>
										</button>
									</div>
								</div>
								<div className='museum-item__img'></div>
							</div>
							<div className='museum-item__swiper'>
								<Swiper
									spaceBetween={20}
									slidesPerView='auto'
									grabCursor={true}
									autoplay={{ delay: 3000, disableOnInteraction: false }}
								>
									<SwiperSlide></SwiperSlide>
									<SwiperSlide></SwiperSlide>
									<SwiperSlide></SwiperSlide>
									<SwiperSlide></SwiperSlide>
									<SwiperSlide></SwiperSlide>
									<SwiperSlide></SwiperSlide>
									<SwiperSlide></SwiperSlide>
									<SwiperSlide></SwiperSlide>
								</Swiper>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default MuseumList
