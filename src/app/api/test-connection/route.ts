import { supabase } from '@/app/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const { data, error } = await supabase.from('museums').select('*')

		if (error) {
			console.error('❌ Supabase error:', error)
			return NextResponse.json(
				{ message: 'Ошибка подключения к Supabase' },
				{ status: 500 }
			)
		}

		console.log('✅ Подключение есть! Пример данных:', data)
		return NextResponse.json({ message: 'Подключение успешно', data })
	} catch (e) {
		console.error('❌ Ошибка:', e)
		return NextResponse.json({ message: 'Неизвестная ошибка' }, { status: 500 })
	}
}
