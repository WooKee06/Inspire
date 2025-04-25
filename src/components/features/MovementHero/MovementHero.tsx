import './MovementHero.scss'
function MovementHero() {
	return (
		<>
			<div className='MovementHero'>
				<div className='MovementHero__img'></div>
				<div className='MovementHero__info'>
					<span>Choose a direction that inspires you.</span>
					<h1>Discover the world of art</h1>
					<p>
						Art historians apply a variety of classification systems for world
						art. They structure the continuous flow of works of art, dividing it
						into groups. This division implies that the works combined into one
						group have a common significant quality or set of qualities that
						reflect the specific approach of the artist. These qualities may
						include formal, stylistic, iconographic, thematic, and other aspects
						of art. The grouping principle reflects an understanding of the
						nature of meaningful connections between works, as well as between
						art and the broader context. Western art is most often structured in
						the form of artistic trends, using mainly cultural and aesthetic
						criteria, while Eastern art is divided into periods according to
						political and dynastic markers.
					</p>

					<div>
						<button>Выбрать направление</button>
						<button>Показать все картины</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default MovementHero
