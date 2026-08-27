import type { CSSProperties } from 'react'

// Иконка Uicons by Flaticon (канон бренда). Имена грепать в:
// ~/.claude/skills/athena/assets/uicons/icon-names.txt
// Стиль: rounded. style='regular' → fi-rr-*, 'solid' → fi-sr-*, 'bold' → fi-br-*.
type Style = 'regular' | 'solid' | 'bold'
const prefix: Record<Style, string> = { regular: 'fi-rr', solid: 'fi-sr', bold: 'fi-br' }

export function Icon({
  name,
  style = 'regular',
  size = 22,
  color,
  className = '',
}: {
  name: string
  style?: Style
  size?: number
  color?: string
  className?: string
}) {
  const css: CSSProperties = { fontSize: size, color, lineHeight: 0, display: 'inline-flex' }
  return <i className={`fi ${prefix[style]}-${name} ${className}`} style={css} aria-hidden />
}

// Иконка-чип: контейнер 46px на acc-soft, иконка акцентом (вариант solid — белая на акценте).
export function IconChip({ name, solid = false }: { name: string; solid?: boolean }) {
  return (
    <span className={solid ? 'ico-chip-solid' : 'ico-chip'}>
      <Icon name={name} style={solid ? 'solid' : 'regular'} size={22} color="currentColor" />
    </span>
  )
}
