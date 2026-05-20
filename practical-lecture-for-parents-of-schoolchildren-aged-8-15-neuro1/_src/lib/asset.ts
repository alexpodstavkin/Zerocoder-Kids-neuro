const BASE = process.env.NEXT_PUBLIC_BASE_PATH ||
  '/practical-lecture-for-parents-of-schoolchildren-aged-8-15-neuro1'

export function asset(path: string): string {
  if (!path.startsWith('/')) path = '/' + path
  return BASE + path
}
