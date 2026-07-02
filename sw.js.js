// Minimal Service Worker to satisfy Android Chrome PWA requirements
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Leave empty. This tells Android the app has networking capability.
});