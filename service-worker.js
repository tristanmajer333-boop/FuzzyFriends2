const CACHE_NAME = "holiday-pet-helpers-v5";
const ASSETS = ["./","./index.html","./about.html","./reviews.html","./location.html","./admin.html","./style.css","./app.js","./admin.js","./firebase-config.js","./manifest.json","./images/rabbit.svg","./images/hamster.svg","./images/tortoise.svg","./images/icon-192.svg","./images/icon-512.svg"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
