import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Штамп текущей сборки — читается на этапе статического экспорта
// и запекается в HTML. Пара к public/version.json (см. scripts/stamp.mjs).
function buildStamp() {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), 'public', 'version.json'), 'utf8')).v as string;
  } catch {
    return 'dev';
  }
}

const basePath =
  process.env.NODE_ENV === 'production' ? process.env.BASEPATH ?? '/gos-ai-summer' : '';

// Защита от устаревшей страницы из браузерного кэша.
//
// HTML на kids.zerocoder.ru отдаётся вообще без Cache-Control — только
// Last-Modified и ETag. По RFC 9111 браузер в таком случае кэширует
// эвристически (≈10% возраста файла) и до истечения этого срока показывает
// страницу из кэша, ни о чём не спрашивая сервер. Отсюда «зашёл — старая
// версия». Правильное лечение — заголовок на сервере; этот скрипт закрывает
// дыру со стороны страницы.
//
// Как работает:
// 1. Через Navigation Timing смотрим transferSize. Больше нуля — HTML только
//    что приехал по сети, он заведомо свежий: ничего не делаем, ни одного
//    лишнего запроса (это подавляющее большинство заходов).
// 2. transferSize == 0 — HTML достали из кэша, он может быть любой давности.
//    Прячем страницу (visibility на <html>), чтобы старая версия не мелькнула,
//    и тянем /version.json мимо кэша.
// 3. Штампы совпали — показываем страницу (обычно 50–150 мс, кадр со старым
//    содержимым не успевает нарисоваться). Разошлись — перекачиваем HTML
//    (fetch с cache: 'reload' обновляет запись в HTTP-кэше) и перезагружаемся.
// 4. Сеть молчит или отдала ошибку — по таймауту показываем что есть:
//    страница из кэша лучше белого экрана.
// Повторная перезагрузка на одну и ту же версию заблокирована через
// sessionStorage — защита от петли, если правки почему-то не доезжают.
// Браузер без Navigation Timing (узнать про кэш нечем) работает по-старому:
// проверка идёт, страницу не прячем — белый экран там был бы неоправдан.
export default function FreshCheck() {
  const code = `(function(){
  var V=${JSON.stringify(buildStamp())},U=${JSON.stringify(basePath + '/version.json')},K='zc-fresh-reload',T=2500;
  if(!window.fetch||location.protocol.indexOf('http')!==0)return;
  var cached=false;
  try{var n=performance.getEntriesByType('navigation')[0];if(n){if(n.transferSize>0)return;cached=true;}}catch(e){}
  var de=document.documentElement,shown=!cached,timer;
  var show=function(){if(shown)return;shown=true;clearTimeout(timer);de.style.visibility='';};
  if(cached){de.style.visibility='hidden';timer=setTimeout(show,T);}
  var reload=function(){location.reload();};
  fetch(U+'?_='+Date.now(),{cache:'no-store'}).then(function(r){return r.ok?r.json():null}).then(function(d){
    if(!d||!d.v||d.v===V){show();return;}
    try{if(sessionStorage.getItem(K)===d.v){show();return;}sessionStorage.setItem(K,d.v);}catch(e){}
    clearTimeout(timer);
    fetch(location.href,{cache:'reload'}).then(reload,reload);
  }).catch(show);
})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
