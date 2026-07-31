'use client'
import { useEffect, useRef } from 'react'

const REVIEWS = [
  { img: '/zerocoder-besplatny-urok/rev-natalia.png', pos: '28%', name: 'Наталья', role: 'мама Артёма, 11 лет', text: 'Сын за урок собрал свою первую игру и не мог оторваться. Теперь занимается дальше.' },
  { img: '/zerocoder-besplatny-urok/rev-irina.png', pos: '22%', name: 'Ирина', role: 'мама Софии, 13 лет', text: 'Дочка сомневалась, что справится. После урока сказала, что хочет стать программистом.' },
  { img: '/zerocoder-besplatny-urok/rev-dmitry.png', pos: '30%', name: 'Дмитрий', role: 'папа Кирилла, 12 лет', text: 'Отличный формат: за час ребёнок понял, что ему ближе, и сделал реальный проект.' },
  { img: '/zerocoder-besplatny-urok/rev-anna.png', pos: '38%', name: 'Анна', role: 'мама Максима, 10 лет', text: 'Преподаватель подсказал направление под интересы сына. Очень полезная обратная связь.' },
]

export function Reviews() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    let timer: ReturnType<typeof setInterval> | null = null
    const isMobile = () => window.matchMedia('(max-width:600px)').matches
    function step() {
      if (!grid) return
      const cards = grid.querySelectorAll<HTMLElement>('.rev')
      if (!cards.length) return
      const cw = cards[0].getBoundingClientRect().width + 14
      const maxScroll = grid.scrollWidth - grid.clientWidth
      if (grid.scrollLeft >= maxScroll - 8) {
        grid.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        grid.scrollBy({ left: cw, behavior: 'smooth' })
      }
    }
    function start() {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
      if (isMobile()) {
        timer = setInterval(step, 3200)
      }
    }
    const onTouchStart = () => {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    }
    const onTouchEnd = () => {
      setTimeout(start, 4000)
    }
    grid.addEventListener('touchstart', onTouchStart, { passive: true })
    grid.addEventListener('touchend', onTouchEnd, { passive: true })
    start()
    window.addEventListener('resize', start)
    return () => {
      if (timer) clearInterval(timer)
      grid.removeEventListener('touchstart', onTouchStart)
      grid.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('resize', start)
    }
  }, [])

  return (
    <section>
      <div className="wrap reviews">
        <div className="reviews-head">
          <h2>Отзывы родителей о бесплатном уроке</h2>
        </div>
        <div className="reviews-grid" ref={gridRef}>
          {REVIEWS.map((r, i) => (
            <div className="rev" key={i}>
              <div
                className="rev-photo"
                style={{ background: `url('${r.img}') center ${r.pos}/cover` }}
              ></div>
              <div className="rev-body">
                <h4>{r.name}</h4>
                <div className="role">{r.role}</div>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
