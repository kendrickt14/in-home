// Version: 1.0.31
const CACHE_NAME = 'inhome-cache-v1.0.30';

self.addEventListener('install', (e) => {
    self.skipWaiting(); // Force the waiting service worker to become the active service worker.
});

self.addEventListener('activate', (e) => {
    // Tell the active service worker to take control of the page immediately.
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName); // Delete old caches
                    }
                })
            );
        }).then(() => clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request).catch(() => {
        return new Response('Offline');
    }));
});
