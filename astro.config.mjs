import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // SSR settings to enable Cloudflare Pages
  // and avoid theming flash issues
  // when moving from a page to another
  output: 'server',
  adapter: cloudflare(),
  // Custom domain configuration
  site: 'https://vittoriovittori.com',
  // Base path set to root for custom domain
  base: '/',
  // Moved paths, kept alive for the links already out
  redirects: {
    // The Magma project page gave way to the Magma docs
    '/project/magma': 'https://magma-design-system.github.io/docs/',
    // The resume took the product designer role in its name
    '/assets/vittorio-vittori-ds-architect-ux-designer-resume.pdf':
      '/assets/vittorio-vittori-ds-architect-prd-designer-resume.pdf',
  },
});
