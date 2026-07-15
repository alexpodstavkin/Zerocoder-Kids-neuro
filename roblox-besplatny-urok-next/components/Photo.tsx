import type { CSSProperties } from 'react'

// Фото как на живых лендах Зерокодера:
//  - кадрирование cover (background-size:cover, центрирование/смещение),
//  - скругление УГЛОВ в px (10/12/15/20), НЕ круг (кругов на фото бренд не использует),
//  - без рамок/теней по умолчанию,
//  - aspect — соотношение сторон (по умолчанию 4/5 как у портретов спикеров),
//  - rotate — лёгкий поворот «наклеенного стикера» (для игривых/детских лендов).
// Без src показывает мягкий акцентный плейсхолдер с иконкой/эмодзи.
type Radius = 'flat' | 'md' | 'card' | 'lg' | 'xl'
const rMap: Record<Radius, string> = {
  flat: 'rounded-flat',
  md: 'rounded-md',
  card: 'rounded-card',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
}

export function Photo({
  src,
  alt = '',
  aspect = '4/5',
  radius = 'lg',
  position = 'center',
  rotate = 0,
  placeholder,
  className = '',
}: {
  src?: string
  alt?: string
  aspect?: string
  radius?: Radius
  position?: string
  rotate?: number
  placeholder?: string // эмодзи/символ для пустого состояния
  className?: string
}) {
  const style: CSSProperties = {
    aspectRatio: aspect,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  }
  if (src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`w-full overflow-hidden bg-cover bg-no-repeat ${rMap[radius]} ${className}`}
        style={{ ...style, backgroundImage: `url(${src})`, backgroundPosition: position }}
      />
    )
  }
  return (
    <div
      className={`grad-acc flex w-full items-center justify-center overflow-hidden text-[64px] ${rMap[radius]} ${className}`}
      style={style}
    >
      <span>{placeholder ?? '🖼️'}</span>
    </div>
  )
}
