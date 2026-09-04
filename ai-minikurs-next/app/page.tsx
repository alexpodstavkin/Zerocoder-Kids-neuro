import Hero from './components/Hero';
import FutureProfessions from './components/FutureProfessions';
import Program from './components/Program';
import ConsultationStrip from './components/ConsultationStrip';
import HowItHelps from './components/HowItHelps';
import CtaForm from './components/CtaForm';
import Footer from './components/Footer';
import StickyMobileCta from './components/StickyMobileCta';
import { Reveal } from '@/components/Reveal';

export default function Page() {
  return (
    <>
      <Hero />
      <main>
        <Reveal>
          <FutureProfessions />
        </Reveal>
        <Program />
        <ConsultationStrip />
        <Reveal>
          <HowItHelps />
        </Reveal>
        <Reveal>
          <CtaForm />
        </Reveal>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
