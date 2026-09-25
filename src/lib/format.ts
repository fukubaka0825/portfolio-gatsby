const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const monthIndex = (ym: string): number => {
  const [y, m] = ym.split('-').map(Number)
  return y * 12 + (m - 1)
}

export const nowMonth = (): string => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

export const formatMonth = (ym: string): string => {
  const [y, m] = ym.split('-').map(Number)
  return `${MONTHS[m - 1]} ${y}`
}

/** Inclusive of both ends, matching how LinkedIn counts "Mar 2025 – Aug 2025 · 6 mos". */
export const durationLabel = (start: string, end: string | null): string => {
  const months = monthIndex(end ?? nowMonth()) - monthIndex(start) + 1
  const y = Math.floor(months / 12)
  const m = months % 12
  return [y ? `${y} yr${y > 1 ? 's' : ''}` : '', m ? `${m} mo${m > 1 ? 's' : ''}` : '']
    .filter(Boolean)
    .join(' ')
}

export const formatDate = (d: Date | string): string => {
  const date = typeof d === 'string' ? new Date(d) : d
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
}
