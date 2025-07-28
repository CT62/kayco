import { cookies } from 'next/headers';

export const AUTH_COOKIE_NAME = 'site_authenticated';
export const CORRECT_PASSWORD = process.env.PASSWORD;

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value === 'true';
}
