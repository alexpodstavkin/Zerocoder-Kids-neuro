import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Program from './components/Program';
import PartnerUniversities from './components/PartnerUniversities';
import Questions from './components/Questions';
import CtaForm from './components/CtaForm';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import StickyMobileCta from './components/StickyMobileCta';
import { asset } from './lib/asset';

export default function Page() {
  return (
    <>
      <div className="top-zone">
        <div
          className="top-zone-bg"
          aria-hidden
          style={{ backgroundImage: `url(${asset('/hero-classroom.png')})` }}
        />
        <div className="top-zone-overlay" aria-hidden />
        <TopBar />
        <Hero />
      </div>
      <main>
        <Reveal><Program /></Reveal>
        <Reveal><PartnerUniversities /></Reveal>
        <Reveal><Questions /></Reveal>
        <Reveal><CtaForm /></Reveal>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
