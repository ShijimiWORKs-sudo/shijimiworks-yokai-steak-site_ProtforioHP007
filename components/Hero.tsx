import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div>
          <p className="hero__eyebrow">ShijimiWORKs Journal</p>
          <p className="hero__role">Freelance Journalist / Writer</p>
          <h1 className="hero__title">
            社会の変化を、
            <br />
            読み解ける言葉にする。
          </h1>
          <p className="hero__sub">
            書籍、寄稿、取材、講演を通じて、働き方、地域、テクノロジー、暮らしの変化を記録し、読者に届く言葉へ編集します。
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn">
              執筆を依頼する <span className="btn__arrow">→</span>
            </a>
            <a href="#books" className="btn btn--ghost">
              著書を見る
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <Image
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=70"
            alt="原稿、ノート、万年筆が置かれた落ち着いた書斎のデスク。執筆活動を連想させる作業風景。"
            fill
            sizes="(max-width: 880px) 92vw, 40vw"
            priority
          />
          <p className="hero__quote">
            「現場で聞いた声を、読者の暮らしに引き寄せて伝える。」
          </p>
        </div>
      </div>
    </section>
  );
}
