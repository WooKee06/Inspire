import { supabase } from '@/app/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const movementId = searchParams.get('id')

		let result
		if (movementId) {
			result = await getMovementById(parseInt(movementId))
		} else {
			result = await getAllMovements()
		}

		return NextResponse.json(result)
	} catch (error) {
		console.error('❌ Error in GET function:', error)
		return NextResponse.json(
			{ message: 'Ошибка при запросе к базе данных', error },
			{ status: 500 }
		)
	}
}

// Функция для получения всех направлений с произведениями искусства
async function getAllMovements() {
	try {
		const { data: movements, error: movementsError } = await supabase.from(
			'movements'
		).select(`
      id,
      name,
      year,
      description,
      history,
      image
    `)

		if (movementsError) {
			console.error('❌ Supabase fetch error (movements):', movementsError)
			throw new Error(movementsError.message) // Логируем ошибку
		}

		// Для каждого направления получаем картины
		const movementsWithArtworks = await Promise.all(
			movements.map(async movement => {
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
					.eq('movement_id', movement.id)

				if (artworksError) {
					console.error('❌ Supabase fetch error (artworks):', artworksError)
					throw new Error(artworksError.message) // Логируем ошибку
				}

				return {
					...movement, // Сохраняем поля направления
					artworks: artworks ?? [], // Добавляем произведения искусства
				}
			})
		)

		return movementsWithArtworks
	} catch (error) {
		console.error('❌ Error in getAllMovements:', error)
		throw new Error('Ошибка при получении списка направлений с картинами')
	}
}

// Функция для получения одного направления по ID с произведениями искусства
async function getMovementById(movementId: number) {
	try {
		const { data: movement, error: movementError } = await supabase
			.from('movements') // Получаем данные из таблицы movements
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
			.single() // Получаем только одно направление

		if (movementError) {
			console.error('❌ Supabase fetch error (movement):', movementError)
			throw new Error(movementError.message) // Логируем ошибку
		}

		// Получаем произведения искусства для этого направления
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
			console.error('❌ Supabase fetch error (artworks):', artworksError)
			throw new Error(artworksError.message) // Логируем ошибку
		}

		return {
			...movement, // Сохраняем данные о направлении
			artworks: artworks ?? [], // Добавляем произведения искусства
		}
	} catch (error) {
		console.error('❌ Error in getMovementById:', error)
		throw new Error('Ошибка при получении данных направления с картинами')
	}
}
