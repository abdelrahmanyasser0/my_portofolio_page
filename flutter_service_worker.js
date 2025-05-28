'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "39f8a99af3ae995f5c94367d92a2ba47",
"assets/AssetManifest.bin.json": "0f1ad1bbf0429fc5046901451f67b345",
"assets/AssetManifest.json": "ff8c45195ba9168d502e5ceeb32fe82c",
"assets/assets/cv/abdelrahmanyasserf.flutter.cv.pdf": "4750a98a60d792e4eee0c3d6559eeee6",
"assets/assets/images/WhatsApp%2520Image%25202025-05-23%2520at%252011.31.46%2520(3).jpeg": "a98b7db48a819748a34dc55c3a1dd024",
"assets/assets/images/WhatsApp%2520Image%25202025-05-23%2520at%252011.31.46%2520(4).jpeg": "a6b5b97ca4e6437e65fbc682aa61a981",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.55.34%2520(1).jpeg": "e2dd7fe1a768d7856a61921011096b2f",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.55.34.jpeg": "b7417ae5312ed342068ad9e5ff1c8322",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.55.35%2520(1).jpeg": "689bba47842f01e3185791c7d4e96fa9",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.55.35%2520(2).jpeg": "303fe2e2c078e7b98e0238f6aa75e06a",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.55.35%2520(4).jpeg": "2ef88e65388e5edbc3feb8f673e3df31",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.55.35%2520(6).jpeg": "ed12b4fa5ca1f3fcfbca145884ab203d",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.55.35.jpeg": "0f2ef1d3e5297e65a043c9cdd2a73644",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.59.55.jpeg": "abbe05160d18cffd5aee507c3abd8e03",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.59.56%2520(1).jpeg": "c2882f987102c079c9333c03fecefffa",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.59.56%2520(2).jpeg": "b57ba4e47a5b4907653a3cc7198551e8",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.59.56%2520(3).jpeg": "52d77ef26465a97a0a016723fa06288f",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.59.56%2520(4).jpeg": "1b51c17063ab34d8d1d8d6af48f7619f",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252017.59.56.jpeg": "1a28bf633c94a0aa977bd6a0ed6bae15",
"assets/assets/images/WhatsApp%2520Image%25202025-05-27%2520at%252018.00.58.jpeg": "d9f7116568b03d60bd11b05af5b77029",
"assets/assets/images/WhatsApp%2520Image%25202025-05-28%2520at%252013.26.02%2520(1).jpeg": "b0b99a95c126383eda3e30d7505af276",
"assets/assets/images/WhatsApp%2520Image%25202025-05-28%2520at%252013.26.02%2520(2).jpeg": "cf7f97c383d7f7be7259da7a6257a289",
"assets/assets/images/WhatsApp%2520Image%25202025-05-28%2520at%252013.26.02.jpeg": "f4b714fb849ad905cbf61b9eb529991a",
"assets/assets/images/WhatsApp%2520Image%25202025-05-28%2520at%252013.26.03.jpeg": "4966131d12160cfd027ede2ad7a0a4bb",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "8ac929460c9706e3cff4dbeece0a9d19",
"assets/NOTICES": "ebd6d7467a29773f4125b91e59223813",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b0d664b991a4def579ccf6f4a39f91fa",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "bcd5d0993e16b141cd5671803147c501",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbcb9f33b2b4baec707822e2223129bf",
"/": "fbcb9f33b2b4baec707822e2223129bf",
"main.dart.js": "aa7e44d47b766bbe6a9c974f8e44b597",
"manifest.json": "8b0f8690fd771fb4126bb4f2f2f4d6f3",
"version.json": "3c26f85907045e138fda40d62f6d1c7a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
