import { cookies } from 'next/headers';

export const AUTH_COOKIE_NAME = 'site_authenticated';
export const CORRECT_PASSWORD = 'your-secret-password'; // Change this!

export function setAuthCookie() {
  const cookieStore = cookies();
  cookieStore.set(AUTH_COOKIE_NAME, 'true', {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
}

export function isAuthenticated() {
  const cookieStore = cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value === 'true';
}
