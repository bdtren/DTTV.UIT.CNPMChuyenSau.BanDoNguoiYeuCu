const VERSION = "v1.0.0";
const staticAssets = [
    './',
    './index.php',
    './css/style.css',
    './css/reset.css',
    './css/javascript.fullPage.css',
    './css/animate.css',
    './sw-register.js',
    './js/jquery.snow.min.1.0.js',
    './manifest.json'
];
function log(messages, ...data) {
  if (data.length > 0) {
    console.log(VERSION, messages, data);
  } else {
    console.log(VERSION, messages);
  }
}

log("Installing Service Worker");

self.addEventListener('install', async function(event) {
    const cache = await caches.open("app-cache");
    cache.addAll(staticAssets);
  });
/*{
  log("Version is installed");
});*/

async function installServiceWorker() {
  log("Service Worker installation started");

  const request = new Request("index.php");
  const response = await fetch(request);

  log("Response received after loading index.php", response);
  if (response.status !== 200) {
    throw new Error("Could not load offline page!");
  }

  const cache = await caches.open("app-cache");
  cache.put(request, response);
  log("Caches index.php");
}

self.addEventListener('fetch', event=>{
    const request = event.request;
    log(event.request);
    event.respondWith(cacheFirst(request));
});

async function cacheFirst(req){
    const cachedResponse = await caches.match(req);
    return cachedResponse||fetch(req);
}

self.addEventListener("activate", () => {
  log("Version is activated");
});
