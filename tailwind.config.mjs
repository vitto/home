import magmaPreset from '@maggioli-design-system/styles';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [magmaPreset],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'pulse-more': 'pulseMore 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseMore: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.1' },
        },
      },
    },
  },
  plugins: [],
};

