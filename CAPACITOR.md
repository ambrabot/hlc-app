# HLC Club — Capacitor Native Shell (iOS + Android)

Native wrapper around the **same** HLC Club web app so it can ship to the Apple
App Store and Google Play. **The live PWA is unaffected.** This doc is the handoff:
architecture, the loading strategy, build/run commands, store payment compliance,
and Julia's action items.

> Companion doc: `STORE-DEPLOY.md` (store-listing copy, screenshots, account setup,
> the Android TWA alternative). This file covers the Capacitor path specifically.

---

## TL;DR

- The web app at `app.healthyfoodrecipesclub.com` (GitHub Pages, repo root) is **100%
  untouched**. Capacitor is purely additive.
- The native app **bundles a copy** of the web assets (`www/`, generated) instead of
  loading the live URL — offline-capable and store-compliant (avoids Apple 4.2).
- One source of truth: root files feed **both** the web deploy (Pages) and the native
  bundle (`npm run build:www`). Web updates ship instantly via Pages; native updates
  ship via a new store build (or Capacitor live-update later).
- **Android is scaffolded and ready to build on Windows** (needs JDK 17 + Android SDK).
  **iOS config is documented but must be added on a Mac** (`cap add ios` needs macOS
  + Xcode + CocoaPods).
- **One decision is Julia's and affects margin:** how the $9/mo subscription is billed
  inside each store (Apple/Google cut). See **§7**.

---

## 1. Architecture — the PWA is untouched

```
                       ┌─────────────────────────────────────────┐
   ROOT web files ────►│  GitHub Pages  →  app.healthyfoodrecipes │  (PWA, unchanged)
   index.html          │  .com          (instant deploy on push) │
   app.js  i18n.js     └─────────────────────────────────────────┘
   recipes.js  sw.js          │
   manifest  icons/  assets/  │  npm run build:www  (whitelist copy)
                              ▼
                       ┌──────────────┐   cap sync   ┌────────────────────┐
                       │   www/       │─────────────►│ android/  (built)  │──► Google Play
                       │ (bundle dir) │              │ ios/     (on Mac)  │──► App Store
                       └──────────────┘              └────────────────────┘
```

Both targets serve the **identical** HTML/JS. The native shell just wraps a WebView
around the bundled copy and adds native plugins (camera, push, splash, status bar).

Backend is unchanged: the app talks to the Cloudflare Worker
`https://hlcapp-api.ambrainvestimentos.workers.dev` over HTTPS from every surface
(web, iOS, Android). Auth (email-code), favorites sync, Stripe checkout, and the
scan/plate-vision endpoints all work the same.

### The one config that makes bundling work without touching `app.js`

`app.js` picks its API base like this (unchanged):

```js
const API = /localhost|127\.0\.0\.1/.test(location.hostname)
  ? 'http://localhost:8787'                                  // dev
  : 'https://hlcapp-api.ambrainvestimentos.workers.dev';     // prod
```

A default Capacitor WebView serves bundled content from `localhost` — which would
**wrongly** match that regex and point the native app at the dev API. The fix is
config-only, in `capacitor.config.json`:

```json
"server": { "androidScheme": "https", "iosScheme": "https",
            "hostname": "app.healthyfoodrecipesclub.com" }
```

Now `location.hostname` is `app.healthyfoodrecipesclub.com` inside the native app, the
regex fails, and the API resolves to **production** — with zero changes to `app.js`.
(Content is still served from the local bundle; `hostname` only changes the origin the
WebView presents.)

---

## 2. Loading strategy: bundled assets (chosen) vs live URL

| | **Bundle assets (CHOSEN)** | Load live URL (`server.url`) |
|---|---|---|
| Offline | Shell loads offline (same as PWA today) | Blank without network |
| Store compliance | Passes Apple 4.2 "minimum functionality" | High Apple 4.2 rejection risk ("just a website") |
| First paint | Instant (local) | Network round-trip |
| Web updates | Need a new store build OR Capacitor live-update | Instant (mirrors the live site) |
| Sync effort | `npm run build:www` before each `cap sync` | None |

We bundle. The small cost — native updates need a store release — is the
store-compliant, offline-friendly choice, and is solvable later with a Capacitor
live-update service (Appflow / Capgo) if instant native updates matter.

**How updates flow**

- **Web content change** → edit root files → push → **Pages updates instantly** for
  web + installed-PWA users. Native apps keep their bundled copy until the next build.
- **Native release** → `npm run build:www && npx cap sync` → rebuild in Android
  Studio / Xcode → upload to the store. This re-bundles the current root files, so
  web and native stay in sync from **one source**.

> Note on the service worker: `sw.js` registration is feature-detected and wrapped in
> `.catch()`, and only caches same-origin GETs, so it's harmless in the native shell.
> iOS WKWebView service-worker support is limited; the app degrades gracefully (the
> native bundle is already local, so the SW's offline role is redundant there).

> Note on dynamic CDN loads: Stripe.js, html5-qrcode (scanner), Google Fonts, and
> Microsoft Clarity are loaded from their CDNs on demand — same as the web app. They
> need network the first time (the API needs network anyway). The app has **no** CSP
> meta today, so these load fine in the WebView. If a CSP is ever added, allowlist:
> `js.stripe.com`, `unpkg.com`, `fonts.googleapis.com`, `fonts.gstatic.com`,
> `www.clarity.ms`, and the Worker origin.

---

## 3. What was scaffolded

```
hlc-app/
├── package.json                 # NEW — Capacitor deps + build scripts (private, never published)
├── package-lock.json            # NEW
├── capacitor.config.json        # NEW — appId, appName, webDir=www, server.hostname fix, plugin config
├── scripts/
│   └── build-www.mjs            # NEW — whitelist copy of web runtime → www/ (the native bundle)
├── www/                         # GENERATED (gitignored) — the bundled web app
├── android/                     # SCAFFOLDED (gitignored) — Gradle project, ready to build on Windows
│   └── app/src/main/
│       ├── AndroidManifest.xml # EDITED — added CAMERA + POST_NOTIFICATIONS permissions
│       └── assets/public/      # the bundled www copy
├── node_modules/                # gitignored
└── .gitignore                   # EDITED — ignores www/ android/ ios/ *.keystore etc.
```

`ios/` is **not** created here — it requires macOS (see §6). Everything else is real
and verified. The web files at the repo root are unchanged.

---

## 4. Plugins installed (Capacitor 8.4.2)

| Package | Version | Purpose |
|---|---|---|
| `@capacitor/core` `/cli` `/ios` `/android` | 8.4.2 | Runtime + tooling + platforms |
| `@capacitor/camera` | 8.2.1 | Native camera (option/enhancement for Clean Check & Rate my Plate) |
| `@capacitor/push-notifications` | 8.1.2 | Push (re-engagement; APNs/FCM setup is a later step) |
| `@capacitor/app` | 8.1.1 | App lifecycle, deep links, back button |
| `@capacitor/status-bar` | 8.0.3 | Status-bar color to match the forest theme (`#060f09`) |
| `@capacitor/splash-screen` | 8.0.2 | Native launch splash |

> The existing barcode scanner uses the **web** `getUserMedia()` (html5-qrcode) and
> works inside the WebView once camera permission is granted — so `@capacitor/camera`
> is an **enhancement**, not a hard dependency. You can adopt the native camera plugin
> for a more reliable capture, or keep the web scanner. Both need the OS camera
> permission below.

---

## 5. Native permissions & privacy

### Android — DONE (in `android/app/src/main/AndroidManifest.xml`)

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-feature android:name="android.hardware.camera" android:required="false" />
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
```

`INTERNET` was already present. Camera is granted to the web layer by Capacitor's
WebChromeClient **only** when the app holds `CAMERA` (now added).

### iOS — TO APPLY ON MAC (after `cap add ios`)

Add to `ios/App/App/Info.plist`:

```xml
<key>NSCameraUsageDescription</key>
<string>HLC Club uses the camera to scan food barcodes and photograph meals for the Clean Check and Rate my Plate features.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>HLC Club lets you choose a food photo from your library to analyze.</string>
```

**Privacy manifest (required by Apple for App Store submission):** add
`ios/App/App/PrivacyInfo.xcprivacy`. Capacitor 8 core + plugins ship their own
privacy manifests; your app-level file mainly declares **your** data collection —
declare what the privacy policy lists: **email, wellness answers, favorites, camera
input, Stripe payment data, Clarity analytics.** Set the required-reason API entries
(e.g. `NSPrivacyAccessedAPICategoryUserDefaults`) as prompted by Xcode's validator.

**Push (iOS):** needs an Apple Developer account, the Push Notifications capability,
an APNs key, and a provider (or Firebase). Not required for a v1 submission — you can
ship without push and add it later.

---

## 6. Build & run

### The sync loop (always)

```bash
npm run build:www        # copy root web files → www/
npx cap sync             # push www/ + plugins into android/ (and ios/ on Mac)
```

Convenience scripts in `package.json`: `npm run sync`, `npm run android:open`,
`npm run ios:open`.

### Android (Windows — this machine)

Prerequisites (NOT installed in the scaffold environment — see "Verified" note):
- **JDK 17** (Android Gradle Plugin 8.x requires it).
- **Android Studio** (bundles the SDK + platform tools), or a standalone Android SDK
  with `ANDROID_HOME` set.

Then:

```bash
npm run build:www
npx cap sync android
npx cap open android        # opens Android Studio → Run / Build
# or headless:
cd android && ./gradlew assembleDebug          # test APK
cd android && ./gradlew bundleRelease          # signed AAB for Play (configure signing first)
```

For Play you upload a **signed .aab**. Use Android Studio → Build → Generate Signed
Bundle, or configure a keystore in `android/app/build.gradle`. **Back up the keystore**
— losing it means you can't update the app.

> Verified on this Windows box (2026-07-26): `node 24.14.1`, `npm 11.11.0` present;
> **`java` not on PATH and no `ANDROID_HOME`/`ANDROID_SDK_ROOT`** → the `android/`
> project is scaffolded but **cannot be compiled here yet**. Install JDK 17 + Android
> Studio, then the commands above build it.

### iOS (Mac + Xcode — required, no Windows path)

```bash
# on a Mac, in a fresh clone (or this repo synced):
npm install                 # restore node_modules
npm run build:www
npx cap add ios             # Mac-only: creates ios/ and runs `pod install` (CocoaPods)
npx cap sync ios
npx cap open ios            # opens Xcode
```

In Xcode:
1. Select the **App** target → Signing & Capabilities → set your **Team** (needs the
   $99/yr Apple Developer Program).
2. Add the **Info.plist** camera/photo strings and the **PrivacyInfo.xcprivacy** from §5.
3. (Optional now) add the **Push Notifications** + **Background Modes** capabilities.
4. Set a deployment target (iOS 14+).
5. **Product → Archive** → Distribute → App Store Connect → upload.
6. In App Store Connect: fill App Privacy ("nutrition label"), screenshots (6.7" +
   6.1"), and submit. Lead the review notes with the native features (account state,
   offline shell, camera scanning) to satisfy guideline 4.2.

No-Mac options: **Codemagic** (free macOS minutes + auto App Store submission) or
**MacinCloud** (~$1/hr RDP). See `STORE-DEPLOY.md`.

---

## 7. Store payment / subscription compliance — **JULIA'S DECISION** (affects margin)

HLC Club sells a **$9/mo (or $69/yr) digital subscription** via **Stripe** today.
Selling a digital subscription **inside** a store app triggers each store's billing
rules. The rules shifted hard in 2025-2026 (Epic v. Apple, the DMA, Google's US
settlement), so **treat the numbers below as a decision aid, and verify against
Apple/Google's official developer docs — and ideally counsel — before submitting.**
HLC is under $1M/yr, so it qualifies for both small-business programs.

### Apple (US storefront, 2026)

| Option | Apple cut | What it means | Risk |
|---|---|---|---|
| **A. Apple IAP (StoreKit)** + Small Business Program | **15%** flat (SBP, <$1M/yr) | Build StoreKit subscription products; reconcile with the existing Stripe entitlement (two billing systems) | **Low** — Apple's blessed path |
| **B. External Purchase Link** (keep Stripe web checkout) | **0%** to Apple (US, post-*Epic*) | Link out to your existing Stripe checkout; keep ~2.9%+30¢ Stripe only | **Medium** — legal, but the US 0% is under Supreme Court review and could revert; must follow Apple's link-presentation rules exactly (disclosure sheet, no aggressive steering) or risk a 3.1.1 rejection |
| C. Reader / multiplatform | n/a | HLC isn't a pure reader app (interactive scanning), so this entitlement is a weak fit | — |

> **EU is different:** under the DMA, "external" still carries a fee stack (Core
> Technology Commission ~5% + store-services tier 5%/13% + a possible 2% initial-
> acquisition fee). HLC's Stripe is US-primary, so EU economics are a separate,
> later consideration.

### Google Play (US, 2026)

Google's June 30, 2026 change sets the service fee at **~10% on the first $1M/yr for
subscriptions regardless of billing method** (Play Billing, alternative billing, or
external link). So on Android, ~10% is effectively unavoidable for subscriptions.

| Option | Play cut | Risk |
|---|---|---|
| **A. Google Play Billing** (in-app) | **~10%** (first $1M, subs) | **Low** — blessed path, requires Play Billing integration |
| **B. User-choice / alternative billing** | ~10% (small discount off standard) | Low-Med — requires enrolling in the billing-choice program + reporting |
| **C. External offer / link out** (keep Stripe) | **~10%** on auto-renewing subs still applies | Low-Med — keeps one billing system across web/iOS/Android |

### Net-per-$9 (rough, illustrative)

| Path | You keep on a $9 charge |
|---|---|
| Stripe only (web / external link where allowed) | ~$8.40 (after ~$0.60 Stripe) |
| Apple IAP (SBP 15%) | ~$7.65 |
| Google Play Billing / external (10%) | ~$8.10 |

### Recommendation (flagged — Julia decides)

- **iOS:** start with **Option B (external Stripe link, 0% Apple)** since it keeps the
  billing you already run and maximizes margin — **but** implement Apple's link rules
  carefully and be ready to fall back to **Apple IAP (15% SBP)** if Apple's US terms
  revert post-appeal. Mixing IAP + Stripe means two entitlement sources; staying
  Stripe-only avoids that.
- **Android:** you'll pay **~10% either way** after June 2026. Keeping the **external
  Stripe link** keeps **one** billing system across web + iOS + Android at the same
  ~10%, which is operationally simplest. Google Play Billing is the lowest-risk
  alternative if a reviewer pushes back.
- **Bottom line:** the Stripe-external path preserves the most margin and one codepath,
  at the cost of tighter compliance discipline (especially on iOS). The IAP/Play-Billing
  path trades ~5-15% margin for the lowest rejection risk. **This is a margin-vs-risk
  call → Julia's to make.** Verify current terms in the official docs before building.

**Sources (2026):**
- Apple external links / US 0% after *Epic*: <https://superwall.com/blog/apple-allows-external-payment-links-in-the-app-store-everything-you-need-to>, <https://techcrunch.com/2025/05/02/apple-changes-us-app-store-rules-to-let-apps-redirect-users-to-their-own-websites-for-payments>
- Apple Small Business Program (15%): <https://developer.apple.com/app-store/small-business-program/>, <https://www.revenuecat.com/blog/engineering/small-business-program>
- Apple EU DMA / Core Technology Commission: <https://www.revenuecat.com/blog/growth/apple-eu-dma-update-june-2025/>, <https://blog.funnelfox.com/apple-app-store-fees-2026-eu-dma/>
- Google Play 2026 fee changes (10% floor, billing choice): <https://android-developers.googleblog.com/2026/06/play-expanded-billing.html>, <https://support.google.com/googleplay/android-developer/answer/16954621>
- Google user-choice / external offers: <https://support.google.com/googleplay/android-developer/answer/13821247>, <https://support.google.com/googleplay/android-developer/answer/17161464>
- App-to-web external purchases (both platforms): <https://www.revenuecat.com/blog/engineering/app-to-web-purchase-guidelines>

---

## 8. Icons & splash

Another agent is producing store assets under **`store-assets/`** (currently
`store-assets/_captures/` — final icon pending). Do **not** hand-edit mipmaps. Once
a 1024×1024 master icon exists there, generate all densities with the official tool:

```bash
npm i -D @capacitor/assets
npx capacitor-assets generate --iconBackgroundColor '#060f09' --splashBackgroundColor '#060f09'
```

Point it at the master via `assets/` (place the icon as `assets/icon.png` +
`assets/splash.png` per the tool's convention, or pass `--assetPath store-assets/...`).
This writes adaptive icons (Android) and the iOS icon set + splash automatically.

---

## 9. Known considerations / gotchas

- **API hostname fix (§1)** — do not remove `server.hostname` from `capacitor.config.json`
  or the native app will hit the dev API.
- **Same-origin links** — any in-app link to `https://app.healthyfoodrecipesclub.com/...`
  (e.g. a privacy/terms page) resolves to the **local bundle** in the native app and
  will 404 if that page isn't bundled. Open such pages externally via `@capacitor/app`
  `openUrl` / a system browser, or bundle them. (The core member SPA is self-contained,
  so this only affects outbound links.)
- **Account deletion** — both stores require in-app account+data deletion. `STORE-DEPLOY.md`
  flags this as a pre-submission build task; it applies to the native apps too.
- **Data Safety (Play) / App Privacy (Apple)** must exactly match the privacy policy.
  Mismatch is the #1 rejection cause.
- **Committing `android/`/`ios/`** — currently gitignored to keep the Pages repo clean
  and avoid accidental pushes. Decide later whether to commit them (standard Capacitor
  practice) or keep native in a dedicated branch/repo. `capacitor.config.json`,
  `package.json`, and `scripts/` **should** be committed (they're small and are the
  source of truth for the native build).

---

## 10. Julia's action items

- [ ] **Confirm the bundle ID** `com.healthyfoodrecipesclub.app` (matches
      `STORE-DEPLOY.md` + the `.well-known/assetlinks.json` plan). Changing it later is
      painful — confirm now.
- [ ] **Decide the payment strategy (§7)** — external Stripe link vs Apple IAP / Play
      Billing. This sets margin and build scope. (My recommendation: external Stripe on
      iOS with an IAP fallback plan; external Stripe on Android. Verify current terms.)
- [ ] **Apple Developer Program — $99/yr** (needed to build/sign/submit iOS).
- [ ] **Google Play Developer — $25 one-time** (+ identity verification; see the
      org-vs-personal decision in `STORE-DEPLOY.md`).
- [ ] **A Mac (or Codemagic/MacinCloud)** for the iOS build — no Windows path exists.
- [ ] **Install JDK 17 + Android Studio** on this Windows machine to build the Android app.
- [ ] **Pre-submission build tasks** (from `STORE-DEPLOY.md`): in-app account deletion,
      Data Safety / App Privacy forms, screenshots on a real device.
- [ ] **Back up the Android signing keystore** once generated (irreplaceable).

---

*Scaffolded 2026-07-26. Nothing pushed or submitted. Web app verified unchanged
(all files serve 200 standalone; `app.js` byte-identical).*
