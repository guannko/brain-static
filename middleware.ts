import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // Temporarily disabled until auth system is ready
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|register|css|js|img|video|$).*)'],
}