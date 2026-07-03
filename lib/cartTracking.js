// ------------------------------------------------------------------
// Lightweight "did they click Buy but not come back purchased" tracker.
// No backend, no webhooks — just sessionStorage + the Page Visibility API.
// ------------------------------------------------------------------

const STORAGE_KEY = "checkout_click_info";

export function markCheckoutClicked(plan, url) {
  const info = {
    plan,
    url,
    clickedAt: Date.now(),
    dismissed: false,
  };
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(info));
}

export function getCheckoutClickInfo() {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function dismissCheckoutReminder() {
  const info = getCheckoutClickInfo();
  if (!info) return;
  info.dismissed = true;
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(info));
}

export function clearCheckoutClick() {
  sessionStorage.removeItem(STORAGE_KEY);
}