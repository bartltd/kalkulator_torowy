self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('torowy-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './serviceWorker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});