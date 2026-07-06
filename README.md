# ShijimiWORKs Journal — Portfolio HP 007

フリージャーナリスト「ShijimiWORKs」の個人公式サイト（架空）です。
これまでの書籍・寄稿・取材・講演などの活動を紹介し、
執筆依頼・取材依頼・講演依頼・編集協力・書籍企画の相談につなげることを目的としています。

- **サイト名**: ShijimiWORKs Journal
- **管理番号**: 007
- **サイト種別**: 個人営業用HP（フリージャーナリスト個人公式サイト）
- **GitHubリポジトリ**: https://github.com/ShijimiWORKs-sudo/shijimiworks-yokai-steak-site_ProtforioHP007

---

## サイト概要

出版社・編集者・メディア関係者・企業広報担当者に向けて、
「この人に書いてほしい・取材してほしい」と思ってもらうための、
読みやすさと信頼感を重視した1ページ完結型の個人公式サイトです。
書籍紹介を主役に、活動実績・活動報告・専門テーマ・依頼メニューを整理し、
Contactセクションへ自然に導きます。

## 使用技術

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**（strict モード）
- **CSS**: `app/globals.css`（エディトリアル系デザインシステムをCSS変数で管理）
- スクロール演出: `IntersectionObserver`（`components/Reveal.tsx`、`prefers-reduced-motion` に配慮）
- レスポンシブ対応（PC / タブレット / スマホ 375px）
- 画像最適化: `next/image`
- 書影（ブックカバー）: 実在書影は不使用。**CSSで自作した架空書影モックアップ**

## セクション構成

| # | セクション | 内容 |
|---|-----------|------|
| 1 | Hero | 立場・キャッチコピー・サブコピー・CTA（執筆を依頼する / 著書を見る） |
| 2 | Profile | 活動内容と、活動開始年・得意テーマ・対応可能な仕事・拠点・取材対応地域・オンライン対応の一覧 |
| 3 | Books | 架空の著書5冊（CSS自作書影・タイトル・サブタイトル・出版年・ジャンル・価格・内容・購入導線） |
| 4 | Works | 活動実績をカテゴリ別（Web寄稿 / オウンドメディア / インタビュー / 講演・書籍）に整理 |
| 5 | Articles / Topics | 活動報告・お知らせ8件をタイムライン表示（News / Article / Interview / Book / Event / Media） |
| 6 | Writing Themes | 専門テーマ4領域（働き方 / 地方と暮らし / テクノロジー / 文化と生活） |
| 7 | Request | 依頼できる仕事6種（執筆 / 取材 / 講演 / 編集協力 / 書籍企画 / 調査レポート） |
| 8 | Flow | 依頼から納品までの8ステップ |
| 9 | Price | 料金の目安 |
| 10 | FAQ | よくあるご質問8件（アコーディオン） |
| 11 | Contact | 問い合わせフォームUI（依頼種別選択・ダミー完了表示、実送信なし） |

グローバルナビはページ内アンカーリンク（Profile / Books / Works / Articles / Topics / Request / FAQ / Contact）。
※ ナビの「Topics」は Writing Themes セクションへのアンカーです。

## コンポーネント構成

```
app/
  layout.tsx      … メタデータ・OGP・全体レイアウト
  page.tsx        … 各セクションの組み立て
  globals.css     … デザインシステム / 全スタイル
  icon.svg        … ファビコン（自作SVG）
components/
  Header / Hero / Profile / Books / Works / Articles /
  Themes / Request / Flow / Price / FAQ / Contact / Footer / Reveal
public/
  og.svg          … OGP画像（自作SVG）
```

---

## 画像・イラスト素材の出典と商用利用可否

### 写真素材（Unsplash）

Hero・Profile の写真は **Unsplash** の素材を使用しています。

- **出典サイト**: https://unsplash.com/
- **ライセンス**: Unsplash License
- **ライセンス確認先URL**: https://unsplash.com/license
- **商用利用**: ✅ 可（無料・商用利用可・帰属表示は任意）

使用画像URL一覧：

| 用途 | 画像URL |
|------|---------|
| Hero（書斎・原稿・万年筆のデスク） | https://images.unsplash.com/photo-1455390582262-044cdead277a |
| Profile（ノートに書き込む手元） | https://images.unsplash.com/photo-1517842645767-c639042777db |

> Unsplash License は商用・非商用ともに無料で利用でき、帰属表示は任意です。
> 人物の顔が主題となる写真、実在の書影・商標・アート作品が写る写真は避け、
> デスク・原稿・手元などの作業風景を選定しています。

### 自作素材（第三者素材なし）

以下は第三者素材を使わず、CSS・SVGで自作しているため **商用利用可**（著作権・商標上の懸念なし）です。

- **Books の書影（ブックカバー）5点**: 実在の書影は一切使用せず、CSSグラデーション＋テキストで作成した**架空書影モックアップ**
- OGP画像 `public/og.svg`（自作SVG）
- ファビコン `app/icon.svg`（自作SVG）
- Articles のカテゴリタグ、Themes のカラーバーなどの装飾（CSS）

### 素材利用に関する確認結果

- 参考サイト（iwamahitomi.com）の画像・写真・書影・文章・ロゴ・固有名詞・実績は一切使用していません。
- 掲載している書籍名・著書・実績・プロフィールはすべて架空の新規作成です。
- 実在の書籍表紙・書影は使用していません（書影はすべてCSS自作）。
- 使用素材はすべて商用利用可能な無料素材、または自作素材です。
- ライセンスが曖昧な素材は使用していません。

---

## セットアップ

### 必要環境
- Node.js 18.17 以上（推奨: 20 以上）

### インストール
```bash
npm install
```

### 起動方法（開発サーバー）
```bash
npm run dev
# http://localhost:3000
```

### 型チェック
```bash
npm run typecheck
```

### ビルド方法
```bash
npm run build
npm run start   # 本番サーバー起動
```

Windows で `npm` が使えない場合は `npm.cmd` に読み替えてください。

---

## アクセシビリティ / SEO

- 適切な見出し階層（h1 → h2 → h3）
- 画像の `alt` 属性、装飾的な書影・アイコンは `aria-hidden`
- Articles のカテゴリは色だけでなくテキストラベルでも区別
- フォームは `label` と入力を紐付け、必須項目を明示
- キーボード操作対応、`:focus-visible` のフォーカスリング、本文スキップリンク
- `prefers-reduced-motion` でアニメーションを無効化
- 本文は可読性を最優先（`--measure` による行長設計、十分な行間）
- `title` / `description` / OGP / Twitter Card を `app/layout.tsx` に設定

---

## ライセンス / 注意

本サイトはポートフォリオ掲載用に制作した架空のサンプルです。
掲載している人物・書籍・実績・活動報告・料金・連絡先はすべて架空のものです。
