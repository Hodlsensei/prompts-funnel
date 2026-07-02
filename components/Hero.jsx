import { CONFIG } from "@/lib/config";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero-grid">
        <div>
          <p className="eyebrow">500 prompts, 7 workflows, 0 fluff</p>
          <h1>
            Stop prompting like a tourist.
            <br />
            Start prompting like it&apos;s <span className="hero-accent">your codebase</span>.
          </h1>
          <p className="lede">
            A prompt library built around the work you actually do — code review,
            debugging a stack trace, writing tests, shipping a PR — not
            &quot;write me a function that reverses a string.&quot;
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary">
              Get the pack — ${CONFIG.prices.main.amount}
            </a>
            <a href="#free-pack" className="btn btn-ghost">
              Try 8 prompts free
            </a>
          </div>
          <p className="hero-meta">git clone && ship faster — no account, no upsell wall</p>
        </div>

        <div className="term" aria-label="Example prompt improvement, shown as a code diff">
          <div className="term-bar">
            <span className="term-dot" />
            <span className="term-dot" />
            <span className="term-dot" />
            <span className="term-title">prompt.diff</span>
          </div>
          <div className="term-body">
            <div className="diff-hunk">@@ debugging_a_stack_trace @@</div>

            <div className="diff-line diff-del">
              <span className="diff-marker">-</span>
              <span className="diff-text">&quot;why is this code broken, fix it&quot;</span>
            </div>

            <div className="diff-line diff-add">
              <span className="diff-marker">+</span>
              <span className="diff-text">
                &quot;Here&apos;s the error + stack trace from my Next.js
              </span>
            </div>
            <div className="diff-line diff-add">
              <span className="diff-marker">+</span>
              <span className="diff-text">
                app. Explain the root cause in plain language,
              </span>
            </div>
            <div className="diff-line diff-add">
              <span className="diff-marker">+</span>
              <span className="diff-text">
                then give me 2-3 things to check first.&quot;
              </span>
            </div>

            <div className="diff-line diff-ctx">
              <span className="diff-marker"> </span>
              <span className="diff-text">// same model. better output. every time.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}