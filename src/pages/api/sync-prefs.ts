import type { APIContext } from 'astro';
export const prerender = false;
export function GET({ cookies, url }: APIContext) {
  const theme = url.searchParams.get('theme');
  if (theme) cookies.set('mdsPrefTheme', theme, { path: '/', maxAge: 31536000, sameSite: 'lax' });
  return new Response(null, { status: 204 });
}
