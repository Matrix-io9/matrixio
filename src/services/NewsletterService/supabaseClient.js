import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ebzlscnavmnomzzlobaq.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwMjQyOSwiZXhwIjoxOTU1MDc4NDI5fQ.P5lanzLE6Qao_ZPWNBrSnoda3orvWZLxjPkXIvm8vFc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)