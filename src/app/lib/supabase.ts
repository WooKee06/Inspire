import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dmjmngbqvbbbrtwmnfcu.supabase.co'
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtam1uZ2JxdmJiYnJ0d21uZmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNTIyOTIsImV4cCI6MjA2MTYyODI5Mn0.ZFVKk5YOauIvzF2rQbvhQp5ruwhmJeR62UAx4sr3A8o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
