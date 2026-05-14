const CACHE_NAME = 'realpa-v1';
const OFFLINE_URL = '/';

// Core assets to pre-cache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/splash-bg.jpg',
];

// Install: pre-cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

// Activate: remove old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : undefined)))
    )
  );
  self.clients.claim();
});

// Listen for messages from the client
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  // Cache date data from the client
  if (event.data?.type === 'CACHE_DATE') {
    const { validDate, timestamp } = event.data.payload || {};
    if (validDate) {
      caches.open(CACHE_NAME).then((cache) => {
        cache.put('/api/valid-date', new Response(JSON.stringify({ validDate, timestamp }), {
          headers: { 'Content-Type': 'application/json' },
        }));
      });
    }
  }

  // Retrieve cached date and send back to client
  if (event.data?.type === 'GET_CACHED_DATE' && event.ports?.[0]) {
    caches.open(CACHE_NAME).then((cache) => {
      cache.match('/api/valid-date').then((response) => {
        if (response) {
          response.json().then((data) => {
            event.ports[0].postMessage({ validDate: data.validDate });
          }).catch(() => {
            event.ports[0].postMessage({ validDate: null });
          });
        } else {
          event.ports[0].postMessage({ validDate: null });
        }
      }).catch(() => {
        event.ports[0].postMessage({ validDate: null });
      });
    });
  }
});

// Helper: is this a static asset request?
function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    request.method === 'GET' &&
    (url.pathname.startsWith('/assets/') ||
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.js') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.jpg') ||
      url.pathname.endsWith('.jpeg') ||
      url.pathname.endsWith('.gif') ||
      url.pathname.endsWith('.webp') ||
      url.pathname.endsWith('.svg') ||
      url.pathname.endsWith('.json') ||
      url.pathname.endsWith('.woff') ||
      url.pathname.endsWith('.woff2') ||
      url.pathname.endsWith('.ttf') ||
      url.pathname.endsWith('.eot') ||
      request.destination === 'script' ||
      request.destination === 'style' ||
      request.destination === 'image' ||
      request.destination === 'font')
  );
}

// Fetch handler with stale-while-revalidate for assets, network-first for navigations
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // Network-first for navigation (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // Stale-while-revalidate for static assets
  if (isStaticAsset(request)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const networkFetch = fetch(request)
          .then((response) => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return response;
          })
          .catch(() => cached || new Response('Offline'));
        return cached || networkFetch;
      })
    );
    return;
  }

  // Default: network-first, fallback to cache
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});