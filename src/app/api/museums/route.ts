import sql from 'mssql'
import { NextResponse } from 'next/server'
import { config } from '../../db/config'

interface MuseumArtworkRow {
	museum_id: number
	museum_name: string
	preview_image: string
	short_description: string
	full_description: string
	website_link: string
	artwork_title: string
	artwork_image: string
	artwork_artist: string
	artwork_year: number
}

interface artworksType {
	title: string
	image: string
	artist: string
	year: number
}

interface museumsType {
	id: number
	name: string
	preview_image: string
	full_description: string
	short_description: string
	website_link: string
	artworks: artworksType[]
}

export async function GET() {
	try {
		const pool = await sql.connect(config)

		// Получаем все данные: музеи и их картины
		const result = await pool.query<MuseumArtworkRow>(`
      SELECT 
        ma.id AS museum_id,
        ma.name AS museum_name,
        ma.preview_image,
        ma.short_description,
        ma.full_description,
        ma.website_link,
        m.title AS artwork_title,
        m.image AS artwork_image,
        m.artist AS artwork_artist,
        m.year AS artwork_year
      FROM [dbo].[museums] ma
      JOIN [dbo].[artworks] m ON m.museum_id = ma.id
      ORDER BY ma.id
    `)

		const museums: Record<number, museumsType> = {}

		result.recordset.forEach((row: MuseumArtworkRow) => {
			if (!museums[row.museum_id]) {
				museums[row.museum_id] = {
					id: row.museum_id,
					name: row.museum_name,
					preview_image: row.preview_image,
					short_description: row.short_description,
					full_description: row.full_description,
					website_link: row.website_link,
					artworks: [],
				}
			}

			// Добавляем картину в массив произведений для этого музея
			museums[row.museum_id].artworks.push({
				title: row.artwork_title,
				image: row.artwork_image,
				artist: row.artwork_artist,
				year: row.artwork_year,
			})
		})

		// Преобразуем объект museums в массив
		const groupedMuseums = Object.values(museums)

		return NextResponse.json(groupedMuseums)
	} catch (error) {
		console.error('Database error:', error)
		return NextResponse.json(
			{ message: 'Error fetching artworks' },
			{ status: 500 }
		)
	}
}
