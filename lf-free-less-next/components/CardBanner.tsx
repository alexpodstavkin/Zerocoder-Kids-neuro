import { BP } from '@/lib/basePath';
import { content } from '@/app/content';

/**
 * Баннер-обложка карточки: фотография владельца + надпись поверх.
 * Пропорция 16:9 и исходник 1080×608 — канон обложки лид-формы VK.
 *
 * Надпись набрана кодом, а не вплавлена в картинку: её видно резкой на любом
 * экране, она правится в одном файле и переживает смену фото.
 *
 * Читаемость держится на двух вещах, а не на одной:
 * 1) светлая вуаль слева — фото снято с пустой стеной в левой трети, вуаль
 *    выравнивает её до предсказуемо светлого и оставляет мальчика нетронутым;
 * 2) текст тёмный (#141413), а не белый. На светлом фото белая надпись
 *    исчезает; тёмная по светлой стене даёт контраст около 8:1.
 * Если фото заменят на тёмное — вуаль всё равно поднимет левый край, но
 * контраст надо перепроверить.
 */
export default function CardBanner() {
  const { title } = content.card.banner;

  // Акцентом заливается только последнее слово последней строки, а не строка
  // целиком: сплошная зелёная плита по массе равнялась кнопке, и «зелёное =
  // жми» переставало быть уникальным сигналом.
  const lines = title.map((line, i) => {
    const last = i === title.length - 1;
    const words = line.trim().split(' ');
    return {
      head: last ? words.slice(0, -1).join(' ') : line,
      accent: last ? words[words.length - 1] : null,
    };
  });

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${BP}/banner.jpg)` }}
    >
      {/* Светлая вуаль под текстом. Держится плотной почти до 60% ширины:
          надпись частично ложится на кофту мальчика, и мягкого осветления
          там не хватало — буквы тонули в ткани. Лицо и руки остаются чистыми. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[78%] bg-gradient-to-r from-white via-white/94 via-60% to-transparent"
      />

      <span className="absolute left-3.5 top-3 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/55">
        Зерокодер
      </span>

      {/* Надпись по вертикали посередине: снизу в кадре стол и книги, сверху
          воздух — середина единственное место, где текст не спорит с фото. */}
      <div className="relative flex h-full w-[64%] items-center px-3.5">
        <p className="text-[17px] font-extrabold uppercase leading-[1.1] tracking-tightest text-ink">
          {lines.map(({ head, accent }, i) => (
            <span key={head + i} className="block">
              {head}
              {accent ? (
                <>
                  {' '}
                  <span className="box-decoration-clone bg-acc px-1 py-[1px] text-ink">
                    {accent}
                  </span>
                </>
              ) : null}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
