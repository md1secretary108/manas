/* Manas service worker — offline copy of the app and its libraries. © 2026 Kewal Bhatt. */
const CACHE = 'manas-7.8';
const CORE = ['./', 'index.html', 'library.html', 'medicine.html', 'gita-week.html', 'manas.html', 'libraries.json', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'maharaj.html', 'cpa.html', 'maharaj.webmanifest', 'version.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  if (/version\.json$/.test(u.pathname)) return;           // always live
  if (/(libraries|config|lib-[\w-]+)\.json$/.test(u.pathname)){        // the shelf and libraries: newest from the web, saved copy when offline
    e.respondWith(caches.open(CACHE).then(c => fetch(e.request).then(r => { if (r && r.ok) c.put(u.origin + u.pathname, r.clone()); return r; }).catch(() => c.match(u.origin + u.pathname))));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r && r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;                                     // cached copy first (offline), refreshed in the background
  }));
});
