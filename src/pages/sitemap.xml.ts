import type { APIRoute } from 'astro';
import designSystemsData from '../data/design-systems.json';
import userCenteredDesignData from '../data/user-centered-design.json';
import humanCenteredAiDesignData from '../data/human-centered-ai-design.json';

const SITE = 'https://vittoriovittori.com';

export const prerender = false;

function url(path: string): string {
  return new URL(path, SITE).href;
}

function urlEntry(path: string): string {
  return `  <url>
    <loc>${url(path)}</loc>
  </url>`;
}

export const GET: APIRoute = async () => {
  const urls: string[] = ['/', '/privacy'];

  urls.push('/design-systems');
  for (const p of designSystemsData.principles) {
    urls.push(`/design-systems/${p.id}`);
  }

  urls.push('/user-centered-design');
  for (const p of userCenteredDesignData.principles) {
    urls.push(`/user-centered-design/${p.id}`);
  }

  urls.push('/human-centered-ai-design');
  for (const p of humanCenteredAiDesignData.principles) {
    urls.push(`/human-centered-ai-design/${p.id}`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(urlEntry).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
