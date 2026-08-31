import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Program from './components/Program';
import PartnerUniversities from './components/PartnerUniversities';
import Questions from './components/Questions';
import Gifts from './components/Gifts';
import CtaForm from './components/CtaForm';
import Footer from './components/Footer';
import StickyMobileCta from './components/StickyMobileCta';
import { Reveal } from '@/components/Reveal';

export default function Page() {
  return (
    <>
      <TopBar />
      <Hero />
      <main>
        <Program />
        <Reveal>
          <Questions />
        </Reveal>
        <Reveal>
          <Gifts />
        </Reveal>
        <Reveal>
          <PartnerUniversities />
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
