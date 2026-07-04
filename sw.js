// Version: 1.0.11
const CACHE_NAME = 'inhome-cache-v1';

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

// Android 14 REQUIRES this fetch event to exist for the install button to trigger
self.addEventListener('fetch', (e) => {
    // We pass through all requests normally so live data (bus ETA, stocks) works
    e.respondWith(fetch(e.request).catch(() => {
        return new Response('Offline');
    }));
});