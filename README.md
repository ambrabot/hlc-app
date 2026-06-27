# HLC Club — functional eating companion (PWA)

Installable member app for the Wellness & Healthy LifeStyle Club. Healthy desserts first:
real recipes with macros, the functional "why", clean swaps, protocols and tea rituals.

## Architecture
- **Frontend** — static PWA (`index.html` + `app.js` + `recipes.js` + `sw.js`), served by GitHub Pages at `https://app.healthyfoodrecipesclub.com`. No build step.
- **Backend** — Cloudflare Worker `hlcapp-api` (`worker/`) + D1 database `hlcapp`.
- **Auth** — passwordless **email-code** (6-digit, via Brevo). Brute-force–limited.
- **Money** — **Stripe subscription** ($9/mo · $69/yr USD, shared US account). Webhook-driven entitlements with status/expiry; Club content is paywall-gated.
- **Content** — `recipes.js` holds 18 recipe "atoms" generated from the Dessert Reset eBook (macros + functional lens + swaps). 6 free, 12 Club.

## Files
- `index.html` — shell + styles (forest/emerald/gold skin, Cormorant + Inter, SVG icons).
- `app.js` — API client, email-code auth, favorites sync, paywall gating, Stripe checkout.
- `recipes.js` — recipe atoms (regenerate via `scratchpad` parser from the eBook).
- `assets/recipes/` — real recipe photos.
- `worker/` — the API (see `worker/src/index.js`, `worker/migrations/`).

## Deploy
- **Frontend:** push to `main` → GitHub Pages.
- **Worker:** `cd worker && npx wrangler deploy` (OAuth login; run from a dir without `.env`).
- **Migrations:** `cd worker && npx wrangler d1 migrations apply hlcapp --remote`.
- **Secrets** (set via `wrangler secret put`): `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `BREVO_API_KEY`, `PAYHIP_WEBHOOK_SECRET`.

See `MONETIZATION.md` for the subscription wiring.
