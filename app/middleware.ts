import { createServerClient, type CookieOptions } from '@supabase/auth-helpers-nextjs'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  // ... (نفس كود السوبابيس اللي فوق)

const { data: { user } } = await supabase.auth.getUser()

// 1. حماية صفحة الـ Admin فقط
// لو بيحاول يدخل أي صفحة بتبدأ بـ /admin وهو مش مسجل، ارميه على الـ login
if (!user && request.nextUrl.pathname.startsWith('/admin')) {
  return NextResponse.redirect(new URL('/login', request.url))
}

// 2. لو مسجل دخول وبيحاول يدخل صفحة الـ login، ارميه على الـ admin
if (user && request.nextUrl.pathname.startsWith('/login')) {
  return NextResponse.redirect(new URL('/admin', request.url))
}

return response
}

export const config = {
  matcher: [
    /*
     * استثناء ملفات الـ Static والـ Images عشان السيرفر ميهنجش وهو بيحملهم
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}