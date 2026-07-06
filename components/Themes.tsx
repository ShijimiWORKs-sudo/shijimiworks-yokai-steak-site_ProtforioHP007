import Reveal from "./Reveal";

const THEMES = [
  {
    title: "働き方",
    desc: "会社員、フリーランス、副業、リモートワーク、キャリアの変化。",
  },
  {
    title: "地方と暮らし",
    desc: "地域、移住、地場産業、地方経済、コミュニティ。",
  },
  {
    title: "テクノロジー",
    desc: "AI、デジタル化、仕事の自動化、生活者とテクノロジー。",
  },
  {
    title: "文化と生活",
    desc: "本、映画、地域文化、日常の変化、個人の記録。",
  },
];

export default function Themes() {
  return (
    <section className="section section--paper" id="themes">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Writing Themes</p>
          <h2 className="section-title">専門テーマ</h2>
          <p className="section-lead">
            社会の変化を、暮らしの目線で。とくに次の4つの領域を軸に、取材と執筆を続けています。
          </p>
        </Reveal>

        <div className="themes__grid">
          {THEMES.map((t, i) => (
            <Reveal key={t.title} className="theme-card" delay={(i % 4) * 80}>
              <p className="theme-card__no">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="theme-card__title">{t.title}</h3>
              <p className="theme-card__desc">{t.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
