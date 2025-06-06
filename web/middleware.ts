import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  console.debug('Middleware się wywołuje');
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/contacts/:path*',
    '/messages/:path*',
    '/notifications/:path*',
    '/settings/:path*',
  ],
};
