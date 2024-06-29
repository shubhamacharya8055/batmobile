
import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = 'https://fzieeqwjktjculuyfweg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6aWVlcXdqa3RqY3VsdXlmd2VnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2NDU1NzAsImV4cCI6MjAzNTIyMTU3MH0.aQsd3-QJjxZfH8mgf84w0SYQrwclmC3_rTNTLjpINhk"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase