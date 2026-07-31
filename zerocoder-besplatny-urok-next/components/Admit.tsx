'use client'
import { useEffect, useRef } from 'react'

// Карточка «87%+»: карточка + язычок + филеты = одно фото, подогнанное под карточку (без зума).
// Позиции слоёв синхронизирует JS (перенос IIFE из прототипа в useEffect).
export function Admit() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const atab = card.querySelector<HTMLElement>('.atab')
    const fills = card.querySelectorAll<HTMLElement>('.nf')
    const TAB_H = 46
    const img = new Image()

    function setBg(el: HTMLElement, Rw: number, Rh: number, px: number, py: number) {
      el.style.backgroundSize = '100% 100%, ' + Rw + 'px ' + Rh + 'px'
      el.style.backgroundPosition = '0 0, ' + px + 'px ' + py + 'px'
    }
    function layout() {
      const iw = img.naturalWidth
      const ih = img.naturalHeight
      if (!iw || !card) return
      const cw = card.offsetWidth
      const ch = card.offsetHeight
      const boxH = ch + TAB_H
      const scale = Math.max(cw / iw, boxH / ih)
      const Rw = iw * scale
      const Rh = ih * scale
      const pL = (cw - Rw) / 2
      const pT = (boxH - Rh) / 2
      setBg(card, Rw, Rh, pL, pT - TAB_H)
      if (atab) setBg(atab, Rw, Rh, pL - 60, pT)
      fills.forEach((f) => {
        const fl = parseFloat(f.style.left) || 0
        const ft = parseFloat(f.style.top) || 0
        setBg(f, Rw, Rh, pL - fl, pT - (TAB_H + ft))
      })
    }
    img.onload = layout
    img.src = '/zerocoder-besplatny-urok/img-87.png'
    window.addEventListener('resize', layout)
    layout()
    return () => window.removeEventListener('resize', layout)
  }, [])

  return (
    <section>
      <div className="wrap admit">
        <div>
          <h2>Бесплатный урок по цифровым технологиям в «Зерокодер» может посетить любой желающий</h2>
          <p className="sub">Неважно, знает ли ребёнок что-то об ИТ и с чего начинать. Главное &mdash; интерес и желание пробовать. Мы даём шанс каждому попробовать свои силы и найти своё направление.</p>
          <a href="#zapis" className="btn btn-green">Записаться на урок</a>
        </div>
        <div className="admit-card" ref={cardRef}>
          <div className="atab"></div>
          <span className="nf nf-tl" style={{ left: '25px', top: '-35px' }}></span>
          <span className="nf nf-tr" style={{ left: '209px', top: '-35px' }}></span>
          <div className="num">87%<sup>+</sup></div>
          <div className="lbl">детей приходят на урок без опыта в программировании</div>
        </div>
      </div>
    </section>
  )
}
