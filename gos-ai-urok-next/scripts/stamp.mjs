// Штамп сборки. Пишется перед каждым `npm run build` (npm-хук prebuild).
// Этот же файл попадает в экспорт как /version.json, а его значение
// запекается в HTML. Скрипт FreshCheck в браузере сравнивает одно с другим
// и, если HTML пришёл из кэша от старой сборки, тянет страницу заново.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const v = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15);
const dir = join(process.cwd(), 'public');
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'version.json'), JSON.stringify({ v }) + '\n');
console.log('build stamp:', v);
