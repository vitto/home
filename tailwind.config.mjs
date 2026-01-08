import magmaPreset from '@maggioli-design-system/styles';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [magmaPreset],
  content: ['./src/**/*.{astro,html,js,json,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'pulse-more': 'pulseMore 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blink: 'blink 0.6s forwards',
        'pulse-group': 'pulseGroup 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        pulseGroup: {
          '0%, 100%': {
            borderColor: 'rgb(var(--tone-neutral-04) / 1)',
            fill: 'rgb(var(--tone-neutral-04) / 1)',
          },
          '50%': {
            borderColor: 'rgb(var(--tone-neutral-04) / 0.05)',
            fill: 'rgb(var(--tone-neutral-04) / 0.05)',
          },
        },
        blink: {
          '0%, 50%': { opacity: '0' },
          '50%, 100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
