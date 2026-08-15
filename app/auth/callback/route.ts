import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  const type = searchParams.get('type');

  // Handle email confirmation
  if (type === 'signup' && token) {
    return NextResponse.redirect(new URL('/auth/login?confirmed=true', request.url));
  }

  return NextResponse.redirect(new URL('/', request.url));
}
