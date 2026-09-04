import { Section } from '@/components/Section';

// Раньше здесь была синяя полоса от края до края. Стала заголовочным блоком:
// кегль как у H2 ленда, ключевая фраза — красным (единственный «красный» слой бренда,
// на синей заливке он бы не читался).
export default function ConsultationStrip() {
  return (
    <Section bg="paper">
      <p className="h2-plain mx-auto max-w-[960px] text-center text-ink">
        В&nbsp;рамках прохождения практических онлайн-занятий каждому участнику{' '}
        <span className="hl-red">доступен 1&nbsp;профориентационный урок со&nbsp;специалистом</span>.
      </p>
    </Section>
  );
}
