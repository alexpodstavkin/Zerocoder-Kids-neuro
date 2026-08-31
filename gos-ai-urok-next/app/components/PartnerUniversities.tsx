import { Section, SectionHead } from '@/components/Section';
import { BP } from '@/lib/basePath';

const partners = [
  {
    name: 'НИУ ВШЭ',
    full: 'Национальный исследовательский университет «Высшая школа экономики»',
    logo: '/partners/hse.png',
  },
  {
    name: 'МФТИ',
    full: 'Московский физико-технический институт',
    logo: '/partners/mipt.png',
  },
  {
    name: 'РАНХиГС',
    full: 'Российская академия народного хозяйства и государственной службы при Президенте РФ',
    logo: '/partners/ranepa.png',
    // PNG has heavy whitespace around the eagle — compensate with extra max-height
    logoMaxHeight: 130,
  },
  {
    name: 'Университет Иннополис',
    full: 'Университет Иннополис',
    logo: '/partners/innopolis.jpeg',
  },
];

// Канон-LogoStrip: полоса логотипов на отдельном фоне paper, чипы rounded-md с обводкой.
export default function PartnerUniversities() {
  return (
    <Section bg="white">
      <SectionHead
        title={
          <>
            Всероссийская программа подготовки детей реализуется совместно с&nbsp;
            <span className="hl">ведущими университетами</span>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {partners.map((p) => (
          <div
            key={p.name}
            title={p.full}
            className="flex flex-col items-center justify-between gap-4 rounded-md border bg-white px-7 py-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            style={{ borderColor: 'var(--bord)' }}
          >
            <div className="flex flex-1 items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BP}${p.logo}`}
                alt={p.full}
                loading="lazy"
                className="w-auto max-w-full object-contain"
                style={{ maxHeight: 'logoMaxHeight' in p ? (p as { logoMaxHeight: number }).logoMaxHeight : 64 }}
              />
            </div>
            <span className="caption text-center uppercase tracking-[0.04em]">{p.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
