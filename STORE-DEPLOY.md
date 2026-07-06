# HLC Club — App Store Deployment Runbook

Two stores, two very different effort/gate profiles. **Android is achievable now
from Windows. iOS requires a Mac.** Do Android first.

Prereqs already in place (this repo): installable PWA, manifest with `id`/icons/
maskable, service worker (`hlc-v45-polish`), HTTPS on `app.healthyfoodrecipesclub.com`,
**privacy policy** at `/privacy/`, **assetlinks.json** scaffold at `/.well-known/`.

---

## 🤖 ANDROID — Google Play (via PWABuilder TWA)

**Cost:** $25 one-time (Google Play Developer account). **Machine:** any (Windows OK).
**Why TWA:** wraps the live PWA; camera/scanner/checkout all work; no Android Studio needed.

> **⚠️ Verified July 2026 — the ONE decision that shapes the whole path:**
> New **personal** Play accounts must run a **closed test with 12 testers for 14
> consecutive days** before they can request production access. **Organization
> accounts are EXEMPT** from this — but an org account requires a **DUNS number**
> (free from Dun & Bradstreet, ~1–5 business days to issue).
> → **Recommendation: register as an ORGANIZATION** (under your business entity) if
> you have/can get a DUNS — it skips the 12-tester gauntlet, the single biggest
> first-timer delay. Go **personal** only if you'd rather gather 12 testers than
> wait on DUNS. Note: as a **Brazil-based** developer you'll also face Android
> Developer Verification (gov ID + proof of address; first enforcement Sept 30 2026)
> — a verified Play account already satisfies it; **DUNS is org-only, not required for individuals.**

### Steps
1. **Create the Play Developer account** — https://play.google.com/console → pay $25
   (one-time; real credit/debit card, no prepaid) → **identity verification** (gov photo
   ID + selfie, ~24h). Choose personal vs organization per the decision above.
2. **Generate the Android package** — go to https://www.pwabuilder.com → enter
   `https://app.healthyfoodrecipesclub.com` → *Package for stores* → **Android**.
   - Package ID: `com.healthyfoodrecipesclub.app` (must match `.well-known/assetlinks.json`).
   - App name: `HLC Club`. Let PWABuilder **create a new signing key** (download &
     keep the `.keystore` + passwords SAFE — losing it means you can't update the app).
   - Download the zip → contains the `.aab` (upload to Play), `assetlinks.json`, and
     a `signing-key-info` file with the **SHA-256 fingerprint**.
3. **Finalize Digital Asset Links** — copy the `sha256_cert_fingerprints` from
   PWABuilder's `assetlinks.json` into this repo's `/.well-known/assetlinks.json`
   (replace the placeholder), commit + deploy. Verify:
   `https://app.healthyfoodrecipesclub.com/.well-known/assetlinks.json` is live.
   → Without this, the app shows a browser URL bar.
4. **Play Console → Create app** → fill the listing (copy below) → upload the `.aab`
   to a **Closed testing** track first (test on your phone), then promote to Production.
5. **Complete required forms:** Privacy policy URL (`/privacy/`), Data safety,
   Content rating questionnaire, Target audience (18+), Ads (No). Submit for review
   (first review ~a few days).

### Screenshots you must capture (Play requires ≥2 phone screenshots)
Open the app on an Android phone (or Chrome DevTools device mode) and capture:
1. Clean Check result (a scanned product with the inflammation read)
2. Rate my Plate result (calories + macros + score)
3. Discover / recipes grid
4. A recipe detail
5. The wellness check-in
Sizes: phone 1080×1920 (portrait) or similar 16:9. Feature graphic: 1024×500.

---

## 🍎 iOS — Apple App Store (requires a Mac)

**Cost:** $99/year (Apple Developer Program). **Hard gate: macOS + Xcode to build/submit.**
No Windows-only path exists. Options for the Mac:
- **Cloud Mac CI** — Codemagic (free tier for open/small), or MacinCloud (~$20/mo). Build & submit remotely.
- **Borrow a Mac** for a day.
- **Mac Mini** (cheapest owned option).

### Path (once a Mac is available)
1. Enroll in Apple Developer Program ($99/yr).
2. Wrap the PWA with **Capacitor** (see `reference_pwa_to_native`):
   `npm i @capacitor/core @capacitor/cli` → `npx cap init "HLC Club" com.healthyfoodrecipesclub.app`
   → point `server.url` to the live app (or bundle the static build) →
   `npx cap add ios` → add Camera + PushNotifications plugins.
3. Open in Xcode → set signing team → Archive → upload to App Store Connect.
4. Fill App Privacy ("nutrition label"), screenshots (6.7" + 6.1" iPhone), and submit.
   - Apple is stricter than Google about "is this just a website?" — our app has real
     account state, offline shell, camera scanning and native-feel UI, which satisfies
     the "minimum functionality" guideline, but lead the review notes with those points.

---

## 📝 Store listing copy (both stores)

**App name:** HLC Club — Functional Eating

**Short description (Play, ≤80 chars):**
Scan any food for its inflammation load, rate your plate, eat anti-inflammatory.

**Subtitle (Apple, ≤30 chars):** Eat food that loves you back

**Full description:**
> HLC Club turns your phone into a functional-nutrition companion.
>
> • CLEAN CHECK — scan any packaged food's barcode (or a photo) and instantly see its
>   inflammation load, the additives that matter and why, allergens and diet badges,
>   plus cleaner swaps. Works with products worldwide.
> • RATE MY PLATE — snap your meal and get an anti-inflammatory score with an estimate
>   of calories and macros, then simple tips to make it better.
> • WHOLE FOODS — point at a raw ingredient and learn its vitamins, minerals,
>   antioxidants and how it supports your body.
> • RECIPES & PROTOCOLS — anti-inflammatory recipes with macros and the functional
>   "why", plus guided reset and gut protocols.
> • YOUR BASELINE — a 60-second check-in personalizes everything to how you feel.
>
> Available in 7 languages. Educational wellness content — not medical advice.

**Keywords (Apple, ≤100 chars):**
anti-inflammatory,nutrition,food scanner,healthy,clean eating,macros,gut health,wellness,recipes

**Category:** Health & Fitness (primary), Food & Drink (secondary)
**Content rating / age:** 18+
**Privacy policy URL:** https://app.healthyfoodrecipesclub.com/privacy/
**Support email:** info@healthyfoodrecipesclub.com

---

## Build task before EITHER store accepts us
- [ ] **In-app account deletion** — both stores now require any app with login to offer
      account+data deletion *inside the app* AND a public web deletion URL. We have the
      email path in the privacy policy, but a "Delete my account" button (calls a worker
      endpoint that purges the user's D1 rows) is required before submission. → build.
- [ ] **Data Safety (Play) / App Privacy (Apple)** must declare EXACTLY what the privacy
      policy lists: email, wellness answers, favorites, camera, Stripe payment data,
      Clarity analytics. Mismatch = the #1 rejection cause.

## Gates (need Julia)
- [ ] **Decide: Organization vs Personal Play account** (see the boxed decision above —
      org skips the 12-tester/14-day test but needs a free DUNS, ~1–5 days).
- [ ] $25 Google Play account + identity verification (Brazil: gov ID + proof of address).
- [ ] If personal account: line up **12 testers** willing to stay opted-in 14 straight days.
- [ ] Capture Android screenshots on a real device (≥2).
- [ ] Decide the iOS Mac route → then $99/yr Apple. Verified options: **Codemagic** (free
      500 macOS min/mo + auto App Store submission) or **MacinCloud** ($1/hr or $4/day RDP).
- [ ] Keep the PWABuilder signing keystore backed up (can't update the app without it).
