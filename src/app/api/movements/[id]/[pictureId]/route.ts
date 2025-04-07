import sql from 'mssql'
import { NextResponse } from 'next/server'
import { config } from '../../../../db/config'

export async function GET(
	request: Request,
	{ params }: { params: { id: string; pictureId: string } }
) {
	try {
		const movementId = parseInt(params.id)
		const pictureId = parseInt(params.pictureId)

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
