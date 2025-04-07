import sql from 'mssql'
import { NextResponse } from 'next/server'
import { config } from '../../db/config'

export async function GET() {
	try {
		const pool = await sql.connect(config)

		const result = await pool.query(`
      SELECT 
        ma.id,
        ma.title,
        ma.artist,
        ma.year,
        ma.image,
        ma.description,
        ma.movement_id,
        m.name AS movement_name,
        m.image AS movement_image
      FROM [dbo].[MovementArtworks] ma
      JOIN [dbo].[Movements] m ON ma.movement_id = m.id
      ORDER BY ma.id
    `)

		return NextResponse.json(result.recordset)
	} catch (error) {
		console.error('Database error:', error)
		return NextResponse.json(
			{ message: 'Error fetching artworks' },
			{ status: 500 }
		)
	}
}
