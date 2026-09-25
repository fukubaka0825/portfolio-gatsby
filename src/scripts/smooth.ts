import Lenis from 'lenis'
import { finePointer, gsap, reducedMotion, ScrollTrigger } from './motion'

const NAV_OFFSET = -72

let lenis: Lenis | undefined

if (!reducedMotion()) {
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, anchors: false })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis?.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
}

const scrollToHash = (hash: string, immediate = false) => {
  const target = document.querySelector<HTMLElement>(hash)
  if (!target) return
  if (lenis) lenis.scrollTo(target, { offset: NAV_OFFSET, immediate, duration: 1.4 })
  else target.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth' })
}

document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>('a[href*="#"]')
  if (!a || a.origin !== location.origin || a.pathname !== location.pathname || !a.hash) return
  e.preventDefault()
  history.pushState(null, '', a.hash)
  scrollToHash(a.hash)
})

if (location.hash) requestAnimationFrame(() => scrollToHash(location.hash, true))

// Highlight the nav item for whichever section currently owns the middle of the viewport.
const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')]
const sections = links
  .map((l) => document.getElementById((l.dataset.navLink ?? '').replace('#', '')))
  .filter((s): s is HTMLElement => Boolean(s))
if (sections.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        for (const l of links)
          l.setAttribute('aria-current', String(l.dataset.navLink === `#${entry.target.id}`))
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  for (const s of sections) io.observe(s)
  // The hero has no nav item; observing it clears the highlight when you scroll back to the top.
  const top = document.getElementById('top')
  if (top) io.observe(top)
}
if (location.pathname.startsWith('/blog') || location.pathname.startsWith('/tags')) {
  for (const l of links) if (l.dataset.navLink === 'blog/') l.setAttribute('aria-current', 'true')
}

// Small pull toward the cursor so the pill buttons feel physical rather than static.
if (finePointer() && !reducedMotion()) {
  for (const el of document.querySelectorAll<HTMLElement>('[data-magnet]')) {
    const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' })
    const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' })
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      x((e.clientX - (r.left + r.width / 2)) * 0.3)
      y((e.clientY - (r.top + r.height / 2)) * 0.4)
    })
    el.addEventListener('pointerleave', () => {
      x(0)
      y(0)
    })
  }
}

export { lenis }
