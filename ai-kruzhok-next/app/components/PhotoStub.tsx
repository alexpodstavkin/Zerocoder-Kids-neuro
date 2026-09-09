import type { CSSProperties } from 'react';
import { BP } from '@/lib/basePath';

// Фото-блок. Реальные снимки владелец положил 08.09.2026, поэтому служебная
// подпись по умолчанию скрыта — но `label` остаётся: он работает как alt-текст
// для скринридеров и как fallback-описание, если картинка не загрузится.
// Нужна подпись обратно (например, под новый, ещё не снятый кадр) — передать
// showLabel: тогда поверх блока цвета --acc-mid снова видно, что за фото сюда встаёт.
export default function PhotoStub({
  path,
  label,
  className = '',
  style,
  showLabel = false,
}: {
  path: string;
  label: string;
  className?: string;
  style?: CSSProperties;
  showLabel?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`photo-stub ${className}`}
      style={{ backgroundImage: `url('${BP}${path}')`, ...style }}
    >
      {showLabel && (
        <span className="photo-stub__label">
          {label}
          <span className="photo-stub__path">{path}</span>
        </span>
      )}
    </div>
  );
}
