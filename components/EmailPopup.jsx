"use client";

import { useEffect, useState } from "react";
import { CONFIG } from "@/lib/config";

const SESSION_KEY = "promptpack_popup_shown";
const SHOW_AFTER_MS = 8000; // 8 seconds on page

export default function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | ok | err

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, SHOW_AFTER_MS);

    return () => clearTimeout(timer);
  }, []);

  function close() {
    setVisible(false);
  }

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
      setTimeout(close, 1800);
    } catch {
      setStatus("err");
    }
  }

  if (!visible) return null;

  return (
    <div className="popup-overlay" onClick={close}>
      <div
        className="popup-card"
        role="dialog"
        aria-modal="true"
        aria-label="Get 8 free prompts"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close" onClick={close} aria-label="Close">
          ×
        </button>

        <p className="eyebrow">wait —</p>
        <h3 style={{ fontSize: 22, marginBottom: 10 }}>
          Try 8 prompts before you buy 500.
        </h3>
        <p style={{ marginBottom: 20 }}>
          Free sample from the code review and debugging sections. No card,
          no spam — just the PDF.
        </p>

        {status === "ok" ? (
          <p className="capture-status ok">✓ Sent — check your inbox.</p>
        ) : (
          <form className="capture-form" onSubmit={handleSubmit}>
            <label htmlFor="popup-email" style={{ display: "none" }}>
              Email address
            </label>
            <input
              id="popup-email"
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
              {status === "loading" ? "Sending…" : "Send it"}
            </button>
          </form>
        )}

        {status === "err" && (
          <p className="capture-status err">Something went wrong — try again.</p>
        )}

        <button className="popup-skip" onClick={close}>
          No thanks, I'll just buy the full pack
        </button>
      </div>
    </div>
  );
}