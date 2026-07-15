import { Photo } from './Photo'

// Блок спикера: фото (4/5, скругление 20px) + имя, роль и регалии с акцентными точками.
export function Speaker({
  name,
  role,
  regalia,
  photoSrc,
  photoPlaceholder = '👩‍🏫',
}: {
  name: string
  role: string
  regalia: string[]
  photoSrc?: string
  photoPlaceholder?: string
}) {
  return (
    <div
      className="grid items-center gap-10 rounded-xl border bg-white p-8 md:grid-cols-[0.8fr_1.2fr] md:p-9"
      style={{ borderColor: 'var(--bord)' }}
    >
      <Photo src={photoSrc} aspect="4/5" radius="lg" placeholder={photoPlaceholder} />
      <div>
        <h3 className="text-[26px] font-extrabold tracking-[-0.01em]">{name}</h3>
        <p className="mt-1.5 text-sub">{role}</p>
        <div className="mt-4 flex flex-col gap-3.5">
          {regalia.map((r, i) => (
            <div key={i} className="flex items-center gap-3 font-semibold">
              <span className="h-2 w-2 flex-none rounded-full bg-acc" />
              {r}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
