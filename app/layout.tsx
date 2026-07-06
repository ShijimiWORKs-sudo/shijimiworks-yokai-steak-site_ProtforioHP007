import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://shijimiworks-journal.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ShijimiWORKs Journal | Freelance Journalist / Writer",
  description:
    "ShijimiWORKs Journalは、書籍、寄稿、取材、講演を通じて、働き方、地方、テクノロジー、暮らしの変化を伝えるフリージャーナリストの個人公式サイトです。",
  keywords: [
    "フリージャーナリスト",
    "ライター",
    "執筆依頼",
    "取材依頼",
    "講演依頼",
    "編集協力",
    "書籍企画",
    "働き方",
    "地方",
    "ShijimiWORKs",
  ],
  authors: [{ name: "ShijimiWORKs" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "ShijimiWORKs Journal",
    title: "ShijimiWORKs Journal | Freelance Journalist / Writer",
    description:
      "書籍、寄稿、取材、講演を通じて、働き方・地方・テクノロジー・暮らしの変化を伝えるフリージャーナリストの個人公式サイトです。",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "ShijimiWORKs Journal — Freelance Journalist / Writer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShijimiWORKs Journal | Freelance Journalist / Writer",
    description:
      "書籍、寄稿、取材、講演を通じて、働き方・地方・テクノロジー・暮らしの変化を伝えるフリージャーナリストの個人公式サイトです。",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <a className="skip-link" href="#main">
          本文へスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
