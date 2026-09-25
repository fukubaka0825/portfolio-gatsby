import { finePointer, gsap, reducedMotion } from './motion'

const NAV_BOTTOM = 72
const GAP = 16

export const initWorks = () => {
  const list = document.querySelector<HTMLElement>('[data-work-list]')
  const preview = document.querySelector<HTMLElement>('[data-preview]')
  if (!list || !preview || !finePointer()) return
  const imgs = [...preview.querySelectorAll<HTMLImageElement>('[data-preview-img]')]
  const still = reducedMotion()

  const xTo = gsap.quickTo(preview, 'x', { duration: still ? 0 : 0.55, ease: 'power3' })
  const yTo = gsap.quickTo(preview, 'y', { duration: still ? 0 : 0.55, ease: 'power3' })
  const rTo = gsap.quickTo(preview, 'rotation', { duration: 0.8, ease: 'power3' })
  let lastX = 0
  let row: HTMLElement | undefined
  let size = { width: 416, height: 260 }

  // Sit above the hovered row (or below it when there's no room) so the frame never covers the title being read.
  const place = (clientX: number, immediate = false) => {
    if (!row) return
    const r = row.getBoundingClientRect()
    const { width: w, height: h } = size
    const above = r.top - h - GAP
    const y = above >= NAV_BOTTOM ? above : Math.min(r.bottom + GAP, window.innerHeight - h - 8)
    const x = gsap.utils.clamp(8, window.innerWidth - w - 8, clientX - w / 2)
    if (immediate) gsap.set(preview, { x, y })
    else {
      xTo(x)
      yTo(y)
    }
  }

  // Keep the frame's area roughly constant while its shape morphs, so tall covers don't tower over wide slides.
  // Small sources (e.g. a 292px podcast banner) are capped near their native width instead of being blown up blurry.
  const sizeFor = (ratio: number, naturalWidth: number) => {
    const base = Math.min(416, window.innerWidth * 0.34)
    const area = base * (base / 1.6)
    const w = Math.min(base * 1.15, Math.sqrt(area * ratio), naturalWidth * 1.3)
    return { width: w, height: w / ratio }
  }

  let current = -1
  const show = (i: number) => {
    if (i === current) return
    const first = current === -1
    current = i
    const img = imgs[i]
    size = sizeFor(Number(img?.dataset.ratio) || 1.6, Number(img?.dataset.naturalWidth) || 9999)
    if (first || still) gsap.set(preview, size)
    else gsap.to(preview, { ...size, duration: 0.55, ease: 'expo.out', overwrite: 'auto' })
    imgs.forEach((im, k) => {
      gsap.to(im, {
        opacity: k === i ? 1 : 0,
        scale: k === i ? 1 : 1.12,
        duration: still ? 0 : 0.5,
        ease: 'power3',
      })
    })
  }

  // Lazy images would still be fetching on the first hover; start them the moment the pointer heads for the list.
  const warm = () => {
    for (const im of imgs) im.loading = 'eager'
  }
  list.addEventListener('pointerenter', warm, { once: true })
  new IntersectionObserver(
    (entries, io) => {
      if (entries.some((e) => e.isIntersecting)) {
        warm()
        io.disconnect()
      }
    },
    { rootMargin: '400px 0px' },
  ).observe(list)

  for (const el of list.querySelectorAll<HTMLElement>('[data-work]')) {
    el.addEventListener('pointerenter', (e) => {
      const first = current === -1
      row = el
      show(Number(el.dataset.work))
      place(e.clientX, first)
    })
  }
  list.addEventListener('pointermove', (e) => {
    place(e.clientX)
    if (!still) rTo(gsap.utils.clamp(-8, 8, (e.clientX - lastX) * 0.6))
    lastX = e.clientX
  })
  list.addEventListener('pointerenter', () => {
    gsap.to(preview, { opacity: 1, scale: 1, duration: still ? 0 : 0.4, ease: 'back.out(1.6)' })
  })
  list.addEventListener('pointerleave', () => {
    current = -1
    row = undefined
    gsap.to(preview, { opacity: 0, scale: 0.85, duration: still ? 0 : 0.3, ease: 'power2.in' })
  })
  gsap.set(preview, { scale: 0.85 })
}
