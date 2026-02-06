import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // Custom domain configuration
  site: 'https://vittoriovittori.com',
  // Base path set to root for custom domain
  base: '/',
});
