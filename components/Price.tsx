import Reveal from "./Reveal";

const PRICES = [
  { name: "Web記事執筆", en: "Web Article", value: "30,000", unit: " 〜" },
  { name: "インタビュー記事", en: "Interview", value: "60,000", unit: " 〜" },
  { name: "取材同行あり記事", en: "With Field Reporting", value: "80,000", unit: " 〜" },
  { name: "コラム連載", en: "Column Series", value: "100,000", unit: " / 月 〜" },
  { name: "講演・登壇", en: "Talk / Lecture", value: "100,000", unit: " 〜" },
  { name: "書籍企画・構成相談", en: "Book Planning", value: "150,000", unit: " 〜" },
  { name: "編集協力", en: "Editing Support", value: "50,000", unit: " 〜" },
];

export default function Price() {
  return (
    <section className="section" id="price">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Price</p>
          <h2 className="section-title">料金の目安</h2>
          <p className="section-lead">
            内容に応じたわかりやすい料金設定です。ご予算に合わせた進め方もご相談いただけます。
          </p>
        </Reveal>

        <Reveal className="price__table" delay={80}>
          {PRICES.map((p) => (
            <div className="price-row" key={p.name}>
              <span className="price-row__name">
                <strong>{p.name}</strong>
                <span>{p.en}</span>
              </span>
              <span className="price-row__value">
                ¥{p.value}
                <em>{p.unit}</em>
              </span>
            </div>
          ))}
        </Reveal>

        <Reveal as="p" className="price__note">
          媒体、文字数、取材有無、撮影有無、納期、使用範囲により変動します。まずはお気軽にご相談ください。
        </Reveal>
      </div>
    </section>
  );
}
