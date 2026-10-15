import type { APIContext } from 'astro';
export const prerender = false;
export function GET({ cookies, url }: APIContext) {
  const mode = url.searchParams.get('mode');
  if (mode && ['light', 'dark', 'system'].includes(mode)) {
    cookies.set('mdsPrefMode', mode, { path: '/', maxAge: 31536000, sameSite: 'lax' });
    cookies.delete('mdsPrefTheme', { path: '/' });
  }
  return new Response(null, { status: 204 });
}
