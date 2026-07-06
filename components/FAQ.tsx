"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "まだ企画が固まっていなくても相談できますか？",
    a: "はい、もちろんです。「こんなテーマで何か作りたい」という段階からご相談いただけます。読者像や目的を伺いながら、一緒に企画を整理します。",
  },
  {
    q: "取材から執筆まで依頼できますか？",
    a: "はい。取材の設計、アポイント調整、インタビュー、原稿執筆までを一貫してお引き受けできます。取材のみ、執筆のみのご依頼も可能です。",
  },
  {
    q: "オンライン取材は可能ですか？",
    a: "はい。オンラインでの取材・インタビュー、打ち合わせに対応しています。遠方の方や、短時間での取材にも柔軟に対応します。",
  },
  {
    q: "地方取材にも対応できますか？",
    a: "はい。地方の現地取材・同行取材にも対応しています。移動を含むスケジュールや費用については、事前にご相談のうえ調整します。",
  },
  {
    q: "講演や登壇依頼はできますか？",
    a: "はい。働き方、地方、AI時代のキャリア、文章術などをテーマに、講演・登壇・トークイベントをお引き受けしています。",
  },
  {
    q: "原稿の編集だけでも依頼できますか？",
    a: "はい。すでにある原稿の構成整理・編集・リライトのみのご依頼も承ります。メディア全体の編集設計のご相談も可能です。",
  },
  {
    q: "納期はどのくらいですか？",
    a: "分量や取材の有無によりますが、Web記事で約1〜2週間、取材を含む記事で約2〜4週間が目安です。ご希望の納期にできるだけ合わせます。",
  },
  {
    q: "著書や過去実績を確認できますか？",
    a: "はい。本サイトのBooks・Worksに主な著書と活動実績を掲載しています。より詳しい実績資料が必要な場合は、お問い合わせよりご請求ください。",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement | null>(null);
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        id={btnId}
        className="faq-item__q"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {q}
        <span className="faq-item__icon" aria-hidden="true" />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="faq-item__a"
        ref={answerRef}
        style={{
          maxHeight: open ? `${answerRef.current?.scrollHeight ?? 400}px` : 0,
        }}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section section--paper" id="faq">
      <div className="container">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">よくあるご質問</h2>
        </Reveal>

        <Reveal className="faq__list" delay={80}>
          {FAQS.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
