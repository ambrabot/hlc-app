// HLC service worker: stale-while-revalidate for the app shell (HTML/JS/CSS) so repeat
// loads paint instantly from cache and refresh in the background; cache-first for
// images/static; cache as offline fallback.
const CACHE = 'hlc-v45-polish';
const ASSETS = ['/', '/index.html', '/app.js', '/i18n.js', '/recipes.js', '/icons/icon-192.png', '/icons/icon-512.png', '/manifest.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return; // leave worker API, Open Food Facts, CDN, Stripe untouched

  const isShell = event.request.mode === 'navigate' || /\.(?:js|css|webmanifest)$/.test(url.pathname);

  if (isShell) {
    // Stale-while-revalidate: serve cache instantly, refresh in the background.
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const network = fetch(event.request).then((response) => {
          if (response.ok) { const copy = response.clone(); caches.open(CACHE).then((c) => c.put(event.request, copy)); }
          return response;
        }).catch(() => cached || caches.match('/index.html'));
        return cached || network;
      })
    );
  } else {
    // Cache-first for images and other static assets.
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
        if (response.ok) { const copy = response.clone(); caches.open(CACHE).then((c) => c.put(event.request, copy)); }
        return response;
      }))
    );
  }
});
