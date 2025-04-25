import sql from 'mssql'
import { NextRequest, NextResponse } from 'next/server'
import { config } from '../../../../db/config'

export async function GET(request: NextRequest) {
	try {
		// Разбираем путь вручную, чтобы получить оба параметра
		const pathParts = request.nextUrl.pathname.split('/')
		const movementId = parseInt(pathParts.at(-2) || '')
		const pictureId = parseInt(pathParts.at(-1) || '')

		if (isNaN(movementId) || isNaN(pictureId)) {
			return NextResponse.json(
				{ message: 'Неверный формат ID' },
				{ status: 400 }
			)
		}

		const pool = await sql.connect(config)

		const result = await pool
			.request()
			.input('movementId', sql.Int, movementId)
			.input('pictureId', sql.Int, pictureId).query(`
        SELECT * FROM [dbo].[MovementArtworks] 
        WHERE movement_id = @movementId AND id = @pictureId
      `)

		if (result.recordset.length === 0) {
			return NextResponse.json(
				{ message: 'Картина не найдена' },
				{ status: 404 }
			)
		}

		return NextResponse.json(result.recordset[0])
	} catch (error) {
		console.error('Ошибка при запросе к базе данных:', error)
		return NextResponse.json(
			{ message: 'Ошибка при запросе к базе данных' },
			{ status: 500 }
		)
	} finally {
		await sql.close()
	}
}
