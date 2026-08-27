import { Hero } from '@/components/Hero'
import { Sixty } from '@/components/Sixty'
import { Useful } from '@/components/Useful'
import { Reviews } from '@/components/Reviews'
import { TrustRating } from '@/components/TrustRating'
import { Signup } from '@/components/Signup'
import { FooterDark } from '@/components/FooterDark'
import { StickyCta } from '@/components/StickyCta'

// Порядок блоков — истина владельца (supervisor/truth.md), не менять.
// Ритм фонов «тёмное на тёмном»: bg → bg-2 → bg → bg-2 → bg-2 → bg → footer.
// Техно-разделитель (.hud-rule) — только на «немом» стыке, где фон не меняется сам:
// это стык отзывов и объединённого блока «рейтинг + доверие» (обе секции на --bg-2).
// Остальные стыки держит смена фона.
export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Sixty />
        <Useful />
        <Reviews />
        <hr className="hud-rule" aria-hidden="true" />
        <TrustRating />
        <Signup />
      </main>
      <FooterDark />
      <StickyCta />
    </>
  )
}
