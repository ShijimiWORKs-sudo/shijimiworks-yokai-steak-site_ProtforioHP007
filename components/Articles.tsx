import Reveal from "./Reveal";

const ITEMS = [
  {
    date: "2024.11.18",
    cat: "Book",
    catClass: "cat--book",
    title: "新刊『記録する人のための文章術』を刊行しました",
    desc: "取材メモを読まれる原稿へ変えるための実践知をまとめた一冊を刊行しました。",
  },
  {
    date: "2024.09.02",
    cat: "Event",
    catClass: "cat--event",
    title: "働き方をテーマにしたトークイベントに登壇します",
    desc: "これからのキャリアと、書く仕事の続け方について話します。",
  },
  {
    date: "2024.06.14",
    cat: "Interview",
    catClass: "cat--interview",
    title: "地方で新しい働き方を実践する人へのインタビューを公開",
    desc: "移住して起業した方に、決断の背景と日々の手応えを伺いました。",
  },
  {
    date: "2024.03.27",
    cat: "Article",
    catClass: "cat--article",
    title: "AIと共に働く現場のいまを取材した記事を寄稿",
    desc: "業務にAIを取り入れた企業を訪ね、変化と戸惑いの両面を描きました。",
  },
  {
    date: "2023.12.10",
    cat: "Media",
    catClass: "cat--media",
    title: "ラジオ番組にゲスト出演しました",
    desc: "地方経済と小さな商いについて、取材で見えたことをお話ししました。",
  },
  {
    date: "2023.10.05",
    cat: "News",
    catClass: "cat--news",
    title: "企業オウンドメディアの編集協力を開始しました",
    desc: "採用広報メディアの立ち上げから記事編集までを継続支援します。",
  },
  {
    date: "2023.07.21",
    cat: "Article",
    catClass: "cat--article",
    title: "商店街再生の取材レポートを公開",
    desc: "小さな町の商店街を支える人々を訪ね、再生の過程を記録しました。",
  },
  {
    date: "2023.04.03",
    cat: "News",
    catClass: "cat--news",
    title: "地方移住者の働き方に関する連載を開始しました",
    desc: "移住して働く人々を追うシリーズ連載がスタートしました。",
  },
];

export default function Articles() {
  return (
    <section className="section" id="articles">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Articles / Topics</p>
          <h2 className="section-title">活動報告・お知らせ</h2>
          <p className="section-lead">
            新刊、寄稿記事、インタビュー、登壇、メディア出演など、最近の活動を時系列でお知らせします。
          </p>
        </Reveal>

        <Reveal className="articles__list" delay={80}>
          {ITEMS.map((it) => (
            <article className="article-row" key={it.title}>
              <time className="article-row__date">{it.date}</time>
              <span className={`article-row__cat ${it.catClass}`}>{it.cat}</span>
              <div>
                <p className="article-row__title">{it.title}</p>
                <p className="article-row__desc">{it.desc}</p>
              </div>
              <a
                href="#contact"
                className="article-row__more"
                aria-label={`${it.title} の詳細`}
              >
                Read more →
              </a>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
