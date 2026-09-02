import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Program from './components/Program';
import Questions from './components/Questions';
import CtaForm from './components/CtaForm';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import StickyMobileCta from './components/StickyMobileCta';

export default function Page() {
  const basePath = process.env.NODE_ENV === 'production' ? (process.env.BASEPATH ?? '/neyroseti-otkrytyy-urok') : '';
  return (
    <>
      <div className="top-zone">
        <div
          className="top-zone-bg"
          aria-hidden
          style={{ backgroundImage: `url(${basePath}/hero-classroom.png)` }}
        />
        <div className="top-zone-overlay" aria-hidden />
        <TopBar />
        <Hero />
      </div>
      <main>
        <Reveal><Program /></Reveal>
        <Reveal><Questions /></Reveal>
        <Reveal><CtaForm /></Reveal>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
