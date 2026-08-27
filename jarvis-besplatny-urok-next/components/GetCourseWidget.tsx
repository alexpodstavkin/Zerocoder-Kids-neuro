'use client'
import { useEffect, useRef } from 'react'

// ⚠️ ID формы этого урока — заменить, сейчас стоит id с соседнего детского лендинга
// (`Zerocoder-Kids-neuro/zerocoder-besplatny-urok-next`). Обе константы приходят
// вместе, одним кодом виджета из кабинета GetCourse: SCRIPT_SRC — адрес скрипта,
// SCRIPT_ID — якорь и суффикс имени глобальной функции инициализации.
const SCRIPT_ID = '86cef66323f612ca62dbe7e8b55ae262c59aa28b'
const SCRIPT_SRC = 'https://university.zerocoder.ru/pl/lite/widget/script?id=1637346'
const START_FN = 'startWidget' + SCRIPT_ID

// Как устроен скрипт виджета:
// 1. При выполнении он НАВСЕГДА вешает слушатель на document и объявляет
//    глобальную startWidget<ID>. Поэтому грузим его РОВНО ОДИН РАЗ за страницу:
//    повторная вставка тега = второй слушатель = двойная инициализация.
//    Виджет живёт прямо в секции (не в модалке), так что вставка одноразовая.
// 2. startWidget<ID> ищет элемент с id = SCRIPT_ID, вставляет на его место
//    iframe и УДАЛЯЕТ его из DOM. То есть якорь одноразовый.
let scriptPromise: Promise<void> | null = null

function loadWidgetScript(): Promise<void> {
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    // Без id: иначе startWidget примет за якорь этот тег и вставит форму в <head>.
    script.src = SCRIPT_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('GetCourse widget script failed'))
    document.head.appendChild(script)
  })
  return scriptPromise
}

export function GetCourseWidget() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    let cancelled = false

    // Одноразовый якорь — на его место виджет поставит свой iframe.
    // Создаём вручную, мимо React: виджет удалит его сам.
    const anchor = document.createElement('span')
    anchor.id = SCRIPT_ID
    container.appendChild(anchor)

    loadWidgetScript()
      .then(() => {
        if (cancelled) return
        const fn = (window as unknown as Record<string, unknown>)[START_FN]
        // Виджет сам цепляется к DOMContentLoaded, а он в SPA давно прошёл —
        // поэтому зовём инициализацию руками.
        if (typeof fn === 'function') (fn as () => void)()
      })
      .catch(() => {})

    return () => {
      cancelled = true
      // Если виджет уже забрал якорь — узел открепён и remove() ничего не делает.
      anchor.remove()
    }
  }, [])

  return <div ref={ref} className="gc-widget" />
}
