importScripts("../node_modules/workbox-sw/build/workbox-sw.js");
const staticAssets = ["./", "../css/style.css", "./app.js"];

self.addEventListener("install", async e => {
  const cache = await caches.open("static");
  cache.addAll(staticAssets);
});

self.addEventListener("fetch", e => {
  const req = event.request;
  e.respondWith(cachefirst(req));
});

async function cachefirst(req) {
  const cachedRes = await caches.match(req);
  return cachedRes || fetch(req);
}

async function networkFirst(request) {
  const dynamicCache = await caches.open("dynamic");
  try {
    const networkResponse = await fetch(request);
    dynamicCache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (err) {
    const cachedResponse = await dynamicCache.match(request);
    return cachedResponse || (await caches.match("./fail.json"));
  }
}

const wb = new WorkboxSW();
wb.precache(staticAssets);

wb.router.registerRoute(
    "http://localhost:8080/LoveMarketTest/(.*)",
    wb.strategies.networkFirst()
);
wb.router.registerRoute( /.*\.(png|jpg|jpeg|gif)/, wb.strategies.cachefirst({
    cacheName: "new-images",
    cacheExpiration: { maxEntries: 20, maxAgeseconds: 12 * 60 * 60 },
    cacheableResponse: { statuses: [0, 200] }
  })
);
