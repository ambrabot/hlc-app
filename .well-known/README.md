# Digital Asset Links (Android TWA)

`assetlinks.json` proves this domain owns the Android app, which removes the
browser URL bar from the Trusted Web Activity (TWA) and lets the app open our
links directly.

## How to finalize (one edit, after PWABuilder generates the package)

1. In PWABuilder → Android package → **Signing key**, PWABuilder either creates a
   new signing key or you upload one. Either way it shows you the
   **SHA-256 fingerprint** (a colon-separated hex string).
   - PWABuilder also gives you a ready-made `assetlinks.json` in the download —
     you can just copy its `sha256_cert_fingerprints` value.
2. Replace `REPLACE_WITH_SHA256_FINGERPRINT_FROM_PWABUILDER` in `assetlinks.json`
   with that fingerprint. If Play App Signing is enabled (recommended), add the
   **App signing key** fingerprint from Play Console → *Setup → App integrity* too
   (you can list more than one fingerprint in the array).
3. Keep `package_name` = `com.healthyfoodrecipesclub.app` (must match the value
   you set in PWABuilder). If you change it in PWABuilder, change it here too.
4. Commit + deploy. Verify it is live and correct:
   - `https://app.healthyfoodrecipesclub.com/.well-known/assetlinks.json` returns the JSON
   - Google's tester: https://developers.google.com/digital-asset-links/tools/generator

Until the real fingerprint is in place the TWA still works but shows the URL bar.
