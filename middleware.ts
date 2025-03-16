import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const adminToken = request.cookies.get('admin_token')
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = request.nextUrl.pathname === '/admin/login'

  // Add pathname to headers
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', request.nextUrl.pathname)

  // If trying to access admin routes without auth token
  if (isAdminRoute && !isLoginPage && !adminToken?.value) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  // If trying to access login page with valid auth token
  if (isLoginPage && adminToken?.value === 'authenticated') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/admin/:path*']
} 