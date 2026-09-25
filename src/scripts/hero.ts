import { finePointer, gsap, reducedMotion } from './motion'

type Point = { x: number; y: number; t: number }
type Stroke = { points: Point[]; seed: number; width: number }

const PAINT_LIFE = 2600
const BRISTLES = 7

const rand = (seed: number) => {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
}

/** Dry-brush white streaks like the ones behind the avatar; each stroke is a bundle of bristle lines. */
const initPaint = (hero: HTMLElement, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const strokes: Stroke[] = []
  let active: Stroke | undefined
  let dpr = 1
  let running = false

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = hero.clientWidth * dpr
    canvas.height = hero.clientHeight * dpr
  }
  resize()
  new ResizeObserver(resize).observe(hero)

  const draw = () => {
    const now = performance.now()
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    for (const s of strokes) {
      s.points = s.points.filter((p) => now - p.t < PAINT_LIFE)
      // Seeded intro strokes carry future timestamps so they appear to be painted in over time.
      const pts = s.points.filter((p) => p.t <= now)
      if (pts.length < 2) continue
      const r = rand(s.seed)
      for (let b = 0; b < BRISTLES; b++) {
        const offset = (b / (BRISTLES - 1) - 0.5) * s.width
        const thickness = 0.6 + r() * 2.4
        const skip = r() * 0.25
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1]
          const c = pts[i]
          const age = (now - c.t) / PAINT_LIFE
          if (r() < skip) continue
          const dx = c.x - a.x
          const dy = c.y - a.y
          const len = Math.hypot(dx, dy) || 1
          const nx = -dy / len
          const ny = dx / len
          ctx.strokeStyle = `rgba(255,255,255,${(1 - age) ** 1.6 * (0.55 + r() * 0.4)})`
          ctx.lineWidth = thickness
          ctx.beginPath()
          ctx.moveTo(a.x + nx * offset, a.y + ny * offset)
          ctx.lineTo(c.x + nx * offset, c.y + ny * offset)
          ctx.stroke()
        }
      }
    }
    for (let i = strokes.length - 1; i >= 0; i--)
      if (strokes[i].points.length < 2 && strokes[i] !== active) strokes.splice(i, 1)
    if (strokes.length) requestAnimationFrame(draw)
    else running = false
  }
  const kick = () => {
    if (running) return
    running = true
    requestAnimationFrame(draw)
  }

  const add = (x: number, y: number) => {
    const now = performance.now()
    const last = active?.points.at(-1)
    if (!active || (last && now - last.t > 140)) {
      active = { points: [], seed: Math.floor(Math.random() * 1e9) + 1, width: 18 + Math.random() * 16 }
      strokes.push(active)
    }
    if (last && Math.hypot(x - last.x, y - last.y) < 4) return
    active.points.push({ x, y, t: now })
    kick()
  }

  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect()
    add(e.clientX - r.left, e.clientY - r.top)
  })
  hero.addEventListener('pointerleave', () => {
    active = undefined
  })

  // Idle hint on load: a few vertical streaks, so visitors discover the brush without being told.
  const w = hero.clientWidth
  const h = hero.clientHeight
  const seeds = [0.08, 0.22, 0.61, 0.9]
  seeds.forEach((fx, i) => {
    const stroke: Stroke = { points: [], seed: 97 * (i + 3), width: 20 + i * 5 }
    const x0 = w * fx
    const y0 = h * (0.05 + i * 0.04)
    const len = h * (0.35 + (i % 2) * 0.2)
    const start = performance.now() + 250 + i * 160
    const steps = 22
    for (let k = 0; k <= steps; k++) {
      stroke.points.push({ x: x0 + Math.sin(k / 4 + i) * 6, y: y0 + (len * k) / steps, t: start + k * 18 })
    }
    strokes.push(stroke)
  })
  kick()
}

/** Weight/width of each letter eases toward the cursor, like the name is breathing under your hand. */
const initVariableName = (hero: HTMLElement, chars: HTMLElement[]) => {
  const state = chars.map(() => ({ w: 800, s: 100 }))
  let px = -9999
  let py = -9999
  hero.addEventListener('pointermove', (e) => {
    px = e.clientX
    py = e.clientY
  })
  hero.addEventListener('pointerleave', () => {
    px = -9999
    py = -9999
  })
  gsap.ticker.add(() => {
    const radius = Math.max(window.innerWidth * 0.16, 180)
    chars.forEach((el, i) => {
      const r = el.getBoundingClientRect()
      const d = Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2))
      const k = Math.max(0, 1 - d / radius) ** 1.5
      const st = state[i]
      st.w += (800 - 600 * k - st.w) * 0.14
      st.s += (100 - 25 * k - st.s) * 0.14
      el.style.setProperty('--w', st.w.toFixed(1))
      el.style.setProperty('--s', st.s.toFixed(1))
    })
  })
}

/** Reveal the role the way a chat model streams tokens: uneven chunks, uneven gaps. */
const streamText = (el: HTMLElement, caret: HTMLElement | null) => {
  const full = el.dataset.text ?? el.textContent ?? ''
  const tokens = full.match(/\s*[^\s,&]+[,]?|\s*&/g) ?? [full]
  el.textContent = ''
  let i = 0
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

  if (reducedMotion()) return

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
  tl.from(chars, { yPercent: 115, rotate: 8, duration: 1.3, stagger: 0.035 })
    .from('[data-avatar]', { scale: 0.6, rotate: -20, opacity: 0, duration: 1.2 }, 0.35)
    .add(() => {
      if (stream) streamText(stream, caret)
    }, 0.55)

  if (canvas) initPaint(hero, canvas)
  if (finePointer()) initVariableName(hero, chars)

  // Name drifts up and the avatar sinks as you leave the hero, so the exit has depth instead of a hard cut.
  gsap.to('[data-line]', {
    yPercent: -18,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  })
  gsap.to('[data-avatar]', {
    y: 120,
    rotate: 12,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  })
}
