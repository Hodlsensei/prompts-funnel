import { CONFIG } from "@/lib/config";

export default function Nav() {
  return (
    <header className="nav">
      <div className="shell nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">{">_"}</span>
          {CONFIG.productName}
        </a>
        <nav className="nav-links">
          <a href="#categories" className="nav-links-secondary">
            What&apos;s inside
          </a>
          <a href="#pricing" className="nav-links-secondary">
            Pricing
          </a>
          <a href="#faq" className="nav-links-secondary">
            FAQ
          </a>
          <a href="#pricing" className="btn btn-primary">
            Get the pack
          </a>
        </nav>
      </div>
    </header>
  );
}
