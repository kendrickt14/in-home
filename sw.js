// Version: 1.0.2
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Leave empty. This tells Android the app has networking capability.
});
