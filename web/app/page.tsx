import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken');

  // HAX
  // TODO: Make solid authorization with proper redirects
  if (accessToken) {
    redirect('/messages');
  } else {
    redirect('/login');
  }
}
