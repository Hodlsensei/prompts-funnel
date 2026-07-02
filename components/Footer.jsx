import { CONFIG } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <span>
          © {new Date().getFullYear()} {CONFIG.productName}
        </span>
        <span>built by a developer, not a marketer</span>
      </div>
    </footer>
  );
}
