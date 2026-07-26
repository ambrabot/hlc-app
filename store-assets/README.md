# HLC Club — App Store asset set

Complete store-listing asset set for **Apple App Store** and **Google Play**, produced at **$0**
(no paid image generation). Every marketing frame is a **real app screen** (captured live from the
running app) placed in a device mockup on the brand skin, composed with deterministic HTML→PNG
(`social-card` engine). All owned dessert photography is the brand's own (`assets/recipes/…`).

Brand skin: forest `#04140c`/`#060f09`, gold `#d8b46a`/`#e9cf9a`, emerald `#6ee7b7`,
Cormorant Garamond + Inter. Zero emoji (vector sprig mark + typography only).

---

## 1. iOS screenshots — `ios/` · **1290 × 2796 px** (iPhone 6.7")
Upload to **App Store Connect → [your app] → Distribution → App Store → iPhone 6.7" Display**
(also valid for the 6.9" slot). Order = the order below (1 is the marquee).

| File | Headline | Real app screen shown |
|---|---|---|
| `hlc-ios-01-scan.png`      | Know what you're really eating. | Clean Check scanner (Scan flow) |
| `hlc-ios-02-verdict.png`   | Clean swaps, made simple.       | Scan verdict → "Make the HLC version" |
| `hlc-ios-03-recipe.png`    | Real macros. The functional why.| Recipe modal (Dairy-Free Brigadeiro) — macros + functional lens |
| `hlc-ios-04-coach.png`     | A functional coach that knows you. | Coach conversation (populated) |
| `hlc-ios-05-discover.png`  | Desserts that love you back.    | Discover home (recipe library, elevated Coach nav) |
| `hlc-ios-06-protocols.png` | Your journey, one choice at a time. | Protocols & Programs |

## 2. Android screenshots — `android/` · **1080 × 1920 px** (phone, 9:16)
Upload to **Play Console → Store listing → Main store listing → Phone screenshots** (2–8 required).
Same 6 messages as iOS, re-composed for the Play aspect ratio.

| File | | File |
|---|---|---|
| `hlc-android-01-scan.png` | | `hlc-android-04-coach.png` |
| `hlc-android-02-verdict.png` | | `hlc-android-05-discover.png` |
| `hlc-android-03-recipe.png` | | `hlc-android-06-protocols.png` |

## 3. Play feature graphic — `android/feature-graphic.png` · **1024 × 500 px** (required)
**Play Console → Store listing → Graphics → Feature graphic.** Brand skin + logo lockup +
tagline "Eat sweet. Feel steady." + one owned dessert photo (`chocolate-cheesecake.png`).
No alpha (solid background) — Play-safe.

## 4. App icon — `icon/icon-1024.png` · **1024 × 1024 px** (master)
Crisp **vector rebuild** of the brand sprig (gold gradient + emerald under-glow on forest),
refined from the existing `icons/icon-512.png`. Full-bleed square, **no rounded corners, no alpha**
(the OS applies the mask).
- **App Store Connect / Xcode:** AppIcon 1024 → OS generates the rest.
- **Play Console → App icon:** resize to **512 × 512** (32-bit PNG).
- **PWA / installed web app** already ships the resize set in `../icons/`:
  `apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png`, `icon-maskable.png`.
  Regenerate these from this 1024 master for a sharper set if desired.

## 5. Splash — `splash/splash-1284x2778.png` · **1284 × 2778 px** (iPhone 6.7")
Centered logo badge + wordmark on the brand gradient. Use as the **launch/splash image** for the
native wrapper (TWA / Capacitor) or the PWA `apple-touch-startup-image`. For other device sizes,
re-render from `_html/misc/splash-1284x2778.html` at the target dimensions (single-source HTML).

---

## Source & reproducibility (kept, not orphaned)
- `_captures/` — the **real app screens** captured live (source of every device frame). iOS-native
  screens at 1290×2796 (`real-*.png`); Scan-flow screens from the interactive demo at 1224×2640
  (`demo-*.png`). Alternates not used in the final 6: `real-teas.png`, `real-clean.png`,
  `real-saved.png`, `real-coach.png` (signed-out state), `demo-recipe.png`.
- `_html/` — the HTML compositions (one per PNG). Edit the data blocks and re-run the renderer to
  update copy/skin; the CSS is what keeps the brand from drifting between frames.

Re-render any asset (deterministic, $0):
```
node ~/.claude/skills/social-card/scripts/render-card.cjs <_html/…file.html> <out.png> --size WxH
```
Capture fresh app screens: serve `hlc-app` on :8151, then run the capture script in
`scratchpad/capture-app.cjs` (viewport 430×932 @ DSF3 = 1290×2796 native).

## QA evidence
- Dimensions verified exact for all 15 PNGs (PNG IHDR read).
- `render-card` overflow gate: **exit 0** on every frame ("tudo dentro do quadro" — nothing clipped).
- Each PNG visually reviewed: headline legible, device frame clean, photos not stretched
  (`object-fit: cover`), brand-consistent, text inside safe margins, **zero emoji**.
- Screens show the **real polished app** (elevated Coach nav, anchored bottom bar, populated
  recipes/coach), never a broken/empty state. Coach frame intentionally uses the populated
  demo conversation instead of the signed-out empty state.

## Notes / optional spend
No paid media is required — the owned photo library and real app screens are strong and on-brand.
If a future "social proof" screenshot is wanted (a person enjoying a dessert / real kitchen
lifestyle shot), that is the one place a paid premium photo could add authenticity. **Free
alternative already in use:** the owned `assets/recipes/*` library. No spend recommended now.
