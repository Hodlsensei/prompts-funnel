import { CONFIG } from "@/lib/config";

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="shell">
        <div className="section-head center">
          <p className="eyebrow">pricing</p>
          <h2>Pay once. Own it forever.</h2>
        </div>

        <div className="pricing-grid pricing-grid-single">
          <div className="price-card featured">
            <span className="price-card-badge">Full library</span>
            <div>
              <p className="price-name">{CONFIG.prices.main.label}</p>
              <p className="price-amount">
                ${CONFIG.prices.main.amount}
                <span> one-time</span>
              </p>
            </div>
            <ul className="price-features">
              <li>500 workflow-tested prompts, every category</li>
              <li>Delivered instantly by Gumroad after purchase</li>
              <li>Organized the way your repo is — no digging</li>
              <li>Lifetime access to future free updates</li>
            </ul>
            <a
              href={CONFIG.checkout.main}
              className="btn btn-primary btn-block gumroad-button"
            >
              Get the 500 Prompts Pack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}