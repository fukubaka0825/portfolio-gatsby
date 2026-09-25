import { gsap, reducedMotion, ScrollTrigger } from './motion'

export const initCareer = () => {
  const root = document.querySelector<HTMLElement>('[data-career]')
  const trace = root?.querySelector<HTMLElement>('[data-trace]')
  if (!root || !trace) return
  const bars = [...trace.querySelectorAll<HTMLElement>('[data-bar]')]
  const ticks = [...trace.querySelectorAll<HTMLElement>('[data-at]')]
  const full = { s: Number(trace.dataset.start), e: Number(trace.dataset.end) }
  const view = { ...full }
  const spill = bars.filter((b) => 'spill' in b.dataset)

  const layout = () => {
    const w = view.e - view.s
    for (const b of bars) {
      const s = Number(b.dataset.s)
      const e = Number(b.dataset.e)
      b.style.left = `${((s - view.s) / w) * 100}%`
      b.style.width = `${((e - s) / w) * 100}%`
    }
    for (const t of ticks) {
      const at = Number(t.dataset.at)
      t.style.left = `${((at - view.s) / w) * 100}%`
    }
    for (const b of spill) {
      const label = b.querySelector<HTMLElement>('[data-label]')
      if (!label) continue
      b.classList.remove('is-narrow')
      b.classList.toggle('is-narrow', label.scrollWidth > b.clientWidth - 14)
    }
  }

  layout()
  new ResizeObserver(layout).observe(trace)

  // Zoom is the one place side roles become legible: three overlapping months-long spans vanish at 8-year scale.
  const buttons = [...trace.querySelectorAll<HTMLButtonElement>('[data-zoom]')]
  for (const btn of buttons) {
    btn.addEventListener('click', () => {
      for (const b of buttons) b.setAttribute('aria-pressed', String(b === btn))
      const target =
        btn.dataset.zoom === 'all'
          ? full
          : { s: Number(btn.dataset.zoomStart), e: Number(btn.dataset.zoomEnd) }
      gsap.to(view, {
        ...target,
        duration: reducedMotion() ? 0 : 1.1,
        ease: 'expo.inOut',
        onUpdate: layout,
      })
    })
  }

  // Hovering a bar lights its detail card and vice versa, so the chart and the prose read as one object.
  const cards = new Map(
    [...root.querySelectorAll<HTMLElement>('[data-role-card]')].map((c) => [c.dataset.roleCard, c]),
  )
  const light = (id: string | undefined) => {
    for (const b of bars) b.classList.toggle('is-dim', Boolean(id) && b.dataset.role !== id)
    for (const [cid, c] of cards) c.classList.toggle('is-lit', cid === id)
  }
  for (const b of bars) {
    b.addEventListener('pointerenter', () => light(b.dataset.role))
    b.addEventListener('pointerleave', () => light(undefined))
    b.addEventListener('focus', () => light(b.dataset.role))
    b.addEventListener('blur', () => light(undefined))
  }
  for (const [id, c] of cards) {
    c.addEventListener('pointerenter', () => {
      for (const b of bars) b.classList.toggle('is-dim', b.dataset.role !== id)
    })
    c.addEventListener('pointerleave', () => light(undefined))
  }

  if (reducedMotion()) return

  gsap.from(bars, {
    scaleX: 0,
    duration: 1.2,
    ease: 'expo.out',
    stagger: { each: 0.06, from: 'end' },
    scrollTrigger: { trigger: trace, start: 'top 80%', once: true },
  })

  const spine = root.querySelector<HTMLElement>('[data-spine]')
  const lanes = root.querySelector<HTMLElement>('[data-lanes]')
  if (spine && lanes) {
    gsap.fromTo(
      spine,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: lanes, start: 'top 60%', end: 'bottom 60%', scrub: 0.6 },
      },
    )
  }
  ScrollTrigger.refresh()
}
