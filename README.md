# Prompt/Pack — dev-prompts-funnel

Landing page + funnel for the "AI Prompts for Developers" product. Built with
Next.js (App Router), no CSS framework — plain CSS with design tokens in
`app/globals.css`.

## Run it locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Go-live checklist

1. **Checkout links** — open `lib/config.js` and replace the two placeholder
   URLs in `CONFIG.checkout` with your real Lemon Squeezy or Gumroad checkout
   links.
   - Lemon Squeezy: Dashboard → Products → your product → "Copy checkout URL"
   - Gumroad: your product page URL works directly

2. **Email capture** — the free-pack form posts to `/api/subscribe`
   (`app/api/subscribe/route.js`). Right now it just validates and logs the
   email. Wire it up to a real provider (ConvertKit, MailerLite, Resend) —
   the TODO comment in that file shows where.

3. **Free sample delivery** — decide how the free 8-prompt PDF actually
   reaches someone after they submit their email:
   - Simplest: your email provider's automation sends a fixed email with the
     PDF attached/linked, triggered on new subscriber
   - Or: redirect to a `/thanks` page with a direct download link (lower
     friction, no automation needed to start)

4. **Prices** — edit `CONFIG.prices` in `lib/config.js` if you want different
   numbers than $19 / $39.

5. **Deploy** — push to GitHub, then import the repo at vercel.com/new.
   Zero config needed, it's a standard Next.js app.

## File map

```
app/
  layout.jsx          — fonts + metadata
  page.jsx             — assembles all sections
  globals.css          — design tokens + all styling
  api/subscribe/route.js — email capture endpoint (placeholder)
components/
  Nav.jsx, Hero.jsx, PainPoints.jsx, Categories.jsx,
  EmailCapture.jsx, Pricing.jsx, FAQ.jsx, Footer.jsx
lib/
  config.js             — the ONE file you edit to go live
```

## Content source

The 28 prompts referenced in the Categories section are in
`dev-prompts-starter-pack.md` (delivered separately). Convert that to the
PDF/Notion doc you'll actually sell and link to via your checkout provider's
product upload.
