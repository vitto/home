import type { AstroCookies } from 'astro';

export function getPreferences(cookies: AstroCookies) {
  const prefTheme = cookies.get('mdsPrefTheme')?.value || 'system';
  return {
    theme: {
      value: prefTheme,
      style: `--magma-pref-theme: ${prefTheme};`,
      selector: `pref-theme-${prefTheme}`,
    },
  };
}
