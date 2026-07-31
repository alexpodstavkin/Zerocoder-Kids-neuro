import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Potential } from '@/components/Potential'
import { Program } from '@/components/Program'
import { Admit } from '@/components/Admit'
import { Reviews } from '@/components/Reviews'
import { Methodology } from '@/components/Methodology'
import { LessonForm } from '@/components/LessonForm'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <Potential />
      <Program />
      <Admit />
      <Reviews />
      <Methodology />
      <LessonForm />
      <Faq />
      <Footer />
    </>
  )
}
