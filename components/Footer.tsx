const FOOTER_NAV = [
  { href: "#profile", label: "Profile" },
  { href: "#books", label: "Books" },
  { href: "#works", label: "Works" },
  { href: "#articles", label: "Articles" },
  { href: "#themes", label: "Topics" },
  { href: "#request", label: "Request" },
  { href: "#flow", label: "Flow" },
  { href: "#price", label: "Price" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__brand-name">ShijimiWORKs Journal</p>
            <p className="footer__brand-tag">
              Freelance Journalist / Writer
              <br />
              社会の変化を、読み解ける言葉にする。
            </p>
          </div>
          <nav className="footer__nav" aria-label="フッターナビゲーション">
            {FOOTER_NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} ShijimiWORKs Journal</span>
          <span>フリージャーナリスト個人公式サイト ・ Portfolio Sample</span>
        </div>
      </div>
    </footer>
  );
}
