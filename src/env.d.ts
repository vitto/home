/// <reference path="../.astro/types.d.ts" />

declare global {
  interface Window {
    __sphereParentSection?: HTMLElement;
    THREE?: any;
    __sphereParallaxUpdate?: () => void;
  }
}

export {};
