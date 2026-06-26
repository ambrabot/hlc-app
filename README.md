# WHLC - Wellness & Healthy LifeStyle Club

Installable PWA member app for Healthy Food Recipes Club.

- Frontend: GitHub Pages at `https://app.healthyfoodrecipesclub.com`
- Backend: Cloudflare Worker at `https://hlcapp-api.ambrainvestimentos.workers.dev`
- Database: Cloudflare D1 `hlcapp`
- Features: email-code login, account-synced favorites, free recipes, protocol entitlements, Payhip webhook endpoint, newsletter form

Deploy notes:

- Frontend deploys from the `main` branch through GitHub Pages.
- Worker deploys from `worker/` with `cmd /c wrangler deploy`.
- D1 migrations live in `worker/migrations/`.
