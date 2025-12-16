import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
  plugins: {
    'postcss-iconsauce': {
      content: [
        './src/**/*.{astro,js,json,ts,tsx,html}',
        './node_modules/@maggioli-design-system/**/*.{ts,tsx,js}',
      ],
      plugin: [
        require('@iconsauce/material-icons'),
        require('@iconsauce/mdi-svg'),
        require('@iconsauce/mgg-icons'),
      ],
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};

