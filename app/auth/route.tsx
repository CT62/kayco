import { NextResponse } from 'next/server';
import { CORRECT_PASSWORD, setAuthCookie } from '@/auth';

export async function POST(request: Request) {
  const { password } = await request.json();
  
  if (password === CORRECT_PASSWORD) {
    setAuthCookie();
    return NextResponse.json({ success: true });
  }
  
  return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
}
