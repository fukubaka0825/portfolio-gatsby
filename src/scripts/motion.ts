import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const reducedMotion = (): boolean => window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const finePointer = (): boolean => window.matchMedia('(hover: hover) and (pointer: fine)').matches

export { gsap, ScrollTrigger }
