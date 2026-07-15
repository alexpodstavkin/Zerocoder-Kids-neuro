// FAQ-аккордеон на нативных <details> (стили — в globals.css, .faq-item).
type QA = { q: string; a: string; open?: boolean }

export function Faq({ items }: { items: QA[] }) {
  return (
    <div className="mx-auto flex max-w-[820px] flex-col gap-3.5">
      {items.map((it, i) => (
        <details key={i} className="faq-item" open={it.open}>
          <summary>{it.q}</summary>
          <p>{it.a}</p>
        </details>
      ))}
    </div>
  )
}
