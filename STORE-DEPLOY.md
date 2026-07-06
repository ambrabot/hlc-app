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

### Steps
1. **Create the Play Developer account** — https://play.google.com/console → pay $25 →
   complete identity verification (Google now requires this; can take 1–2 days).
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

## Gates (need Julia)
- [ ] $25 Google Play account + identity verification
- [ ] Capture Android screenshots on a real device
- [ ] Decide the iOS Mac route (cloud / borrow / buy) → then $99/yr Apple
- [ ] Keep the PWABuilder signing keystore backed up (can't update the app without it)
