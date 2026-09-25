import Lenis from 'lenis'
import { finePointer, reducedMotion } from './env'

const NAV_OFFSET = -72

export const lenis: Lenis | undefined = reducedMotion()
  ? undefined
  : new Lenis({ lerp: 0.11, wheelMultiplier: 1, anchors: false, autoRaf: true })

/** Scrolling alone leaves keyboard focus on the link; move it so the next Tab continues from the target. */
const focusTarget = (target: HTMLElement) => {
  if (!target.matches('a[href], button, input, select, textarea, [tabindex]'))
    target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })
}

const scrollToHash = (hash: string, { immediate = false, focus = true } = {}) => {
  let target: HTMLElement | null = null
  try {
    target = document.querySelector<HTMLElement>(decodeURIComponent(hash))
  } catch {
    return
  }
  if (!target) return
  if (lenis) lenis.scrollTo(target, { offset: NAV_OFFSET, immediate, duration: 1.4 })
  else target.scrollIntoView({ behavior: immediate || reducedMotion() ? 'auto' : 'smooth' })
  if (focus) focusTarget(target)
}

document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>('a[href*="#"]')
  if (!a || a.origin !== location.origin || a.pathname !== location.pathname || !a.hash) return
  e.preventDefault()
  history.pushState(null, '', a.hash)
  scrollToHash(a.hash)
})

if (location.hash) requestAnimationFrame(() => scrollToHash(location.hash, { immediate: true, focus: false }))

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
  // Sections without a nav item (hero, footer) clear the highlight instead of leaving a stale one lit.
  for (const id of ['top', 'contact']) {
    const el = document.getElementById(id)
    if (el) io.observe(el)
  }
}
const section = document.body.dataset.section
if (section)
  for (const l of links) if (l.dataset.navLink === `${section}/`) l.setAttribute('aria-current', 'true')

// The nav pills are ink; over ink sections they would vanish, so they switch to a lifted surface there.
const dark = [...document.querySelectorAll<HTMLElement>('[data-surface="dark"]')]
if (dark.length) {
  const onDark = new Set<Element>()
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) onDark.add(e.target)
        else onDark.delete(e.target)
      }
      document.documentElement.toggleAttribute('data-nav-on-dark', onDark.size > 0)
    },
    // Only the thin band just under the top edge, where the pills actually sit.
    { rootMargin: '-12px 0px -92% 0px' },
  )
  for (const d of dark) io.observe(d)
}

// Small pull toward the cursor so the pill buttons feel physical rather than static.
if (finePointer() && !reducedMotion()) {
  for (const el of document.querySelectorAll<HTMLElement>('[data-magnet]')) {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - (r.left + r.width / 2)) * 0.3
      const y = (e.clientY - (r.top + r.height / 2)) * 0.4
      el.style.transform = `translate(${x}px, ${y}px)`
    })
    el.addEventListener('pointerleave', () => {
      el.style.transform = ''
    })
  }
}
