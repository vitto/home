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
});
