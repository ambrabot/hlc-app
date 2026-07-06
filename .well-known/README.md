# Digital Asset Links (Android TWA)

`assetlinks.json` proves this domain owns the Android app, which removes the
browser URL bar from the Trusted Web Activity (TWA) and lets the app open our
links directly.

## How to finalize (one edit, after PWABuilder generates the package)

1. ⚠️ **The fingerprint that matters is the PLAY-MANAGED app-signing key, NOT the
   one PWABuilder ships.** With Play App Signing (default), Google re-signs your
   app, so production installs present Google's fingerprint. If you only paste
   PWABuilder's upload-key fingerprint, verification FAILS and the URL bar stays.
   → After your first upload, go to **Play Console → App → Test and release →
   App integrity → App signing** and copy the **SHA-256 certificate fingerprint**.
2. Replace `REPLACE_WITH_SHA256_FINGERPRINT_FROM_PWABUILDER` in `assetlinks.json`
   with the **Play-managed** SHA-256. Also add your **upload key** fingerprint
   (from PWABuilder's `signing-key-info.txt`) as a second array entry — it covers
   local debug builds. The array accepts multiple fingerprints; any match verifies.
3. Keep `package_name` = `com.healthyfoodrecipesclub.app` (must match the value
   you set in PWABuilder). If you change it in PWABuilder, change it here too.
4. Commit + deploy. Verify it is live and correct:
   - `https://app.healthyfoodrecipesclub.com/.well-known/assetlinks.json` returns the JSON
   - Google's tester: https://developers.google.com/digital-asset-links/tools/generator

Until the real fingerprint is in place the TWA still works but shows the URL bar.
