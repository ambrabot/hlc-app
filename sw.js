// HLC service worker: network-first for the app shell (HTML/JS/CSS) so updates show
// immediately when online; cache-first for images/static; cache as offline fallback.
const CACHE = 'hlc-v27-club';
const ASSETS = ['/', '/index.html', '/app.js', '/recipes.js', '/icons/icon-192.png', '/icons/icon-512.png', '/manifest.webmanifest'];

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
    // Network-first: always try fresh, fall back to cache offline.
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response.ok) { const copy = response.clone(); caches.open(CACHE).then((c) => c.put(event.request, copy)); }
        return response;
      }).catch(() => caches.match(event.request).then((m) => m || caches.match('/index.html')))
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
