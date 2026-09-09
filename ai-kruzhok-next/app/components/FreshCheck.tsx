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

// Защита от устаревшей страницы из браузерного кэша.
// HTML на kids.zerocoder.ru отдаётся без Cache-Control, поэтому браузер
// кэширует его эвристически и после выкладки показывает старую версию.
// Скрипт тянет /version.json мимо кэша, сравнивает со штампом в HTML и,
// если они разошлись, перекачивает страницу (fetch с cache: 'reload'
// обновляет запись в HTTP-кэше) и перезагружается — один раз на версию.
export default function FreshCheck() {
  const stamp = buildStamp();
  const code = `(function(){
  var V=${JSON.stringify(stamp)},U=${JSON.stringify((process.env.BASEPATH ?? '') + '/version.json')};
  if(!window.fetch||location.protocol.indexOf('http')!==0)return;
  fetch(U+'?_='+Date.now(),{cache:'no-store'}).then(function(r){return r.ok?r.json():null}).then(function(d){
    if(!d||!d.v||d.v===V)return;
    var k='zc-fresh-reload';
    try{if(sessionStorage.getItem(k)===d.v)return;sessionStorage.setItem(k,d.v);}catch(e){}
    var go=function(){location.reload();};
    fetch(location.href,{cache:'reload'}).then(go,go);
  }).catch(function(){});
})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
