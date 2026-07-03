"use client";

import { CONFIG } from "@/lib/config";
import { markCheckoutClicked } from "@/lib/cartTracking";

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="shell">
        <div className="section-head center">
          <p className="eyebrow">pricing</p>
          <h2>Pay once. Own it forever.</h2>
        </div>

        <div className="pricing-grid" style={{ gridTemplateColumns: "1fr", maxWidth: 420, margin: "0 auto" }}>
          <div className="price-card featured">
            <span className="price-card-badge">Instant download</span>
            <div>
              <p className="price-name">{CONFIG.prices.main.label}</p>
              <p className="price-amount">
                ${CONFIG.prices.main.amount}
                <span> one-time</span>
              </p>
            </div>
            <ul className="price-features">
              <li>All 500 prompts, all 25 workflow categories</li>
              <li>Delivered as a clean, copy-ready PDF</li>
              <li>Lifetime access to future free updates</li>
            </ul>
            <a
              href={CONFIG.checkout.main}
              className="btn btn-primary btn-block"
              onClick={() => markCheckoutClicked("main", CONFIG.checkout.main)}
            >
              Get the Full Pack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}