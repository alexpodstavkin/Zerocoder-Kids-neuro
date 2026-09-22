import { BP } from '@/lib/basePath';
import BotHeader from '@/components/BotHeader';
import LeadCard from '@/components/LeadCard';

/**
 * Один экран, а не лендинг: шапка бота → полотно чата с карточкой.
 * Страница целиком не скроллится (body overflow:hidden в globals.css) —
 * скроллится только тело карточки. Высота 100dvh, потому что на iOS
 * адресная строка съедает vh.
 *
 * Нижней кнопки «Начать» нет — снята владельцем 2026-09-22, полотно чата
 * доходит до нижнего края экрана.
 */
export default function Page() {
  return (
    <main className="flex h-[100dvh] flex-col">
      <BotHeader />

      <div
        className="tg-canvas relative flex-1 overflow-hidden"
        style={{
          // Два слоя: виньетка поверх плитки паттерна. Размеры и повтор —
          // в .tg-canvas, здесь только источники, потому что basePath
          // известен коду, а не таблице стилей.
          backgroundImage: `radial-gradient(ellipse at center, rgba(5,26,26,0) 45%, rgba(5,26,26,0.32) 100%), url(${BP}/tg-pattern.jpg)`,
        }}
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center p-3">
          <LeadCard />
        </div>
      </div>
    </main>
  );
}
