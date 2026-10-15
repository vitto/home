import type { AstroCookies } from 'astro';

const MODES = ['light', 'dark', 'system'] as const;
type Mode = (typeof MODES)[number];

const isMode = (value: string | undefined): value is Mode => MODES.includes(value as Mode);

export function getPreferences(cookies: AstroCookies) {
  // Magma 2 stores the light / dark / system choice as `mdsPrefMode`;
  // Magma 1 called it `mdsPrefTheme`, still read for returning visitors.
  const stored = cookies.get('mdsPrefMode')?.value ?? cookies.get('mdsPrefTheme')?.value;
  const prefMode: Mode = isMode(stored) ? stored : 'system';
  return {
    mode: {
      value: prefMode,
      style: `--magma-pref-mode: ${prefMode};`,
      selector: `pref-mode-${prefMode}`,
    },
  };
}
