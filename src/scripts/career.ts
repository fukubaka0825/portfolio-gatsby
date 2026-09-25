import { gsap, reducedMotion, ScrollTrigger } from './motion'

const TINY_LABEL_PX = 34

export const initCareer = () => {
  const root = document.querySelector<HTMLElement>('[data-career]')
  const trace = root?.querySelector<HTMLElement>('[data-trace]')
  if (!root || !trace) return
  const bars = [...trace.querySelectorAll<HTMLElement>('[data-bar]')]
  const ticks = [...trace.querySelectorAll<HTMLElement>('[data-at]')]
  const scroller = trace.querySelector<HTMLElement>('[data-trace-scroller]')
  const full = { s: Number(trace.dataset.start), e: Number(trace.dataset.end) }
  const view = { ...full }

  const laneLabel = trace.querySelector<HTMLElement>('[data-lane-label]')

  const layout = () => {
    const w = view.e - view.s
    const firstTrack = bars[0]?.parentElement
    const trackWidth = firstTrack?.clientWidth ?? 0
    // Month labels need ~34px each; on narrow tracks keep every other one so they don't collide.
    const thin = trackWidth / w < 34
    for (const t of ticks) {
      const at = Number(t.dataset.at)
      const f = (at - view.s) / w
      t.style.left = `${f * 100}%`
      if (!t.textContent) continue
      // Text ticks centred on the very edge would be sliced in half by the clipped track.
      const edge = f < 0.02 || f > 0.97
      const skipped = thin && t.classList.contains('month-tick') && at % 2 === 1
      t.style.visibility = edge || skipped ? 'hidden' : ''
    }

    // The part of each track actually on screen: right of the sticky lane labels, inside the sideways scroller.
    const trackRect = firstTrack?.getBoundingClientRect()
    const scrollRect = scroller?.getBoundingClientRect()
    const visStart = trackRect
      ? Math.max(0, (laneLabel?.getBoundingClientRect().right ?? trackRect.left) + 4 - trackRect.left)
      : 0
    const visEnd =
      trackRect && scrollRect ? Math.min(trackWidth, scrollRect.right - trackRect.left) : trackWidth

    for (const b of bars) {
      const s = Number(b.dataset.s)
      const e = Number(b.dataset.e)
      b.style.left = `${((s - view.s) / w) * 100}%`
      b.style.width = `${((e - s) / w) * 100}%`

      const label = b.querySelector<HTMLElement>('[data-label]')
      if (!label || !trackWidth) continue
      // A span that starts off-screen (zoomed, or scrolled sideways on a phone) slides its label into view.
      const leftPx = ((s - view.s) / w) * trackWidth
      const rightPx = ((e - view.s) / w) * trackWidth
      const offset = Math.max(0, Math.min(visStart - leftPx, rightPx - leftPx))
      label.style.marginLeft = offset > 0 ? `${offset}px` : ''
      const visible = Math.min(rightPx, visEnd) - Math.max(leftPx, visStart)
      b.classList.remove('is-narrow', 'is-tiny')
      if ('spill' in b.dataset) b.classList.toggle('is-narrow', label.scrollWidth > visible - 14)
      else b.classList.toggle('is-tiny', visible < TINY_LABEL_PX)
    }
  }

  new ResizeObserver(layout).observe(trace)
  // On phones the chart scrolls sideways; open it on the recent end, where the side roles and the current job are.
  if (scroller && scroller.scrollWidth > scroller.clientWidth) scroller.scrollLeft = scroller.scrollWidth
  layout()
  let queued = false
  scroller?.addEventListener(
    'scroll',
    () => {
      if (queued) return
      queued = true
      requestAnimationFrame(() => {
        queued = false
        layout()
      })
    },
    { passive: true },
  )

  // Zoom is the one place side roles become legible: three overlapping months-long spans vanish at 8-year scale.
  const buttons = [...trace.querySelectorAll<HTMLButtonElement>('[data-zoom]')]
  for (const btn of buttons) {
    btn.addEventListener('click', () => {
      for (const b of buttons) b.setAttribute('aria-pressed', String(b === btn))
      const zoomed = btn.dataset.zoom !== 'all'
      trace.toggleAttribute('data-zoomed', zoomed)
      const target = zoomed ? { s: Number(btn.dataset.zoomStart), e: Number(btn.dataset.zoomEnd) } : full
      // The zoomed range fills the whole track, so on phones start from its beginning; the full view opens on "now".
      scroller?.scrollTo({
        left: zoomed ? 0 : scroller.scrollWidth,
        behavior: reducedMotion() ? 'auto' : 'smooth',
      })
      gsap.to(view, {
        ...target,
        duration: reducedMotion() ? 0 : 1.1,
        ease: 'expo.inOut',
        onUpdate: layout,
      })
    })
  }

  const tip = trace.querySelector<HTMLElement>('[data-tip]')
  const tipTitle = tip?.querySelector<HTMLElement>('[data-tip-title-slot]')
  const tipSub = tip?.querySelector<HTMLElement>('[data-tip-sub-slot]')
  const showTip = (b: HTMLElement) => {
    if (!tip || !tipTitle || !tipSub) return
    tipTitle.textContent = b.dataset.tipTitle ?? ''
    tipSub.textContent = b.dataset.tipSub ?? ''
    const t = trace.getBoundingClientRect()
    const r = b.getBoundingClientRect()
    const track = b.parentElement?.getBoundingClientRect() ?? t
    const visLeft = Math.max(r.left, track.left)
    const visRight = Math.min(r.right, track.right)
    const cx = (visLeft + visRight) / 2 - t.left
    const x = gsap.utils.clamp(8, t.width - tip.offsetWidth - 8, cx - tip.offsetWidth / 2)
    tip.style.transform = `translate(${x}px, ${r.top - t.top - tip.offsetHeight - 8}px)`
    tip.classList.add('is-on')
  }
  const hideTip = () => tip?.classList.remove('is-on')

  // Hovering a bar lights its detail card and vice versa, so the chart and the prose read as one object.
  const cards = new Map(
    [...root.querySelectorAll<HTMLElement>('[data-role-card]')].map((c) => [c.dataset.roleCard, c]),
  )
  const light = (id: string | undefined) => {
    for (const b of bars) b.classList.toggle('is-dim', Boolean(id) && b.dataset.role !== id)
    for (const [cid, c] of cards) c.classList.toggle('is-lit', cid === id)
  }
  for (const b of bars) {
    b.addEventListener('pointerenter', () => {
      light(b.dataset.role)
      showTip(b)
    })
    b.addEventListener('pointerleave', () => {
      light(undefined)
      hideTip()
    })
    // Tapping a bar also focuses it; only keyboard focus should light things up, or the dimming sticks on phones.
    b.addEventListener('focus', () => {
      if (!b.matches(':focus-visible')) return
      light(b.dataset.role)
      showTip(b)
    })
    b.addEventListener('blur', () => {
      light(undefined)
      hideTip()
    })
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
