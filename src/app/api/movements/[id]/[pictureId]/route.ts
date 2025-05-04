import { supabase } from '@/app/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		// Извлекаем ID движения и картины из пути запроса
		const pathParts = request.nextUrl.pathname.split('/')
		const movementId = parseInt(pathParts.at(-2) || '')
		const pictureId = parseInt(pathParts.at(-1) || '')

		if (isNaN(movementId) || isNaN(pictureId)) {
			return NextResponse.json(
				{ message: 'Неверный формат ID' },
				{ status: 400 }
			)
		}

		// Запрос в Supabase для получения данных картины по movementId и pictureId
		const { data, error } = await supabase
			.from('movementartworks')
			.select('*')
			.eq('movement_id', movementId)
			.eq('id', pictureId)
			.single()

		// Обработка ошибок от Supabase
		if (error) {
			console.error('Ошибка Supabase:', error)
			return NextResponse.json(
				{ message: 'Ошибка при запросе к базе данных' },
				{ status: 500 }
			)
		}

		// Если данные не найдены, возвращаем 404
		if (!data) {
			return NextResponse.json(
				{ message: 'Картина не найдена' },
				{ status: 404 }
			)
		}

		// Возвращаем данные картины
		return NextResponse.json(data)
	} catch (error) {
		console.error('Неизвестная ошибка:', error)
		return NextResponse.json(
			{ message: 'Ошибка при обработке запроса' },
			{ status: 500 }
		)
	}
}
