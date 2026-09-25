// Kept free of GSAP so pages that only need smooth scrolling (blog, tags) don't download it.
export const reducedMotion = (): boolean => window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const finePointer = (): boolean => window.matchMedia('(hover: hover) and (pointer: fine)').matches
