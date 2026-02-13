import type { APIRoute } from 'astro';
import categoriesData from '../data/categories.json';
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

  // Filter out draft categories
  const visibleCategories = categoriesData.filter((category: any) => !category.draft);

  // Map category IDs to their data
  const categoryDataMap: Record<string, any> = {
    'design-systems': designSystemsData,
    'user-centered-design': userCenteredDesignData,
    'human-centered-ai-design': humanCenteredAiDesignData,
  };

  // Only include non-draft categories
  for (const category of visibleCategories) {
    const sectionPath = category.path;
    const categoryId = category.id;
    const data = categoryDataMap[categoryId];

    if (data) {
      urls.push(sectionPath);
      for (const p of data.principles) {
        urls.push(`${sectionPath}/${p.id}`);
      }
    }
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
