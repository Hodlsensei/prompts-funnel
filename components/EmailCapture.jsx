"use client";

import { useState } from "react";
import { CONFIG } from "@/lib/config";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | ok | err

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch(CONFIG.emailEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <section className="section" id="free-pack">
      <div className="shell">
        <div className="capture">
          <div>
            <p className="eyebrow">no card required</p>
            <h2>Try 8 prompts before you buy 500.</h2>
            <p style={{ marginTop: 12 }}>
              Get a free sample from the code review and debugging sections,
              delivered as a PDF. If they save you time, the full pack will
              too.
            </p>

            <form className="capture-form" onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: "none" }}>
                Email address
              </label>
              <input
                id="email"
                className="input"
                type="email"
                required
                placeholder="you@terminal.dev"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending…" : "Send it free"}
              </button>
            </form>

            {status === "ok" && (
              <p className="capture-status ok">
                ✓ Sent. Check your inbox in the next couple of minutes.
              </p>
            )}
            {status === "err" && (
              <p className="capture-status err">
                Couldn&apos;t send that — try again, or wire up{" "}
                {CONFIG.emailEndpoint} in lib/config.js.
              </p>
            )}

            <p className="capture-note">no spam. unsubscribe anytime.</p>
          </div>

          <div className="term">
            <div className="term-bar">
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-title">free-sample.pdf</span>
            </div>
            <div className="term-body">
              <div className="diff-line diff-ctx">
                <span className="diff-marker">#</span>
                <span className="diff-text">code-review/security-focused-review.md</span>
              </div>
              <div className="diff-line diff-ctx">
                <span className="diff-marker">#</span>
                <span className="diff-text">debugging/stack-trace-explainer.md</span>
              </div>
              <div className="diff-line diff-ctx">
                <span className="diff-marker">#</span>
                <span className="diff-text">debugging/intermittent-bug-triage.md</span>
              </div>
              <div className="diff-line diff-ctx">
                <span className="diff-marker">#</span>
                <span className="diff-text">+ 5 more, delivered instantly</span>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </section>
  );
}