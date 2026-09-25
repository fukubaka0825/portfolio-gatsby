import { finePointer, gsap, reducedMotion } from './motion'

export const initWorks = () => {
  const list = document.querySelector<HTMLElement>('[data-work-list]')
  const preview = document.querySelector<HTMLElement>('[data-preview]')
  if (!list || !preview || !finePointer()) return
  const imgs = [...preview.querySelectorAll<HTMLElement>('[data-preview-img]')]
  const still = reducedMotion()

  const xTo = gsap.quickTo(preview, 'x', { duration: still ? 0 : 0.55, ease: 'power3' })
  const yTo = gsap.quickTo(preview, 'y', { duration: still ? 0 : 0.55, ease: 'power3' })
  const rTo = gsap.quickTo(preview, 'rotation', { duration: 0.8, ease: 'power3' })
  let lastX = 0

  const onMove = (e: PointerEvent) => {
    const w = preview.offsetWidth
    const h = preview.offsetHeight
    // Flip to the left half near the right edge so the frame never covers the row being read.
    const x = e.clientX > window.innerWidth * 0.6 ? e.clientX - w - 32 : e.clientX + 32
    xTo(x)
    yTo(e.clientY - h / 2)
    if (!still) rTo(gsap.utils.clamp(-8, 8, (e.clientX - lastX) * 0.6))
    lastX = e.clientX
  }

  let current = -1
  const show = (i: number) => {
    if (i === current) return
    current = i
    imgs.forEach((img, k) => {
      gsap.to(img, {
        opacity: k === i ? 1 : 0,
        scale: k === i ? 1 : 1.12,
        duration: still ? 0 : 0.5,
        ease: 'power3',
      })
    })
  }

  for (const row of list.querySelectorAll<HTMLElement>('[data-work]')) {
    row.addEventListener('pointerenter', () => show(Number(row.dataset.work)))
  }
  list.addEventListener('pointermove', onMove)
  list.addEventListener('pointerenter', (e) => {
    const w = preview.offsetWidth
    gsap.set(preview, {
      x: e.clientX + 32 > window.innerWidth - w ? e.clientX - w - 32 : e.clientX + 32,
      y: e.clientY - preview.offsetHeight / 2,
    })
    gsap.to(preview, { opacity: 1, scale: 1, duration: still ? 0 : 0.4, ease: 'back.out(1.6)' })
  })
  list.addEventListener('pointerleave', () => {
    current = -1
    gsap.to(preview, { opacity: 0, scale: 0.85, duration: still ? 0 : 0.3, ease: 'power2.in' })
  })
  gsap.set(preview, { scale: 0.85 })
}
