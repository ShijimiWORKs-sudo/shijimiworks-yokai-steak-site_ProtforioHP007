import Reveal from "./Reveal";

const CATEGORIES = [
  {
    cat: "Web Media",
    title: "Webメディア寄稿",
    items: [
      {
        type: "連載",
        date: "2023.04 –",
        title: "地方移住者の働き方に関する連載記事",
        role: "企画・取材・執筆",
        desc: "移住して働く人々を追い、地方でのキャリア形成をシリーズで記録。",
      },
      {
        type: "コラム",
        date: "2022.10",
        title: "フリーランスの契約とお金をめぐるコラム",
        role: "執筆",
        desc: "個人で働く人が直面する契約・報酬の課題をやさしく整理。",
      },
    ],
  },
  {
    cat: "Owned Media",
    title: "企業オウンドメディア",
    items: [
      {
        type: "記事制作",
        date: "2023.07",
        title: "中小企業の採用広報記事制作",
        role: "取材・構成・執筆",
        desc: "働く人の声を軸に、企業の魅力を伝える採用記事を制作。",
      },
      {
        type: "編集協力",
        date: "2022.05 –",
        title: "企業オウンドメディアの編集協力",
        role: "企画整理・編集",
        desc: "メディアの方向性づくりから記事の編集までを継続的に支援。",
      },
    ],
  },
  {
    cat: "Interview",
    title: "インタビュー記事",
    items: [
      {
        type: "企画取材",
        date: "2023.02",
        title: "AI導入企業へのインタビュー企画",
        role: "企画・取材・執筆",
        desc: "現場でのAI活用の実際を、担当者の言葉で丁寧に描いた企画。",
      },
      {
        type: "人物取材",
        date: "2021.11",
        title: "地域商店街の再生に関する取材レポート",
        role: "取材・執筆",
        desc: "商店街を支える人々を訪ね、再生の過程を記録したレポート。",
      },
    ],
  },
  {
    cat: "Talk / Book",
    title: "講演・登壇 / 書籍・編集協力",
    items: [
      {
        type: "登壇",
        date: "2023.09",
        title: "フリーランス向け講演イベント登壇",
        role: "講演・登壇",
        desc: "これからの働き方と、書く仕事の続け方をテーマに登壇。",
      },
      {
        type: "書籍",
        date: "2022.03",
        title: "書籍の取材協力・原稿整理",
        role: "取材協力・編集",
        desc: "共著書籍の取材とインタビュー原稿の整理・構成を担当。",
      },
    ],
  },
];

export default function Works() {
  return (
    <section className="section section--alt" id="works">
      <div className="container">
        <Reveal className="head-row">
          <div>
            <p className="eyebrow">Works</p>
            <h2 className="section-title">活動実績</h2>
          </div>
          <p className="section-lead">
            寄稿、オウンドメディア、インタビュー、講演、書籍。媒体ごとに、これまでの主な活動をカテゴリ別に整理しています。
          </p>
        </Reveal>

        <div className="works__grid">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.cat} className="work-cat" delay={(i % 2) * 90}>
              <h3 className="work-cat__title">
                {c.title}
                <span>{c.cat}</span>
              </h3>
              <div className="work-cat__list">
                {c.items.map((it) => (
                  <div key={it.title} className="work-item">
                    <div className="work-item__meta">
                      <span className="work-item__type">{it.type}</span>
                      <span>{it.date}</span>
                      <span>担当：{it.role}</span>
                    </div>
                    <p className="work-item__title">{it.title}</p>
                    <p className="work-item__desc">{it.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
