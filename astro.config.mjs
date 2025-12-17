import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // Update this to match your GitHub Pages URL
  site: 'https://vitto.github.io',
  // Base path for GitHub Pages project site (remove or set to '/' for user site)
  base: '/home',
});
