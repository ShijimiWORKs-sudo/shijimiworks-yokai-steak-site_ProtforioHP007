import Image from "next/image";
import Reveal from "./Reveal";

const DATA: { label: string; value: string }[] = [
  { label: "活動開始", value: "2013年〜（フリーランスとして独立）" },
  { label: "得意テーマ", value: "働き方・地方と暮らし・テクノロジー・文化と生活" },
  { label: "対応可能な仕事", value: "執筆 / 取材・インタビュー / 講演・登壇 / 編集協力 / 書籍企画" },
  { label: "拠点", value: "長野県（東京・大阪へも定期的に移動）" },
  { label: "取材対応地域", value: "全国（地方取材・現地同行にも対応）" },
  { label: "オンライン対応", value: "可（オンライン取材・オンライン打ち合わせ対応）" },
];

export default function Profile() {
  return (
    <section className="section section--paper" id="profile">
      <div className="container profile__grid">
        <Reveal className="profile__figure">
          <Image
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=70"
            alt="ノートに万年筆で書き込む手元。取材メモをまとめる執筆の様子。"
            fill
            sizes="(max-width: 820px) 320px, 34vw"
          />
        </Reveal>

        <Reveal className="profile__body" delay={100}>
          <p className="eyebrow">Profile</p>
          <h2 className="section-title">現場の声を、
          <br />
          届く言葉へ。</h2>
          <p>
            ShijimiWORKsは、働き方、地方、テクノロジー、文化、暮らしの変化をテーマに執筆・取材活動を行うフリージャーナリストの個人事務所です。
          </p>
          <p>
            現場で聞いた声をもとに、社会の大きな変化を個人の生活に引き寄せて伝えることを大切にしています。
          </p>
          <p>
            書籍、Webメディア、企業オウンドメディア、講演、インタビュー記事など、媒体や目的に合わせて、読み手に届く形へ編集します。
          </p>

          <div className="profile__data">
            <dl>
              {DATA.map((d) => (
                <div key={d.label} style={{ display: "contents" }}>
                  <dt>{d.label}</dt>
                  <dd>{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
