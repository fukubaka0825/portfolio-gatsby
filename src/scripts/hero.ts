import { Brush, type Stroke } from './brush'
import { finePointer, gsap, reducedMotion } from './motion'

/**
 * Letters are inline-blocks, so the browser may break a line between any two of them. Pinning every letter
 * to its resting width means the variable-font "breathing" only changes the glyph, never the line length,
 * so "Narikawa" can't spill its last "a" onto a third line and snap back.
 */
const pinLetterWidths = (chars: HTMLElement[]) => {
  for (const el of chars) {
    el.style.width = ''
    el.style.removeProperty('--w')
    el.style.removeProperty('--s')
  }
  // offsetWidth ignores transforms; the intro rotates letters, which would inflate a bounding-rect measurement.
  const widths = chars.map((el) => el.offsetWidth)
  chars.forEach((el, i) => {
    el.style.width = `${widths[i]}px`
  })
}

/** Weight/width of each letter eases toward the brush, like the name flinches from wet paint. */
const initVariableName = (hero: HTMLElement, chars: HTMLElement[]) => {
  const state = chars.map(() => ({ w: 800, s: 100 }))
  let px = -9999
  let py = -9999
  let running = false
  let rects: DOMRect[] = []

  const measure = () => {
    rects = chars.map((el) => el.getBoundingClientRect())
  }
  const tick = () => {
    const radius = Math.max(window.innerWidth * 0.16, 180)
    let settled = true
    chars.forEach((el, i) => {
      const r = rects[i]
      const d = Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2))
      const k = Math.max(0, 1 - d / radius) ** 1.5
      const st = state[i]
      const tw = 800 - 600 * k
      const ts = 100 - 25 * k
      st.w += (tw - st.w) * 0.14
      st.s += (ts - st.s) * 0.14
      if (Math.abs(tw - st.w) > 0.5 || Math.abs(ts - st.s) > 0.1) settled = false
      el.style.setProperty('--w', st.w.toFixed(1))
      el.style.setProperty('--s', st.s.toFixed(1))
    })
    // Stop the ticker once letters are at rest so the hero costs nothing while you read below it.
    if (settled && px < -9000) {
      gsap.ticker.remove(tick)
      running = false
    }
  }
  const start = () => {
    if (running) return
    running = true
    measure()
    gsap.ticker.add(tick)
  }

  hero.addEventListener('pointermove', (e) => {
    px = e.clientX
    py = e.clientY
    start()
  })
  hero.addEventListener('pointerleave', () => {
    px = -9999
    py = -9999
  })
  window.addEventListener('scroll', () => running && measure(), { passive: true })
}

/** A ring that shows the brush size; it swells when you slow down and pinches on a fast flick. */
const initCursor = (hero: HTMLElement, ring: HTMLElement, brush: Brush) => {
  const x = gsap.quickTo(ring, 'x', { duration: 0.18, ease: 'power3' })
  const y = gsap.quickTo(ring, 'y', { duration: 0.18, ease: 'power3' })
  const size = gsap.quickTo(ring, 'width', { duration: 0.25, ease: 'power3' })
  const sizeH = gsap.quickTo(ring, 'height', { duration: 0.25, ease: 'power3' })
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect()
    const overLink = Boolean((e.target as Element).closest('a, button'))
    x(e.clientX - r.left)
    y(e.clientY - r.top)
    const d = overLink ? 10 : brush.radius * 2.1
    size(d)
    sizeH(d)
    ring.style.opacity = '1'
  })
  hero.addEventListener('pointerleave', () => {
    ring.style.opacity = '0'
  })
}

/** Seeded wall: an invisible hand paints a few vertical streaks, like the wall behind the avatar, then lets them run. */
const paintIntro = (hero: HTMLElement, brush: Brush) => {
  const w = hero.clientWidth
  const h = hero.clientHeight
  const plan = [
    { fx: 0.06, y0: 0.06, len: 0.62, delay: 150, dur: 900 },
    { fx: 0.25, y0: 0.1, len: 0.42, delay: 420, dur: 700 },
    { fx: 0.58, y0: 0.14, len: 0.36, delay: 700, dur: 650 },
    { fx: 0.83, y0: 0.08, len: 0.55, delay: 950, dur: 850 },
  ]
  const t0 = performance.now()
  let i = 0
  for (const p of plan) {
    const k = i++
    const x0 = w * p.fx
    const y0 = h * p.y0
    const len = h * p.len
    const brushLife = 7000
    const start = t0 + p.delay
    let stroke: Stroke | undefined
    const step = (now: number) => {
      if (now < start) return requestAnimationFrame(step)
      const u = Math.min(1, (now - start) / p.dur)
      // Ease-out so the hand slows at the bottom: that is where the paint pools and drips.
      const e = 1 - (1 - u) ** 2.2
      const x = x0 + Math.sin(e * 5 + k) * 7
      const y = y0 + len * e
      if (!stroke) stroke = brush.start(x, y, now, brushLife, false)
      else brush.extend(stroke, x, y, now)
      if (u < 1) requestAnimationFrame(step)
      else {
        brush.drip(x + 3, y + 6, now, brushLife)
        if (k % 2 === 0) brush.drip(x - 9, y - len * 0.35, now, brushLife)
      }
      return undefined
    }
    requestAnimationFrame(step)
  }
}

const initPaint = (hero: HTMLElement, canvas: HTMLCanvasElement, ring: HTMLElement | null) => {
  const brush = new Brush(canvas, { baseWidth: finePointer() ? 26 : 18 })
  new ResizeObserver(() => brush.resize()).observe(hero)
  new IntersectionObserver(([e]) => brush.setVisible(e.isIntersecting)).observe(hero)

  const local = (e: PointerEvent) => {
    const r = hero.getBoundingClientRect()
    return [e.clientX - r.left, e.clientY - r.top] as const
  }
  let lastMove = 0
  hero.addEventListener('pointerdown', (e) => {
    brush.begin(...local(e))
  })
  hero.addEventListener('pointermove', (e) => {
    // A pause longer than a flick lifts the brush, so separate gestures don't get joined by a straight line.
    if (e.timeStamp - lastMove > 160) brush.end()
    lastMove = e.timeStamp
    // Touch: only a sideways drag paints; vertical drags stay scrolls (touch-action: pan-y hands them to the page).
    brush.move(...local(e))
  })
  hero.addEventListener('pointerleave', () => brush.end())
  hero.addEventListener('pointercancel', () => brush.end(0))
  hero.addEventListener('pointerup', (e) => {
    if (e.pointerType !== 'mouse') brush.end()
  })

  if (ring && finePointer()) initCursor(hero, ring, brush)
  paintIntro(hero, brush)
}

/** Reveal the role the way a chat model streams tokens: uneven chunks, uneven gaps. */
const streamText = (el: HTMLElement, caret: HTMLElement | null) => {
  const full = el.dataset.text ?? ''
  const tokens = full.match(/\s*[^\s,&]+[,]?|\s*&/g) ?? [full]
  let i = 0
  el.textContent = ''
  el.style.visibility = 'visible'
  const next = () => {
    if (i >= tokens.length) {
      caret?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 400, delay: 1800, fill: 'forwards' })
      return
    }
    el.textContent += tokens[i++]
    window.setTimeout(next, 40 + Math.random() * 110)
  }
  next()
}

export const initHero = () => {
  const hero = document.querySelector<HTMLElement>('[data-hero]')
  if (!hero) return
  const chars = [...hero.querySelectorAll<HTMLElement>('[data-char]')]
  const stream = hero.querySelector<HTMLElement>('[data-stream]')
  const caret = hero.querySelector<HTMLElement>('[data-caret]')
  const canvas = hero.querySelector<HTMLCanvasElement>('[data-paint]')
  const ring = hero.querySelector<HTMLElement>('[data-brush-ring]')

  const repin = () => pinLetterWidths(chars)
  document.fonts.ready.then(repin)
  let resizeTimer = 0
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(repin, 120)
  })

  if (reducedMotion()) {
    hero.classList.add('is-ready')
    return
  }

  // Start state is set in CSS (html.js) so nothing flashes before this module runs; hand it over to GSAP here.
  // y/x reset matters: GSAP parses the CSS translateY(115%) into `y` px, which would otherwise stick after yPercent → 0.
  gsap.set(chars, { x: 0, y: 0, yPercent: 115, rotate: 8 })
  gsap.set('[data-avatar]', { scale: 0.6, rotate: -20, opacity: 0 })
  hero.classList.add('is-ready')

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
  tl.to(chars, { yPercent: 0, rotate: 0, duration: 1.3, stagger: 0.035 })
    .to('[data-avatar]', { scale: 1, rotate: 0, opacity: 1, duration: 1.2 }, 0.35)
    .add(() => {
      if (stream) streamText(stream, caret)
    }, 0.55)

  if (canvas) initPaint(hero, canvas, ring)
  if (finePointer()) initVariableName(hero, chars)

  // Name drifts up and the avatar sinks as you leave the hero, so the exit has depth instead of a hard cut.
  gsap.to('[data-line]', {
    yPercent: -18,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  })
  gsap.to('[data-avatar-float]', {
    y: 120,
    rotate: 12,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  })
}
