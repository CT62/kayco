import { NextResponse } from 'next/server';
import { CORRECT_PASSWORD, AUTH_COOKIE_NAME } from '@/auth';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { password } = await request.json();
  console.log(CORRECT_PASSWORD)
  
  if (password === CORRECT_PASSWORD) {
    console.log("WHY AINT THIS WORKK")
    const cookieStore = await cookies();
    cookieStore.set(AUTH_COOKIE_NAME, 'true', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

    return NextResponse.json({ success: true });
  }
  
  return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
}
