import { createClient } from '@supabase/supabase-js'

// استدعاء القيم من ملف .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// تصدير العميل (Client) لاستخدامه في كل صفحات الموقع
export const supabase = createClient(supabaseUrl, supabaseAnonKey)