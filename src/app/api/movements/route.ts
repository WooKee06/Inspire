import sql from 'mssql'
import { NextResponse } from 'next/server'
import { config } from '../../db/config'

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
		console.error('Ошибка при запросе к базе данных:', error)
		return NextResponse.json(
			{ message: 'Ошибка при запросе к базе данных' },
			{ status: 500 }
		)
	}
}

async function getAllMovements(): Promise<MovementWithArtworks[]> {
	let pool: sql.ConnectionPool | null = null
	try {
		pool = await sql.connect(config)

		const movementsQuery = `SELECT * FROM [dbo].[Movements] m`

		const artworksQuery = `
					SELECT 
							ma.movement_id,
							ma.image AS artworkImage,
							ma.title AS artworkTitle,
							ROW_NUMBER() OVER (PARTITION BY ma.movement_id ORDER BY ma.id) AS rowNum
					FROM [dbo].[MovementArtworks] ma
			`

		const [movementsResult, artworksResult] = await Promise.all([
			pool.query(movementsQuery),
			pool.query(artworksQuery),
		])

		const artworksByMovement: Record<number, ArtworkPreview[]> = {}
		artworksResult.recordset.forEach((artwork: any) => {
			if (artwork.rowNum <= 10) {
				if (!artworksByMovement[artwork.movement_id]) {
					artworksByMovement[artwork.movement_id] = []
				}
				artworksByMovement[artwork.movement_id].push({
					image: artwork.artworkImage,
					title: artwork.artworkTitle,
				})
			}
		})

		return movementsResult.recordset.map((movement: any) => ({
			id: movement.id,
			name: movement.name,
			year: movement.year,
			image: movement.movementImage,
			description: movement.description,
			artworks: artworksByMovement[movement.id] || [],
		}))
	} catch (error) {
		console.error(error)
		throw new Error('Ошибка при получении списка направлений')
	} finally {
		if (pool) {
			await pool.close()
		}
	}
}

type ArtworkPreview = {
	image: string
	title: string
}

type MovementWithArtworks = {
	id: number
	name: string
	year: number
	image: string
	artworks: ArtworkPreview[]
}

async function getMovementById(movementId: number) {
	let pool
	try {
		pool = await sql.connect(config)

		const [movementResult, representativesResult, artworksResult] =
			await Promise.all([
				pool
					.request()
					.input('movementId', sql.Int, movementId)
					.query('SELECT * FROM [dbo].[Movements] WHERE id = @movementId'),
				pool
					.request()
					.input('movementId', sql.Int, movementId)
					.query(
						'SELECT * FROM [dbo].[MovementRepresentatives] WHERE movement_id = @movementId'
					),
				pool
					.request()
					.input('movementId', sql.Int, movementId)
					.query(
						'SELECT * FROM [dbo].[MovementArtworks] WHERE movement_id = @movementId'
					),
			])

		if (movementResult.recordset.length === 0) {
			throw new Error('Направление не найдено')
		}

		return {
			...movementResult.recordset[0],
			representatives: representativesResult.recordset,
			artworks: artworksResult.recordset,
		}
	} catch (error) {
		console.error(error)
		throw new Error('Ошибка при получении данных направления')
	} finally {
		if (pool) {
			await pool.close()
		}
	}
}
