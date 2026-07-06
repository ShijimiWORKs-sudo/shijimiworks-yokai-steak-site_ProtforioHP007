import Reveal from "./Reveal";

const STEPS = [
  { title: "お問い合わせ", desc: "フォームからご連絡ください。企画が固まっていなくても構いません。" },
  { title: "依頼内容の確認", desc: "媒体・目的・分量・ご希望を伺います。" },
  { title: "テーマ・媒体・読者の整理", desc: "誰に何を届けるかを一緒に整理します。" },
  { title: "お見積り", desc: "取材の有無や分量に応じてお見積りをお出しします。" },
  { title: "取材・資料確認", desc: "必要な取材や資料の確認を行います。" },
  { title: "執筆・編集", desc: "読み手に届く原稿へ執筆・編集します。" },
  { title: "確認・修正", desc: "内容をご確認いただき、丁寧に調整します。" },
  { title: "納品・公開", desc: "指定の形式で納品し、公開までサポートします。" },
];

export default function Flow() {
  return (
    <section className="section section--alt" id="flow">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Flow</p>
          <h2 className="section-title">依頼から納品までの流れ</h2>
          <p className="section-lead">
            ご相談から納品・公開まで、8つのステップで進めます。各段階で確認を挟みながら進めます。
          </p>
        </Reveal>

        <div className="flow__list">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} className="flow-step" delay={(i % 4) * 70}>
              <span className="flow-step__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="flow-step__title">{s.title}</h3>
              <p className="flow-step__desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
