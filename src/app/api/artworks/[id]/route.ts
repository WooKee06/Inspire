import { supabase } from '@/app/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const url = new URL(request.url)
		const idParam = url.pathname.split('/').pop()

		if (!idParam || isNaN(Number(idParam))) {
			return NextResponse.json({ message: 'Invalid ID' }, { status: 400 })
		}

		const id = parseInt(idParam, 10)

		const { data, error } = await supabase
			.from('movementartworks')
			.select('*')
			.eq('id', id)
			.single()

		if (error) {
			console.error('Supabase error:', error)
			return NextResponse.json(
				{ message: 'Error fetching artwork' },
				{ status: 500 }
			)
		}

		if (!data) {
			return NextResponse.json(
				{ message: 'Artwork not found' },
				{ status: 404 }
			)
		}

		return NextResponse.json(data)
	} catch (error) {
		console.error('Unexpected error:', error)
		return NextResponse.json(
			{ message: 'Error fetching artwork' },
			{ status: 500 }
		)
	}
}
