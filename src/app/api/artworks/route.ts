import { supabase } from '@/app/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const { data, error } = await supabase.from('movementartworks').select(`
        id,
        movement_id,
        title,
        artist,
        year,
        image,
        description
      `)

		if (error) throw error

		return NextResponse.json(data)
	} catch (error) {
		console.error('Supabase error:', error)
		return NextResponse.json(
			{ message: 'Error fetching artworks' },
			{ status: 500 }
		)
	}
}
