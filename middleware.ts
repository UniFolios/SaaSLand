import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-route-type', 'admin')
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
} 