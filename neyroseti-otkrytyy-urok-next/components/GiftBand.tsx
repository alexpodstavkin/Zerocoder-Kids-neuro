import { Icon } from './Icon'

// Блок подарков/бонусов. По канону выделяется акцентом: заливка acc-soft, обводка с оттенком
// акцента, иконка-чип сплошной акцент с белой иконкой, лёгкий hover-лифт. Не оставлять белым.
type Gift = { icon: string; title: string; note?: string }

export function GiftBand({ title = 'Всем участникам подарим', gifts }: { title?: string; gifts: Gift[] }) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3 text-[18px] font-extrabold uppercase tracking-[-0.01em]">
        <Icon name="gift" style="solid" size={22} color="var(--acc)" />
        {title}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {gifts.map((g, i) => (
          <div
            key={i}
            className="flex items-start gap-3.5 rounded-md p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            style={{
              background: 'var(--acc-soft)',
              border: '1px solid color-mix(in srgb, var(--acc) 30%, transparent)',
            }}
          >
            <span className="ico-chip-solid">
              <Icon name={g.icon} style="solid" size={22} color="currentColor" />
            </span>
            <div>
              <b>{g.title}</b>
              {g.note && <div className="text-sub">{g.note}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
