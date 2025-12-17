/// <reference path="../.astro/types.d.ts" />

declare global {
  interface Window {
    __sphereParentSection?: HTMLElement;
    __locomotiveScroll?: any;
    LocomotiveScroll?: any;
  }
}

export {};
