'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5ce0ee7cb5ce40953036bfa867214cbf",
".git/config": "c314ac0b129ac51dd78483d3c2094f4c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d14bec51acfe2a34a4a4e9158d081539",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ffe9a7184e1314750771f1195c9671dc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74743d41366f06a8df8a2befb81e60c4",
".git/logs/refs/heads/master": "74743d41366f06a8df8a2befb81e60c4",
".git/logs/refs/remotes/webBoBot/master": "8329cae336102bd98993c20886cdbe5d",
".git/objects/01/2db6dbfb288519b832fedbe8c77daa7e7d72c3": "8d2601115b6ba66366ef388b82200bd0",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/22730c8045127b27bda770625cb55caef4ab3f": "c60f16fa918d5d0bcc6de9fc0e9f7fd4",
".git/objects/14/8b91241d6425316f813ec805480db038ab714c": "89d46691ccae09882e5aa9f2641e17c2",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/24/c9b51c8a788c8935f8bad8a2ff5ffd784e133d": "96043a32e6f6246e96f13f13b2e5bf8f",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2d/ba55036fbf1cb2bd560540580ccc00781ae867": "1551df20a991bc67a0fdcc9552428110",
".git/objects/2e/626a22f6519e848d2209c000542ed5a785be2e": "b8378d65e04f60d0c5f07bca7c0efc9f",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/2e584d062e9f883f010729ed5ec345d3fd8285": "0425f615a6ee3f1aa2fd69a5123be91f",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/fc542a712af822c1ca615732251842fda783fd": "6dc5e6001f1840e27bf54c9aec98921b",
".git/objects/40/726784d75d9b6db770392375764d920b84bad5": "64098229bb3c45f4698368adb414bba5",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/8bcf8616c46e7604f61543d1383130206d63d0": "13e7bbe22a83515863779899649d335d",
".git/objects/54/9a07ff29874d1cf55c024457b86aba08baf40a": "1309cf9636e9196f1a3a0d88187b88c4",
".git/objects/55/cadbe50a913541dbb4c47b67ac612ebf0d908a": "1b08b12c4738278ab060b51a449c30f9",
".git/objects/58/d757b3cf9b6cb7d6da6ff0e8876a76548c3aaa": "e04c519a973102bae146d39e77b44775",
".git/objects/5b/178073ad11be0b1a2ec94ff260d529b7b1acb9": "bd6719718ff73048ef50f4b521baaf4a",
".git/objects/5e/6c29ed7e44649795a7557f58e5549acd3b6173": "d5ce3b869cc94b0d4cff89459dbc719c",
".git/objects/5f/0750a9f836e36b7c61f69ed48cc3d198afde1b": "c04ea79aa42aef567799a79ffd75fa96",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/67/ea8ceaede2b43e3b38e62bca8aa8d9b5d55a02": "0ea03d2569efcb0c37d2b788eba42e4b",
".git/objects/69/65030f9d61d6c3c641722b08cd44e557415416": "ec7864243ec195e4120ed867ce164b9a",
".git/objects/6b/1772686b057cd836c175f7e63ae1fba94d8166": "7249b9326638dce27285866766c4568c",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/4e5a48ad06c59f8e138231842ada07dc9a2165": "b6072d043ad2b7a223299144e88ecb91",
".git/objects/75/126593dec06a1da0c92bdef4374ceeb3676568": "d2179b656db822293261bd7cfff1fe98",
".git/objects/7a/8435741c60256106d2d70fc50803879070fadf": "d92ea93306f686216f8a775f5fd98985",
".git/objects/81/a83b9a0016cc3cfbfd4323eb7f16281420fb60": "89699059219520eb4f35e498714e08b1",
".git/objects/82/f0efd019d26a81eeffdf8cee01dd169555a3af": "ffa5332b397d5dfc71ce72aaabfdc394",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/88/549e2d51fc774652d8a333402cedd683cc856b": "2f97a5875a6ee8e5033fe37a78013753",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/e08358a1120df0fdd879a0bfbe3f44db9d5645": "aca5d271ab241050cf089963472bcf42",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/9a/5d9af7ed76d560bdcc6690a69aa5080c6ca82a": "9a4aefa4b77314ac6e084df784f527d9",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9e/7b53893d33dfd65dfdca2a73dc98f82a029fb4": "f3ddaf7a28f4e5276b5f8b7699fd0686",
".git/objects/a5/d967ca38da21abf02ed183aff75334e8f194f8": "d7567ad60a059165a805d1644c28ccbc",
".git/objects/ae/23b8b3787270906685bdbb367136dce9664fd7": "354b2cedb5d7683c7d29c8aff4222421",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/f94b6eba208e6d56cbf5f458e28af8120efd49": "3c188c1692527167a47b787ea0c63bd4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/800934f3c97cb12b314f33f013ace7b8f84ec8": "6e51204aa6cdd12121aab67d7eb76d27",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/5ef8505238c24c7bdfb35c6992615c47132e3d": "1223a9f01f43ecae31aaf519de9da0aa",
".git/objects/db/35e5a37720813ea7d83bbbe83c60caa8a5a95f": "2138c383d3a68d9a483d9538ae4277ad",
".git/objects/dd/78ad690489c008e9e06310bf3f51104981b85d": "c0dc21bb8001b1cdc1b1238c66ecd5a9",
".git/objects/df/6f334da91a9b3c1a3f84a7045a51d8855dabde": "04d11c88de518271ea40390eaf8c2074",
".git/objects/e1/138367d8a3e976e72961ab4e099bf75c81114d": "95a874d13ec89288526cd9106493778c",
".git/objects/e5/a2d2b0b1ef31a22c5b1a37b6aa61186571eb18": "8a1022be828cada4719ef35b4fbd394e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/2440f5e4c22187970f5b676aca72b8faf998fa": "11c11a281d1cdf30e822b8c178d42638",
".git/objects/ee/4e7caed678991d51866ae8c3ada9fbc5e3b07b": "f3ec7b4312588c58b7f96be9363cbe77",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/fa/dcba0f7c3478b82f8cd15f0515f8140ec9b07b": "15984a173f1fc68bebdba4d030afd4e9",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fe/10c3b0d4a2da8078b59be4f5c760f286753bc7": "44996658279e643d6b94598e64e93f54",
".git/ORIG_HEAD": "1845a09e2bc9621908d21d8d5aaaf8c0",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "1845a09e2bc9621908d21d8d5aaaf8c0",
".git/refs/remotes/webBoBot/master": "1845a09e2bc9621908d21d8d5aaaf8c0",
"assets/AssetManifest.bin": "038ad1cbd80d0a10050a2487f628dae8",
"assets/AssetManifest.json": "c3093a018f6c40a67e3b56c34f11c38e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "7135f89cb6cc20dacb6005e424704527",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cd7773ec631b2f35c81241f385fb6f03",
"/": "cd7773ec631b2f35c81241f385fb6f03",
"main.dart.js": "ff9ce52f00d8635add75f68e5dc7e22b",
"manifest.json": "1bc28fafd76f55f67d9b8863e8a330fc",
"README.md": "b0adf63b331dabbdd24fa4dcaff10fa9",
"version.json": "35d029d677e30d4f1ca120aff7c2b63c"};
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
