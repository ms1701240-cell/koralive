import { createServerClient, type CookieOptions } from '@supabase/auth-helpers-nextjs'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // --- 1. إعداد الـ CSP لفك حظر الإعلانات والبث ---
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  
  // ضفنا هنا كل الدومينات اللي كانت ظاهرة في الخطأ عندك (google, ok.ru, mycdn, etc.)
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.doubleclick.net https://*.googletagservices.com https://imasdk.googleapis.com https://*.google-analytics.com http://*.ok.ru https://*.ok.ru http://*.mycdn.me https://*.mycdn.me;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https:;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src 'self' https://*.google.com https://*.doubleclick.net http://*.ok.ru https://*.ok.ru;
    connect-src 'self' https://*.google.com https://*.doubleclick.net https://*.supabase.co wss://*.supabase.co;
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, " ").trim();

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // تعيين الـ Headers في الاستجابة
  response.headers.set('Content-Security-Policy', cspHeader)

  // --- 2. كود Supabase الأصلي بتاعك ---
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
            request: { headers: request.headers },
          })
          response.cookies.set({ name, value, ...options })
          // نأكد وضع الـ CSP حتى لو حصل Set للـ Cookies
          response.headers.set('Content-Security-Policy', cspHeader)
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options })
          response = NextResponse.next({
            request: { headers: request.headers },
          })
          response.cookies.set({ name, value: '', ...options })
          response.headers.set('Content-Security-Policy', cspHeader)
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  if (!user && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (user && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}