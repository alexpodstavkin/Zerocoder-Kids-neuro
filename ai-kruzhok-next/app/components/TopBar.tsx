// Блок 1. Верхняя госплашка — ровно одна строка, ничего сверх неё.
export default function TopBar() {
  return (
    <div className="wrap pb-5 pt-5 md:pb-7 md:pt-6">
      <p className="text-center text-[13px] leading-[1.4] text-ink md:text-[15px]">
        <span aria-hidden className="mr-1.5">
          🇷🇺
        </span>
        В рамках развития IT-компетенций школьников и обеспечения технологического суверенитета
        России
      </p>
    </div>
  );
}
