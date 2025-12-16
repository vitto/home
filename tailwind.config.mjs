import magmaPreset from '@maggioli-design-system/styles';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [magmaPreset],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'cursor-blink': 'blink 2s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

