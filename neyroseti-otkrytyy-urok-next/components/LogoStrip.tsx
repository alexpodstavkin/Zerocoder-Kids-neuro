// Полоса логотипов СМИ/партнёров. Чипы с обводкой на светлом фоне.
// Принимает массив текстовых меток ИЛИ путей к лого (если строка начинается с / или http — это <img>).
export function LogoStrip({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {items.map((it, i) => {
        const isImg = it.startsWith('/') || it.startsWith('http')
        return (
          <div
            key={i}
            className="flex items-center justify-center rounded-md border bg-white px-7 py-4"
            style={{ borderColor: 'var(--bord)' }}
          >
            {isImg ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={it} alt="" className="h-6 w-auto opacity-70" />
            ) : (
              <span className="font-extrabold tracking-[0.02em] text-sub">{it}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}
