# top107 site

Дизайн-система проекта в styles/tokens.css и styles/components.css.

Правила:
- Все цвета, отступы, тени, радиусы — только через переменные из tokens.css.
- Никаких хардкод-значений (#7F56D9, 16px и т.п.).
- Primary action — var(--brand-600), hover — var(--brand-700).
- Сетка отступов — 8pt (--space-1 … --space-20).
- Шрифт — Inter через --font-family.