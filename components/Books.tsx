import Reveal from "./Reveal";

const BOOKS = [
  {
    title: "静かな働き方の地図",
    sub: "地方で働く人々の声から見えた、新しいキャリアのかたち。",
    desc: "都市から地方へ、組織から個へ。働く場所と時間の自由をめぐる十数人の記録をまとめたノンフィクション。",
    year: "2018",
    genre: "ノンフィクション",
    price: "1,760",
    mod: "book--1",
  },
  {
    title: "AI時代の生活者たち",
    sub: "テクノロジーが仕事と暮らしをどう変えているのかを追った記録。",
    desc: "AIやデジタル化の波の中で、働き方と日々の暮らしがどう変わるのか。生活者の視点から丁寧に追った一冊。",
    year: "2020",
    genre: "社会・技術",
    price: "1,980",
    mod: "book--2",
  },
  {
    title: "小さな町の経済学",
    sub: "地域に残る仕事、消える仕事、生まれる仕事。",
    desc: "人口減少が進む町で、それでも続く商い・生まれる商いを取材。地方経済の現在地をやさしく描く。",
    year: "2021",
    genre: "地域・経済",
    price: "1,870",
    mod: "book--3",
  },
  {
    title: "会社の外で生きる言葉",
    sub: "フリーランス、個人事業主、副業会社員のリアル。",
    desc: "組織を離れて働く人たちの不安と手応え。等身大の言葉で、これからの働き方のヒントを探る。",
    year: "2022",
    genre: "働き方・エッセイ",
    price: "1,650",
    mod: "book--4",
  },
  {
    title: "記録する人のための文章術",
    sub: "取材メモを、読まれる原稿へ変えるために。",
    desc: "取材・インタビューの現場で培った、聞く・まとめる・書くの実践知。書く仕事に関わる人へ贈る実用書。",
    year: "2024",
    genre: "実用・文章術",
    price: "1,760",
    mod: "book--5",
  },
];

export default function Books() {
  return (
    <section className="section" id="books">
      <div className="container">
        <Reveal className="head-row">
          <div>
            <p className="eyebrow">Books</p>
            <h2 className="section-title">著書</h2>
          </div>
          <p className="section-lead">
            働き方・地方・テクノロジー・文化をテーマにした著書。取材で集めた声を、読み物として編みなおしています。
          </p>
        </Reveal>

        <div className="books__grid">
          {BOOKS.map((b, i) => (
            <Reveal key={b.title} className="book" delay={(i % 3) * 90}>
              <article>
                <div className={`book__cover ${b.mod}`} aria-hidden="true">
                  <span className="book__label">ShijimiWORKs Books</span>
                  <h3 className="book__title">{b.title}</h3>
                  <div className="book__rule" />
                  <span className="book__author">ShijimiWORKs</span>
                </div>
                <div className="book__body">
                  <div className="book__meta">
                    <span>{b.year}</span>
                    <span>{b.genre}</span>
                  </div>
                  <h3 className="book__name">『{b.title}』</h3>
                  <p className="book__sub">{b.sub}</p>
                  <p className="book__desc">{b.desc}</p>
                  <div className="book__foot">
                    <span className="book__price">¥{b.price}</span>
                    <a
                      href="#contact"
                      className="book__buy"
                      aria-label={`『${b.title}』について問い合わせる`}
                    >
                      購入・お問い合わせ →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="books__disclaimer">
          ※ 掲載している書籍・書影・価格は、すべてポートフォリオ用に制作した架空のサンプルです。実在の書籍とは関係ありません。書影はCSSで作成した架空デザインです。
        </Reveal>
      </div>
    </section>
  );
}
