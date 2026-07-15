import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { StickyCTA } from '@/components/StickyCTA'
import { RegisterModal } from '@/components/RegisterModal'
import { SocialProofToast } from '@/components/SocialProofToast'

export default function Page() {
  return (
    <>
      {/* Экран 1 — Hero (оффер владельца в заголовке) */}
      <Hero />

      <Footer />

      <StickyCTA />

      {/* Всплывающая форма записи — открывается кнопками «Записаться» */}
      <RegisterModal />

      {/* Всплывающие плашки соц-доказательства (списывают свободные места) */}
      <SocialProofToast />
    </>
  )
}
