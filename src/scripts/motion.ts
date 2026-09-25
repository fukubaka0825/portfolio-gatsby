import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { finePointer, reducedMotion } from './env'
import { lenis } from './smooth'

gsap.registerPlugin(ScrollTrigger)

// ScrollTrigger reads the native scroll position; Lenis animates it, so each Lenis frame must nudge ScrollTrigger.
lenis?.on('scroll', ScrollTrigger.update)

export { finePointer, gsap, reducedMotion, ScrollTrigger }
