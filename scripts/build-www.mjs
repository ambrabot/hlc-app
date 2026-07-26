// build-www.mjs — assemble the native app bundle for Capacitor.
//
// WHY THIS EXISTS: the web app is served from the repo ROOT by GitHub Pages
// (index.html + app.js + ... at top level, NO build step). Capacitor's `webDir`
// must be a CLEAN folder containing ONLY the runtime web assets — pointing it at
// the repo root would drag android/, ios/, node_modules/, .git/, worker/ etc. into
// the native binary. So we copy a whitelist of the SAME source files into ./www,
// which Capacitor bundles. One source of truth (root) → both web (Pages) and
// native (this www copy) stay in sync. Run `npm run build:www` before `cap sync`.
//
// This script is ADDITIVE. It never modifies or deletes the root web files, and
// the web deploy does not depend on it in any way.

import { cp, rm, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'www');

// The member-app SPA runtime. These are the ONLY files the native shell needs.
// Website-only pages (landing.html, articles/, marketing/, admin.html, privacy/,
// static recipes/ SEO pages, demo/, worker/) are intentionally excluded — the app
// links to those on the live domain when needed.
const INCLUDE = [
  'index.html',
  'app.js',
  'i18n.js',
  'recipes.js',
  'sw.js',
  'manifest.webmanifest',
  'icons',   // dir — PWA + UI icons
  'assets',  // dir — recipe photos and other runtime images
];

async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const copied = [];
  const missing = [];
  for (const name of INCLUDE) {
    const src = join(ROOT, name);
    if (!existsSync(src)) { missing.push(name); continue; }
    await cp(src, join(OUT, name), { recursive: true });
    copied.push(name);
  }

  console.log(`[build:www] wrote ${copied.length} item(s) to www/:`);
  console.log('  ' + copied.join(', '));
  if (missing.length) {
    console.warn(`[build:www] WARNING — not found (skipped): ${missing.join(', ')}`);
  }
  // Sanity: the entry file must exist or the native app is blank.
  const entry = join(OUT, 'index.html');
  if (!existsSync(entry)) {
    console.error('[build:www] FATAL — www/index.html is missing. Aborting.');
    process.exit(1);
  }
  await stat(entry); // touch to confirm readable
}

main().catch((e) => { console.error('[build:www] failed:', e); process.exit(1); });
