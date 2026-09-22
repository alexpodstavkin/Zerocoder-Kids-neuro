import { BP } from '@/lib/basePath';
import { content } from '@/app/content';

/**
 * Шапка бота — белая полоса над полотном чата.
 *
 * Стрелка «назад» оставлена декоративной, в отличие от остальных значков
 * хрома. Для всех прочих правило «мёртвых элементов быть не должно» работает,
 * но у ‹ смысл в голове человека однозначный — «вернуться»; увести её вперёд
 * значит обмануть ровно там, где обман виден. Поэтому она не кликается.
 */
export default function BotHeader() {
  return (
    <header className="z-20 flex h-14 shrink-0 items-center gap-3 border-b border-black/5 bg-[var(--tg-header)] px-3">
      <span aria-hidden="true" className="-ml-1 flex h-8 w-8 items-center justify-center text-[var(--tg-sub)] opacity-40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 19l-7-7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BP}/logo-icon.png`}
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-full"
      />

      <div className="min-w-0 leading-tight">
        <div className="truncate text-[15px] font-bold text-[var(--tg-ink)]">
          {content.bot.name}
        </div>
        <div className="text-[13px] text-[var(--tg-sub)]">{content.bot.subtitle}</div>
      </div>
    </header>
  );
}
