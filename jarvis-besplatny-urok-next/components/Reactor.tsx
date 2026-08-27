// Абстрактный источник света: концентрические кольца + сегментированное ядро.
// Чистый inline-SVG, ни одного растрового ассета. Декор → aria-hidden.
// Появляется на странице ровно один раз (hero). Ореол без колец — в блоке регистрации.

const CX = 200
const CY = 200

function pt(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180
  return `${(CX + r * Math.cos(a)).toFixed(2)},${(CY + r * Math.sin(a)).toFixed(2)}`
}

// 10 радиальных трапеций-«катушек» между r=72 и r=112
const COILS = Array.from({ length: 10 }, (_, i) => {
  const c = i * 36
  const half = 13
  return `M ${pt(72, c - half)} L ${pt(112, c - half)} L ${pt(112, c + half)} L ${pt(72, c + half)} Z`
})

// Дуги-сегменты r=156: 4 дуги по 60° с разрывами по 30°
const R_ARC = 156
const ARC_LEN = 2 * Math.PI * R_ARC
const DASH = ((ARC_LEN * 60) / 360).toFixed(2)
const GAP = ((ARC_LEN * 30) / 360).toFixed(2)

export function Reactor() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="reactor-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="22%" stopColor="#FFD9D4" />
          <stop offset="55%" stopColor="#FF5A4A" />
          <stop offset="100%" stopColor="#DE3325" />
        </radialGradient>
        <filter id="reactor-halo" x="0" y="0" width="400" height="400" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="28" />
        </filter>
      </defs>

      {/* 1. Тик-кольцо — медленное вращение */}
      <g className="ticks">
        <circle
          cx={CX}
          cy={CY}
          r={190}
          fill="none"
          stroke="var(--acc-2-dim)"
          strokeWidth={1}
          strokeDasharray="2 12"
        />
      </g>

      {/* 2. Кольцо-корпус */}
      <circle cx={CX} cy={CY} r={156} fill="none" stroke="rgba(255,255,255,.10)" strokeWidth={1} />

      {/* 3. Дуги-сегменты — контрвращение */}
      <g className="arcs">
        <circle
          cx={CX}
          cy={CY}
          r={R_ARC}
          fill="none"
          stroke="var(--acc-2-dim)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray={`${DASH} ${GAP}`}
        />
      </g>

      {/* 4. Кольцо-акцент */}
      <circle cx={CX} cy={CY} r={118} fill="none" stroke="var(--acc)" strokeWidth={2} opacity={0.85} />

      {/* 5. Катушки */}
      <g>
        {COILS.map((d, i) => (
          <path key={i} d={d} fill="rgba(222,51,37,.16)" stroke="rgba(222,51,37,.35)" strokeWidth={1} />
        ))}
      </g>

      {/* 7. Ореол под ядром */}
      <circle cx={CX} cy={CY} r={58} fill="var(--acc-glow)" filter="url(#reactor-halo)" />

      {/* 6. Ядро */}
      <circle cx={CX} cy={CY} r={58} fill="url(#reactor-core)" className="core" />
    </svg>
  )
}
