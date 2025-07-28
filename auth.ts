import { cookies } from 'next/headers';

export const AUTH_COOKIE_NAME = 'site_authenticated';
export const CORRECT_PASSWORD = process.env.PASSWORD;

export async function setAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, 'true', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value === 'true';
}
