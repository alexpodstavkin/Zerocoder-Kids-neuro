// UTM / ad-platform tracker capture.
// Captures parameters from the landing URL on first visit and persists them
// in localStorage, so they survive route changes inside the same session
// and can later be passed into the GetCourse registration widget.

export const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'yclid',
  'fbclid',
  'roistat',
] as const

const STORAGE_KEY = 'zc_utm_data_v1'

export type UtmData = Partial<Record<(typeof UTM_KEYS)[number], string>>

function fromSearch(search: string): UtmData {
  const out: UtmData = {}
  try {
    const params = new URLSearchParams(search)
    for (const k of UTM_KEYS) {
      const v = params.get(k)
      if (v) out[k] = v
    }
  } catch {}
  return out
}

/** Read UTM from current URL and merge into localStorage. */
export function captureUtm(): void {
  if (typeof window === 'undefined') return
  const current = fromSearch(window.location.search)
  if (Object.keys(current).length === 0) return
  try {
    const prev = readStored()
    const merged = { ...prev, ...current }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  } catch {}
}

function readStored(): UtmData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return typeof parsed === 'object' && parsed ? parsed : {}
  } catch {
    return {}
  }
}

/** Get UTM — prefer current URL, fall back to stored. */
export function getUtm(): UtmData {
  if (typeof window === 'undefined') return {}
  const current = fromSearch(window.location.search)
  if (Object.keys(current).length > 0) return current
  return readStored()
}

export function utmQueryString(): string {
  const data = getUtm()
  const entries = Object.entries(data).filter(([, v]) => Boolean(v))
  if (entries.length === 0) return ''
  return new URLSearchParams(entries as [string, string][]).toString()
}
