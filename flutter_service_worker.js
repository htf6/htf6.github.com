'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6600406d838b12065b84b43eb3243a15",
"assets/AssetManifest.json": "379bc75c42d2ba4eb39691c5cf86927e",
"assets/assets/font/xialu.ttf": "76839cc7e9bd520396aa2eebb3cb0db5",
"assets/FontManifest.json": "d3029e002c2416a62b8a1b2dff37d495",
"assets/fonts/MaterialIcons-Regular.otf": "ce074f6a14748dcf40a0d81c4128e79b",
"assets/images/achievements/1-1.jpg": "388a7d0a709d1ce773e6d4ff1db01f0a",
"assets/images/achievements/1-2.jpg": "1285c45e86369aeb859519dd22ffc43a",
"assets/images/achievements/10-1.jpg": "094e5d8bae2cb876f9a65a7d2de169c3",
"assets/images/achievements/2-1.png": "ba98768863f408572702f12538cd3831",
"assets/images/achievements/2-2.png": "7f1610508dc3226915d30110e682ca3c",
"assets/images/achievements/3-1.jpg": "1e777e4090477ec680259ce09c9de54c",
"assets/images/achievements/4-1.jpg": "ca944ad0dbcd7da8e9c3d9bf7f499b51",
"assets/images/achievements/4-4-1.jpg": "e5a6cbd1025db5478c6859af0cfac1db",
"assets/images/achievements/4-4-2.jpg": "f381d7be2898ff17f75fd55d006e2fb1",
"assets/images/achievements/4-4-3.webp": "a898b2342b85db00e5819e17a71b64b5",
"assets/images/achievements/4-4-4.jpg": "4b34b8eebdb569e2f96d029f64e5e86c",
"assets/images/achievements/5-1.jpg": "50fb63ef9292a69ad85acc642aa423a4",
"assets/images/achievements/6-1.jpg": "3ee9f67177c75d0f9948670c333c5ae2",
"assets/images/achievements/6-2.jpg": "809bb9669f5d35380a05e769ccb81611",
"assets/images/achievements/7-1.jpg": "10cc2c5e881f659026f579afcd13f910",
"assets/images/achievements/8-1.jpg": "b0c49ed02669bca7dc82cae07ffc8874",
"assets/images/achievements/9-1.jpg": "e69225cee8bb4a4e48205db3a44f9ce8",
"assets/images/achievements/achieve-1.png": "d4227d7ff7eea030f23f7f72b0bb298a",
"assets/images/achievements/achieve-2.png": "d300cd9b845a1136ee9c79c3a8b14f00",
"assets/images/ad-1.png": "9e79bec0411980032545cd5b4c63e138",
"assets/images/ad-2.png": "9c8a9939a4c1733bc4ec9b3937474ac1",
"assets/images/ad-3.png": "72bffe9c508d0ee38f7f9c7a564bb09c",
"assets/images/ad-4.png": "68bcf7fb6f3adf40252d988eda51bcdb",
"assets/images/ad-5.png": "b29ba62f9468235e41e27d3edf1b528c",
"assets/images/ad-6.png": "897f2fd871c698a1a722c6abf3ad8032",
"assets/images/background.jpg": "569512404e8c9c27d47568f1b7a9315e",
"assets/images/clik-2.png": "01feccc5e46f3531d30b94cf8f1af366",
"assets/images/clik.png": "e3ad9d8bbebb3d2dbaadfc4fab76020e",
"assets/images/create_user_page.jpeg": "9d9e1b8b2a8ae17130a3abb75c3c48e4",
"assets/images/head_photo.jpg": "a6b8752a0683266a2e7206a9d1f47247",
"assets/images/look.png": "1ccdff6f58cd9eb10ae9e4fe9f31d517",
"assets/images/message.png": "4832d53205a51dcc8db6d3b5bf1efbc9",
"assets/images/product_1.png": "b99b0c4362929b62d662f6a571e45585",
"assets/images/product_2.png": "0dc04594e3579242312e3e2394e4f98d",
"assets/images/product_3.png": "fca8163587d7b13cb27a73f5bd757879",
"assets/images/product_4.png": "a2948700cef3d1db8a9a04d8af187565",
"assets/images/redflag.png": "4c96cf3316ef41c7bb6ee11a5df4fbc9",
"assets/images/redfly.png": "fa29b45c985817c057b7f2e245d2fa2f",
"assets/images/redstar.png": "4ef8911d9a1aa5e3600d87156d1c3e3a",
"assets/images/register.jpeg": "7a3bbbecc2c49d004883ce0a7b707d09",
"assets/images/reword.png": "7ef0996234674dffa2b5c250dcb684cb",
"assets/images/share.png": "591afd702ede89476c24f3985ca98aa6",
"assets/images/word_cloud.png": "c5f8e596f952ad3fb759c4c05c518b2f",
"assets/NOTICES": "03a0e2eb91f4bac16d0526b6c00cfabf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "ee34cb86e468a64efa655dcd4aa9c426",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "fa591b9d22a64aa9ee1dcf46490ca431",
"canvaskit/skwasm.js": "185a672ac579389712b87fcbb8f8e5e8",
"canvaskit/skwasm.wasm": "75e7e8a1578acffb2ef0ab05fb159c91",
"canvaskit/skwasm.worker.js": "7ec8c65402d6cd2a341a5d66aa3d021f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "615ffae7c13c38e368b4bbde5397ba6f",
"/": "615ffae7c13c38e368b4bbde5397ba6f",
"main.dart.js": "cf4f45340abced4742ea37c53ac614f3",
"manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"version.json": "b3b87f9153d4406c14bc11865bbe1089"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
