import Reveal from "./Reveal";

const REQUESTS = [
  {
    title: "執筆依頼",
    desc: "Web記事、コラム、寄稿、オウンドメディア記事の執筆。",
  },
  {
    title: "取材・インタビュー",
    desc: "人物取材、企業取材、地域取材、採用広報インタビュー。",
  },
  {
    title: "講演・登壇",
    desc: "働き方、地方、AI時代のキャリア、文章術などの講演。",
  },
  {
    title: "編集協力",
    desc: "企画整理、構成作成、原稿編集、メディア設計。",
  },
  {
    title: "書籍企画",
    desc: "書籍構成、取材協力、原稿整理、出版企画の相談。",
  },
  {
    title: "調査レポート",
    desc: "地域・業界・生活者の変化に関する取材レポート作成。",
  },
];

export default function Request() {
  return (
    <section className="section" id="request">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Request</p>
          <h2 className="section-title">依頼できること</h2>
          <p className="section-lead">
            執筆から取材、講演、編集協力まで。媒体や目的に合わせて、必要な形でお引き受けします。
          </p>
        </Reveal>

        <div className="request__grid">
          {REQUESTS.map((r, i) => (
            <Reveal key={r.title} className="request-card" delay={(i % 3) * 80}>
              <span className="request-card__no">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="request-card__title">{r.title}</h3>
              <p className="request-card__desc">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
