import { redirect } from 'next/navigation';

//const AUTH_COOKIE_NAME = 'site_authenticated';
export async function GET() {
  //const cookieStore = await cookies();
  //cookieStore.set(AUTH_COOKIE_NAME, 'true', {
    //httpOnly: true,
    //secure: true,
    //sameSite: 'strict',
    //maxAge: 60 * 60 * 24 * 7,
    //path: '/',
  //});

  redirect('/');
}

