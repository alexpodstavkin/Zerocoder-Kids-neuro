import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Proforientation from './components/Proforientation';
import Path from './components/Path';
import Inside from './components/Inside';
import Directions from './components/Directions';
import Olympiads from './components/Olympiads';
import FinalForm from './components/FinalForm';
import Footer from './components/Footer';
import StickyMobileCta from './components/StickyMobileCta';
import { Reveal } from '@/components/Reveal';

// Порядок блоков зафиксирован владельцем: копия структуры референса
// kvantastica.ru/it_prof, 9 блоков + подвал (см. supervisor/truth.md).
export default function Page() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Advantages />
        <Reveal>
          <Proforientation />
        </Reveal>
        <Reveal>
          <Path />
        </Reveal>
        <Reveal>
          <Inside />
        </Reveal>
        <Reveal>
          <Directions />
        </Reveal>
        <Reveal>
          <Olympiads />
        </Reveal>
        <FinalForm />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
