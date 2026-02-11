import magmaPreset from '@maggioli-design-system/styles';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [magmaPreset],
  content: ['./src/**/*.{astro,html,js,json,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        'inset-xs-sharp-light': '0 0 0 1px rgb(var(--tone-neutral-01) / 0.05) inset',
        'inset-xs-sharp': '0 0 0 1px rgb(var(--tone-neutral-01) / 0.1) inset',
        'inset-sm-sharp': '0 0 0 2px rgb(var(--tone-neutral-01) / 0.1) inset',
      },
      containers: {
        '2xs': '6rem', // 96px
        xs: '8rem', // 128px
        sm: '10rem', // 160px
        md: '20rem', // 320px
        lg: '25rem', // 400px
        xl: '30rem', // 480px
        '2xl': '35rem', // 560px
        '3xl': '40rem', // 640px
      },
      aspectRatio: {
        card: '2 / 3',
      },
      animation: {
        'pulse-more': 'pulseMore 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blink: 'blink 0.6s forwards',
        'pulse-group': 'pulseGroup 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        intro: 'intro 0.5s cubic-bezier(0.19, 1, 0.22, 1) backwards',
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
        intro: {
          '0%': { transform: 'translate(0, 150%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [containerQueries],
};
