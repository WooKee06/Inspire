import sql from 'mssql'
import { NextRequest, NextResponse } from 'next/server'
import { config } from '../../../db/config'

export async function GET(request: NextRequest) {
	try {
		const url = new URL(request.url)
		const idParam = url.pathname.split('/').pop()

		if (!idParam || isNaN(Number(idParam))) {
			return NextResponse.json({ message: 'Invalid ID' }, { status: 400 })
		}

		const id = parseInt(idParam, 10)

		const pool = await sql.connect(config)

		const result = await pool.request().input('artworkId', sql.Int, id).query(`
        SELECT 
          ma.*,
          m.name AS movement_name,
          m.description AS movement_description
        FROM [dbo].[MovementArtworks] ma
        JOIN [dbo].[Movements] m ON ma.movement_id = m.id
        WHERE ma.id = @artworkId
      `)

		if (result.recordset.length === 0) {
			return NextResponse.json(
				{ message: 'Artwork not found' },
				{ status: 404 }
			)
		}

		return NextResponse.json(result.recordset[0])
	} catch (error) {
		console.error('Database error:', error)
		return NextResponse.json(
			{ message: 'Error fetching artwork' },
			{ status: 500 }
		)
	}
}
