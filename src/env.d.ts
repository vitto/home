/// <reference path="../.astro/types.d.ts" />

declare global {
  // The installed Magma version, defined in astro.config.mjs
  const __MAGMA_VERSION__: string;
  interface Window {
    __sphereParentSection?: HTMLElement;
    THREE?: any;
    __sphereParallaxUpdate?: () => void;
  }
}

export {};
