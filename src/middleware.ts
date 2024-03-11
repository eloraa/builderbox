import { NextRequest, NextResponse } from 'next/server';
import { verifyAuth } from './lib';

export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
      return Response.redirect(new URL('/', request.url));
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }
    if (!token) return;
    const verify = await verifyAuth(request, token);

    if (verify && request.nextUrl.pathname === '/') {
      return Response.redirect(new URL('/dashboard', request.url));
    }

    if (!verify && request.nextUrl.pathname.startsWith('/dashboard')) {
      return Response.redirect(new URL('/', request.url));
    }
  } catch (error) {
    console.error(error);
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.delete('token');
    return response;
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
