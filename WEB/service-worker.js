importScripts("./node_modules/workbox-v3.2.0/workbox-sw.js");

const VERSION = "v1.0.0";
const staticAssets = [
  "./",
  "./index.php",
  "./css/style.css",
  "./css/reset.css",
  "./css/javascript.fullPage.css",
  "./css/animate.css",
  "./sw-register.js",
  "./service-worker.js",
  "./js/jquery.snow.min.1.0.js",
  "./manifest.json"
];
/*******Service worker phuong phap don gian */
function log(messages, ...data) {
  if (data.length > 0) {
    console.log(VERSION, messages, data);
  } else {
    console.log(VERSION, messages);
  }
}
// self.addEventListener("install", async function(event) {
//   log("Installing Service Worker");
//   const cache = await caches.open("cache-static");
//   cache.addAll(staticAssets);
// });
// /*{
//   log("Version is installed");
// });*/

// async function installServiceWorker() {
//   log("Service Worker installation started");

//   const request = new Request("index.php");
//   const response = await fetch(request);

//   log("Response received after loading index.php", response);
//   if (response.status !== 200) {
//     throw new Error("Could not load offline page!");
//   }

//   const cache = await caches.open(cacheName);
//   cache.put(request, response);
//   log("Caches index.php");
// }

// self.addEventListener("fetch", event => {
//   const req = event.request;
//   const url = new URL(req.url);

//   if(req.url.indexOf("chrome-extension:")>=0){
//     log("Fetching fail!!!!!", req);
//   }else{
//     log("Fetching", req);
//     if (url.origin == location.origin) {
//       event.respondWith(cacheFirst(req));
//     } else {
//       event.respondWith(networkFirst(req));
//     }
//   }
// });

// async function cacheFirst(req) {
//   const cachedResponse = await caches.match(req);
//   return cachedResponse || fetch(req);
// }

// async function networkFirst(req) {
//   const cache = await caches.open("cache-dynamic");

//   try {
//     const res = await fetch(req);
//     cache.put(req, res.clone());
//     log("Adding to cache", req);
//     return res;
//   } catch (error) {
//     return await cache.match(req);
//   }
// }
// self.addEventListener("activate", () => {
//   log("Version is activated");
//   // if(navigator.onLine){
//   //   const cache = await caches.open("app-cache");
//   //   cache.add(staticAssets);
//   // }
// });

//Cap nhat Service Worker moi khi online
/*var regist = false;
self.addEventListener("online", async function(e) {
  if(navigator.onLine){
    async const cache = await caches.open("app-cache");
    cache.addAll(staticAssets);
    regist = true;
  }
  
  if (!regist) {
    const cache = await caches.open("app-cache");
    cache.addAll(staticAssets);
    regist = true;
  }
});*/

///\/\/\/\/\//\/\/\/Sử dụng workbox\/\/\/\/\/\/\/\/\/\/\/\\\
//install and static caching(cache du lieu tinh)
/* const precacheController = new workbox.precaching.PrecacheController();
//workbox.precaching.precacheAndRoute(staticAssets);
precacheController.addToCacheList(staticAssets);
self.addEventListener('install', (event) => {
  event.waitUntil(precacheController.install());
}); */

//Realtime fetching data and add to cache+indexedDB
self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);
  const cacheCacheFirst = new workbox.strategies.CacheFirst({
    cacheName: "dynamic-cache",
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 200 file
        maxEntries: 500,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  });
  const cacheNetworkFirst = new workbox.strategies.NetworkFirst({
    cacheName: "dynamic-cache",
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 200 file
        maxEntries: 500,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  });
  const cacheImage = new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name
    cacheName: "image-dynamic-cache",
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 200 images
        maxEntries: 200,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  });

  // Fetching resource
  if (req.url.indexOf("chrome-extension:") >= 0) {
    log("Fetching fail!!!!!", req);
  }
  //log("Fetching", req);
  else if (req.url.match(/[^/]+(.jpg|.jpeg|.svg|.png|.gif)$/) != null) {
    event.respondWith(cacheImage.handle({ event }));
  } else if (url.origin == location.origin) {
    //     //event.respondWith(cacheFirst(req));
    //   event.respondWith(cacheCacheFirst.handle({event}));
    // } else {
    //event.respondWith(networkFirst(req));
    event.respondWith(cacheNetworkFirst.handle({ event }));
  } else {
    //event.respondWith(cacheFirst(req));
    event.respondWith(cacheCacheFirst.handle({ event }));
  }
});

async function cacheFirst(req) {
  const cachedResponse = await caches.match(req);
  return cachedResponse || fetch(req);
}
async function networkFirst(req) {
  const cache = await caches.open("dynamic-cache");
  try {
    const res = await fetch(req);
    cache.put(req, res.clone());
    log("Adding to cache", req);
    return res;
  } catch (error) {
    return await cache.match(req);
  }
}
self.addEventListener("activate", () => {
  log("Version is activated");
  // if(navigator.onLine){
  //   const cache = await caches.open("app-cache");
  //   cache.add(staticAssets);
  // }
});

/***************************************** PUSH API *****************************************/
("use strict");

/* eslint-env browser, serviceworker */
importScripts("./js/libs/idb-keyval.js");
importScripts("./js/analytics-sw.js");

self.analytics.trackingId = "UA-77119321-2";
//Nhận sự kiện push và xuất kết quả
self.addEventListener("push", function(e) {
  let notificationTitle = "Đây là title tạm";
  const notificationOptions = {
    body: "Notification body!", //Nội dung thông báo
    icon: "./Images/Home/favicon.png", //Hình ảnh kèm theo
    tag: "./promotion-detail.php?MAKM=" + "KM0001", //đường dẫn thông báo, dùng khi click vào
    image: "./Images/Promotion/item-0.jpg",
    vibrate: [100, 50, 100],
    data: {
      url: "https://google.com/",
      dateOfArrival: Date.now(),
      primaryKey: "2"
    }
    // actions: [
    //   {action: 'explore', title: 'Đây là nội dung tạm',
    //     icon: 'images/checkmark.png'},
    //   {action: 'close', title: 'Close',
    //     icon: 'images/xmark.png'},
    // ]
  };
  var apiPath = "/browser_pn?endpoint=";

  event.waitUntil(
    registration.pushManager
      .getSubscription()
      .then(function(subscription) {
        if (!subscription || !subscription.endpoint) {
          throw new Error();
        }

        apiPath = apiPath + encodeURI(subscription.endpoint);

        return fetch(apiPath);
      })
      .then(function(response) {
        if (response.status !== 200) {
          console.log("Problem Occurred:" + response.status);
          throw new Error();
        }

        return response.json();
      })
      .then(function(datajson) {
        if (datajson.status == 0) {
          console.error("The API returned an error.", data.error.message);
          throw new Error();
        }

        const dataText = datajson;
        notificationTitle = dataText.title;
        notificationOptions.body = dataText.body;
        notificationOptions.tag = dataText.tag;
        notificationOptions.icon = dataText.icon;
        notificationOptions.image = dataText.image;
        notificationOptions.data.url = dataText.data.url;
        self.analytics.trackEvent("push-received");

        return self.registration.showNotification(
          notificationTitle,
          notificationOptions
        );
      }).catch(function(error){
        //console.error("The notification getter returned an error.", error.message);
        console.error("The notification getter returned an error.");
        return self.registration.showNotification(
          notificationTitle,
          notificationOptions
        );
      })
  );
});
/***************************************** NOTIFICATION *****************************************/
//kiểm tra, hành động nếu người dùng tắt notification
self.addEventListener("notificationclose", function(event) {
  event.waitUntil(
    Promise.all([self.analytics.trackEvent("notification-close")])
  );
  console.log("Closed notification: " + "ohh");
});

//Kiểm tra, hành dộng khi người dùng nhấn chọn notification
self.addEventListener("notificationclick", function(event) {
  event.notification.close();

  let clickResponsePromise = Promise.resolve();
  if (event.notification.data && event.notification.data.url) {
    clickResponsePromise = clients.openWindow(event.notification.data.url);
  }

  event.waitUntil(
    Promise.all([
      clickResponsePromise,
      self.analytics.trackEvent("notification-click")
    ])
  );
});

//Cap nhat Service Worker moi khi online
/*var regist = false;
self.addEventListener("online", async function(e) {
  if(navigator.onLine){
    async const cache = await caches.open("app-cache");
    cache.addAll(staticAssets);
    regist = true;
  }
  
  if (!regist) {
    const cache = await caches.open("app-cache");
    cache.addAll(staticAssets);
    regist = true;
  }
});*/

///\/\/\/\/\//\/\/\/Sử dụng workbox\/\/\/\/\/\/\/\/\/\/\/\\\
//install and static caching(cache du lieu tinh)
workbox.precaching.precacheAndRoute(staticAssets);

/* //Runtime and dynamic caching (cache du lieu dong)


workbox.routing.registerRoute(
  // Cache files
    /.*\.(?:js|css|html|json|php)/,
  // Use cache but update in the background ASAP
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName: 'dynamic-cache',
  })
);

workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  // Use the cache if it's available
  workbox.strategies.networkFirst({
    // Use a custom cache name
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images
        maxEntries: 200,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);
 */
