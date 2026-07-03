"use client";

import { useEffect, useState } from "react";
import {
  getCheckoutClickInfo,
  dismissCheckoutReminder,
} from "@/lib/cartTracking";

const REMIND_AFTER_MS = 60 * 1000; // 1 minute

export default function AbandonedCartBanner() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    function checkAndMaybeShow() {
      const stored = getCheckoutClickInfo();
      if (!stored || stored.dismissed) {
        setInfo(null);
        return;
      }
      const elapsed = Date.now() - stored.clickedAt;
      if (elapsed >= REMIND_AFTER_MS) {
        setInfo(stored);
      }
    }

    // Check on mount (covers browser back-button case)
    checkAndMaybeShow();

    // Check again whenever they return to this tab
    function onVisibilityChange() {
      if (document.visibilityState === "visible") {
        checkAndMaybeShow();
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Also poll every 10s in case they never leave the tab at all
    const interval = setInterval(checkAndMaybeShow, 10000);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      clearInterval(interval);
    };
  }, []);

  function handleDismiss() {
    dismissCheckoutReminder();
    setInfo(null);
  }

  if (!info) return null;

  return (
    <div className="cart-banner" role="status">
      <div className="cart-banner-text">
        <strong>Still there?</strong> Your Full Pack checkout is waiting.
      </div>
      <div className="cart-banner-actions">
        <a href={info.url} className="btn btn-primary" style={{ padding: "8px 16px" }}>
          Finish checkout
        </a>
        <button className="cart-banner-dismiss" onClick={handleDismiss} aria-label="Dismiss">
          ×
        </button>
      </div>
    </div>
  );
}