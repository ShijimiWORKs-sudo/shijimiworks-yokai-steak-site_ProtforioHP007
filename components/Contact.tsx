"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 実送信は行いません（ポートフォリオ用のダミー完了表示）
    setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="contact__title">ご相談ください</h2>
          <p className="contact__lead">
            執筆、取材、講演、編集協力、書籍企画について、お気軽にご相談ください。媒体の目的や読者像を整理しながら、必要な形をご提案します。
          </p>
          <div className="contact__info">
            <div>
              <span>Email</span>
              <p>contact@shijimiworks-journal.example.com</p>
            </div>
            <div>
              <span>For</span>
              <p>出版社 / 編集者 / メディア / 企業広報</p>
            </div>
            <div>
              <span>Area</span>
              <p>全国対応 ・ オンライン可</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="form__done" role="status">
              <strong>Thank you.</strong>
              <p>
                お問い合わせありがとうございます。内容を確認のうえ、2〜3営業日以内にご返信します。
                <br />
                （こちらはポートフォリオ用のデモ表示です。実際の送信は行われません。）
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">
                  お名前 <em>*</em>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="山田 太郎"
                />
              </div>
              <div className="field">
                <label htmlFor="company">会社名・媒体名</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="〇〇出版 / 〇〇メディア"
                />
              </div>
              <div className="field field--full">
                <label htmlFor="email">
                  メールアドレス <em>*</em>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="type">依頼種別</label>
                <select id="type" name="type" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>執筆依頼</option>
                  <option>取材依頼</option>
                  <option>講演依頼</option>
                  <option>編集協力</option>
                  <option>書籍企画相談</option>
                  <option>その他</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="deadline">希望納期</label>
                <select id="deadline" name="deadline" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>2週間以内</option>
                  <option>1ヶ月以内</option>
                  <option>1〜2ヶ月</option>
                  <option>相談したい</option>
                </select>
              </div>
              <div className="field field--full">
                <label htmlFor="budget">予算感</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>〜5万円</option>
                  <option>5〜10万円</option>
                  <option>10〜20万円</option>
                  <option>20万円以上</option>
                  <option>相談したい</option>
                </select>
              </div>
              <div className="field field--full">
                <label htmlFor="message">
                  相談内容の詳細 <em>*</em>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="媒体・テーマ・読者像・分量・取材の有無などをお書きください。"
                />
              </div>
              <div className="form__submit">
                <button type="submit" className="btn">
                  送信する <span className="btn__arrow">→</span>
                </button>
                <span className="form__note">
                  ※ デモ用フォームです。実際の送信は行われません。
                </span>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
