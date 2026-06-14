import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { hostname, protocol } = new URL(request.url)

  if (hostname === 'orhanelektronikbilgisayar.com') {
    const wwwUrl = `${protocol}//www.${hostname}${request.nextUrl.pathname}${request.nextUrl.search}`
    return NextResponse.redirect(wwwUrl, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/(.*)'],
}
