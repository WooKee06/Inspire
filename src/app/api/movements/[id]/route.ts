import { supabase } from '@/app/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const movementId = parseInt(params.id)
		if (isNaN(movementId)) {
			return NextResponse.json(
				{ message: 'Invalid ID provided' },
				{ status: 400 }
			)
		}

		const result = await getMovementById(movementId)

		return NextResponse.json(result)
	} catch (error) {
		console.error('❌ Error in GET function:', error)
		return NextResponse.json(
			{ message: 'Ошибка при запросе к базе данных' },
			{ status: 500 }
		)
	}
}

async function getMovementById(movementId: number) {
	try {
		const { data: movement, error: movementError } = await supabase
			.from('movements')
			.select(
				`
        id,
        name,
        year,
        description,
        history,
        image
      `
			)
			.eq('id', movementId)
			.single()

		if (movementError) {
			console.error('❌ Supabase fetch error:', movementError)
			throw new Error('Ошибка при получении данных направления')
		}

		const { data: artworks, error: artworksError } = await supabase
			.from('movementartworks')
			.select(
				`
        id,
        movement_id,
        title,
        artist,
        year,
        image,
        description
      `
			)
			.eq('movement_id', movementId)

		if (artworksError) {
			console.error('❌ Supabase fetch error for artworks:', artworksError)
			throw new Error('Ошибка при получении произведений искусства')
		}

		const { data: representatives, error: RepresentativesError } =
			await supabase
				.from('movementrepresentatives')
				.select(
					`
				id,
				movement_id,
				name,
				avatar,
				quote
				`
				)
				.eq('movement_id', movementId)

		if (RepresentativesError) {
			console.error(
				'❌ Supabase fetch error for artworks:',
				RepresentativesError
			)
			throw new Error('Ошибка при получении произведений искусства')
		}

		return {
			id: movement.id,
			name: movement.name,
			year: movement.year,
			description: movement.description,
			history: movement.history,
			image: movement.image,
			artworks: artworks ?? [],
			representatives: representatives ?? [],
		}
	} catch (error) {
		console.error('❌ Error in getMovementById:', error)
		throw new Error('Ошибка при получении данных направления')
	}
}
