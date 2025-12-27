import magmaPreset from '@maggioli-design-system/styles';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [magmaPreset],
  content: ['./src/**/*.{astro,html,js,json,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'pulse-more': 'pulseMore 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionProperty: {
        cosmetic:
          'background-color, border-color, border-radius, box-shadow, color, fill, height, margin, opacity, padding, transform, width',
      },
      keyframes: {
        pulseMore: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.05' },
        },
      },
    },
  },
  plugins: [],
};
