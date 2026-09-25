/**
 * Dry-brush paint engine for the hero wall.
 *
 * The avatar's background is a yellow wall with white, streaky brush marks. This recreates that material:
 * a stroke is a bundle of bristles that each carry their own ink, so marks start dense, break up as the
 * brush runs dry, pool and drip when the hand slows down, and spatter on a fast flick.
 *
 * Everything is kept as vector data and redrawn per frame (instead of accumulating on a bitmap) so fading
 * is exact: 8-bit alpha fades on an accumulated canvas stall and leave permanent ghost smears.
 */

type Sample = { x: number; y: number; t: number; w: number; nx: number; ny: number; d: number }
type Bristle = { off: number; thick: number; ink: number; decay: number; seed: number; tint: string }
export type Stroke = {
  samples: Sample[]
  bristles: Bristle[]
  raw: { x: number; y: number; t: number }[]
  life: number
  /** Scripted intro strokes move fast but shouldn't fling paint everywhere. */
  spatter: boolean
  radius: number
}
type Drip = { x: number; y: number; len: number; max: number; w: number; born: number; life: number }
type Spot = { x: number; y: number; r: number; born: number; life: number }

export type BrushOptions = { baseWidth?: number; life?: number }

const WET_MS = 900
const SPACING = 2.5
const BUCKETS = 10

const hash = (a: number, b: number) => {
  const s = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453
  return s - Math.floor(s)
}

const makeBristles = (seed: number, count: number): Bristle[] =>
  Array.from({ length: count }, (_, i) => {
    const r = (k: number) => hash(seed + i * 7.1, k)
    // Bristles near the edge of the brush hold less paint, which is what makes real dry-brush marks ragged.
    const off = (i / (count - 1)) * 2 - 1 + (r(1) - 0.5) * 0.12
    const edge = Math.abs(off)
    return {
      off,
      thick: 0.5 + r(2) * 2.2,
      ink: 1.25 - edge * 0.55 + r(3) * 0.25,
      // ~1200–2500px of paint per load: long enough to sign your name, short enough to see it run dry.
      decay: 0.00045 + r(4) * 0.0005 + edge * 0.00035,
      seed: seed + i * 131,
      tint: r(5) > 0.8 ? '255,250,232' : '255,255,255',
    }
  })

export class Brush {
  private ctx: CanvasRenderingContext2D
  private strokes: Stroke[] = []
  private drips: Drip[] = []
  private spots: Spot[] = []
  private active: Stroke | undefined
  private raf = 0
  private dpr = 1
  private width = 0
  private height = 0
  private visible = true
  private lastDrip = 0
  readonly baseWidth: number
  readonly life: number
  /** Current brush radius, exposed so the cursor ring can breathe with the stroke. */
  radius: number

  constructor(
    private canvas: HTMLCanvasElement,
    opts: BrushOptions = {},
  ) {
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('2d context unavailable')
    this.ctx = ctx
    this.baseWidth = opts.baseWidth ?? 20
    this.life = opts.life ?? 5200
    this.radius = this.baseWidth
    this.resize()
  }

  resize() {
    // 1.5x is visually indistinguishable for soft paint and saves ~45% fill cost on retina screens.
    this.dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const r = this.canvas.getBoundingClientRect()
    this.width = r.width
    this.height = r.height
    this.canvas.width = Math.round(r.width * this.dpr)
    this.canvas.height = Math.round(r.height * this.dpr)
    this.kick()
  }

  setVisible(v: boolean) {
    this.visible = v
    if (v) this.kick()
  }

  /** Starts an independent stroke. The pointer uses `begin`/`move`/`end`; scripted painters keep their own handles. */
  start(x: number, y: number, t = performance.now(), life = this.life, spatter = true): Stroke {
    const seed = Math.floor(hash(x, y + t) * 1e6) + 1
    const stroke: Stroke = {
      samples: [],
      bristles: makeBristles(seed, 22),
      raw: [{ x, y, t }],
      life,
      spatter,
      radius: this.baseWidth,
    }
    this.strokes.push(stroke)
    return stroke
  }

  begin(x: number, y: number, t = performance.now()) {
    this.active = this.start(x, y, t)
    this.radius = this.baseWidth
  }

  move(x: number, y: number, t = performance.now()) {
    if (!this.active) return this.begin(x, y, t)
    this.extend(this.active, x, y, t)
    this.radius = this.active.radius
  }

  end(dripChance = 0.35) {
    if (this.active) this.finish(this.active, dripChance)
    this.active = undefined
  }

  extend(s: Stroke, x: number, y: number, t = performance.now()) {
    const last = s.raw[s.raw.length - 1]
    const dist = Math.hypot(x - last.x, y - last.y)
    if (dist < 1.5) return
    const dt = Math.max(1, t - last.t)
    const speed = dist / dt

    // Slow hand = pressed brush (wide, wet); fast flick = only the tips touch.
    const target = this.baseWidth * Math.min(1.35, Math.max(0.4, 1.3 - speed * 0.32))
    s.radius += (target - s.radius) * 0.22

    s.raw.push({ x, y, t })
    this.interpolate(s, s.radius)

    if (s.spatter && speed > 2.6) this.spatter(x, y, x - last.x, y - last.y, speed, t)
    if (speed < 0.09 && t - this.lastDrip > 380 && this.inkLeft(s) > 0.45 && hash(x, t) > 0.45) {
      this.drip(x + (hash(t, x) - 0.5) * s.radius, y + s.radius * 0.4, t, s.life)
    }
    this.kick()
  }

  finish(s: Stroke, dripChance = 0.35) {
    if (s.samples.length < 4) return
    const tail = s.samples[s.samples.length - 1]
    if (hash(tail.x, tail.t) < dripChance && this.inkLeft(s) > 0.3)
      this.drip(tail.x, tail.y + tail.w * 0.3, tail.t, s.life)
  }

  /** Force a drip at a point; the intro uses this so the painted wall visibly runs. */
  drip(x: number, y: number, t = performance.now(), life = this.life) {
    this.lastDrip = t
    this.drips.push({
      x,
      y,
      len: 0,
      max: 30 + hash(x, y) * 110,
      w: 1.4 + hash(y, x) * 2.4,
      born: t,
      life: life + 1500,
    })
    this.kick()
  }

  private inkLeft(s: Stroke) {
    const d = s.samples.at(-1)?.d ?? 0
    return s.bristles.reduce((a, b) => a + Math.max(0, b.ink - d * b.decay), 0) / s.bristles.length
  }

  private spatter(x: number, y: number, dx: number, dy: number, speed: number, t: number) {
    const len = Math.hypot(dx, dy) || 1
    const n = 2 + Math.floor(hash(x, y) * 4)
    for (let i = 0; i < n; i++) {
      const k = hash(x + i, t)
      const throwDist = 12 + k * 30 * Math.min(speed, 5)
      const side = (hash(t, i) - 0.5) * 26
      this.spots.push({
        x: x + (dx / len) * throwDist + (-dy / len) * side,
        y: y + (dy / len) * throwDist + (dx / len) * side,
        r: 0.7 + hash(i, x) * 2.6,
        born: t,
        life: this.life,
      })
    }
  }

  /** Catmull-Rom through the last raw points, resampled at a fixed spacing so bristles stay smooth at any speed. */
  private interpolate(s: Stroke, w: number) {
    const r = s.raw
    const n = r.length
    if (n < 2) return
    const p0 = r[Math.max(0, n - 3)]
    const p1 = r[n - 2]
    const p2 = r[n - 1]
    const p3 = p2
    const segLen = Math.hypot(p2.x - p1.x, p2.y - p1.y)
    const steps = Math.max(1, Math.ceil(segLen / SPACING))
    const prevW = s.samples.at(-1)?.w ?? w
    for (let i = 1; i <= steps; i++) {
      const u = i / steps
      const u2 = u * u
      const u3 = u2 * u
      const x =
        0.5 *
        (2 * p1.x +
          (-p0.x + p2.x) * u +
          (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * u2 +
          (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * u3)
      const y =
        0.5 *
        (2 * p1.y +
          (-p0.y + p2.y) * u +
          (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * u2 +
          (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * u3)
      const prev = s.samples.at(-1)
      const d = prev ? prev.d + Math.hypot(x - prev.x, y - prev.y) : 0
      let nx = 0
      let ny = 1
      if (prev) {
        const tx = x - prev.x
        const ty = y - prev.y
        const tl = Math.hypot(tx, ty) || 1
        nx = -ty / tl
        ny = tx / tl
      }
      s.samples.push({ x, y, t: p1.t + (p2.t - p1.t) * u, w: prevW + (w - prevW) * u, nx, ny, d })
    }
    if (s.samples.length > 1 && s.samples[0].nx === 0 && s.samples[0].ny === 1) {
      s.samples[0].nx = s.samples[1].nx
      s.samples[0].ny = s.samples[1].ny
    }
  }

  private fade(age: number, life: number) {
    if (age < WET_MS) return 1
    const k = (age - WET_MS) / (life - WET_MS)
    return k >= 1 ? 0 : (1 - k) ** 1.8
  }

  private kick() {
    if (!this.raf && this.visible) this.raf = requestAnimationFrame(this.frame)
  }

  private frame = (now: number) => {
    this.raf = 0
    const { ctx } = this
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)
    ctx.clearRect(0, 0, this.width, this.height)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    this.strokes = this.strokes.filter(
      (s) => s === this.active || now - (s.samples.at(-1)?.t ?? now) < s.life,
    )
    for (const s of this.strokes) this.drawStroke(s, now)

    this.drips = this.drips.filter((d) => now - d.born < d.life)
    for (const d of this.drips) {
      // Runs fast, then slows as the paint thickens, like real drips on a wall.
      d.len += (d.max - d.len) * 0.035
      const a = this.fade(now - d.born, d.life) * 0.85
      if (a <= 0) continue
      const g = ctx.createLinearGradient(d.x, d.y, d.x, d.y + d.len)
      g.addColorStop(0, `rgba(255,255,255,${a})`)
      g.addColorStop(1, `rgba(255,255,255,${a * 0.75})`)
      ctx.strokeStyle = g
      ctx.lineWidth = d.w
      ctx.beginPath()
      ctx.moveTo(d.x, d.y)
      ctx.lineTo(d.x, d.y + d.len)
      ctx.stroke()
      ctx.fillStyle = `rgba(255,255,255,${a})`
      ctx.beginPath()
      ctx.arc(d.x, d.y + d.len, d.w * 1.25, 0, Math.PI * 2)
      ctx.fill()
    }

    this.spots = this.spots.filter((p) => now - p.born < p.life)
    for (const p of this.spots) {
      ctx.fillStyle = `rgba(255,255,255,${this.fade(now - p.born, p.life) * 0.9})`
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    }

    if (this.strokes.length || this.drips.length || this.spots.length) this.kick()
  }

  private drawStroke(s: Stroke, now: number) {
    const { ctx } = this
    const pts = s.samples.filter((p) => p.t <= now)
    if (pts.length < 2) return
    for (const b of s.bristles) {
      const paths: (Path2D | undefined)[] = new Array(BUCKETS)
      let prevBucket = -1
      let prevX = 0
      let prevY = 0
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        const ink = b.ink - p.d * b.decay
        if (ink <= 0) break
        const x = p.x + p.nx * b.off * p.w
        const y = p.y + p.ny * b.off * p.w
        // As a bristle runs dry it touches the wall intermittently: that's the broken, scratchy tail.
        const dryness = Math.max(0, 1 - ink * 2.2)
        const skip = hash(b.seed, i >> 1) < dryness * 0.9
        const alpha = Math.min(1, ink * 1.35) * this.fade(now - p.t, s.life)
        const bucket = skip || alpha <= 0.02 ? -1 : Math.min(BUCKETS - 1, Math.floor(alpha * BUCKETS))
        if (bucket >= 0 && i > 0) {
          let path = paths[bucket]
          if (!path) {
            path = new Path2D()
            paths[bucket] = path
          }
          if (bucket !== prevBucket) path.moveTo(prevX, prevY)
          path.lineTo(x, y)
        }
        prevBucket = bucket
        prevX = x
        prevY = y
      }
      ctx.lineWidth = b.thick * (0.55 + (pts[0].w / this.baseWidth) * 0.6)
      paths.forEach((path, k) => {
        if (!path) return
        ctx.strokeStyle = `rgba(${b.tint},${((k + 0.5) / BUCKETS) * 0.92})`
        ctx.stroke(path)
      })
    }
  }
}
