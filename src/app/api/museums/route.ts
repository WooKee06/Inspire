import { supabase } from '@/app/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const { data, error } = await supabase.from('museums').select(`
			id,
			name,
			preview_image,
			short_description,
			full_description,
			website_link,
			artworks (
				title,
				image,
				artist,
				year
			)
		`)

		if (error) {
			console.error('❌ Supabase fetch error:', error)
			return NextResponse.json(
				{ message: 'Ошибка получения музеев' },
				{ status: 500 }
			)
		}

		return NextResponse.json(data)
	} catch (e) {
		console.error('❌ Unexpected error:', e)
		return NextResponse.json({ message: 'Неизвестная ошибка' }, { status: 500 })
	}
}
