'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "3f27fc0b97f5b633d6b25938bc0662ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9797ef38ec2b70a3fcb72179b91b0d3f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2701c004794a7764e33e3d304f1070b1",
".git/logs/refs/heads/main": "1ec054bdc28dec47eb5cb88086dc8d9b",
".git/logs/refs/remotes/origin/main": "480fd3cb8cf237203027d8d4f3ca24d3",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/12/6475dad7d4c2fe19b93dd8621d41216124145f": "867724a567e1ce1984824ca7f5afff7b",
".git/objects/13/8c05543d96ec3fa1fcfa335a1450e4cea28d94": "7a80832f65cf1ea89523392fa0092bf8",
".git/objects/14/fd7ca1439f0cb57e22bfe7f15e86a14be7a067": "e1cb6f5a0fdf4b38a281b11e7b2cac83",
".git/objects/1a/eec5539209121354d0aac3714a736a34b3cf7c": "7e3a511af7f0f4b325dd93fc90f35665",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/735ba0350f3f1aae5f29e0467a9fdae37b80c0": "0d4a1c6e551220e983d098d9c65b11aa",
".git/objects/35/2a94b21cd9bd183f9cec9dfdec4d41624d17b4": "c71bd70d2e9c41399c31c3a0556f5ed3",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/a110d9fdc34094c770f357ac2aeea70afd5d6f": "ff34ab149e783e01d9e8bebadc7a7ccf",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/69b30f579de1556935ae4a4c5d46e292ddb08d": "ed286f7b7f4acf2272cecc27874a9d97",
".git/objects/46/17c8155acfd74396ea99c995c40b68054fc035": "21c1826b8056b78945d6f013f2695801",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/0a6eeec048e167d6ab9c105e9e305161bf2b6d": "98c9c467260abd61ac20c36f6a9211dd",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/1f394e72159b1987bba52115bff2f338ab712f": "cc42cd61c9fed658e90f7a64875f67e0",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/d169978853979f0fa0dc38528276d2099b8a9a": "af91e131d604b83c54ed36d7b77f416e",
".git/objects/65/376faf342e2efb74a386a808e93c221c1e19cc": "b553fcbe41aa0644bbbc8899d88bb2d1",
".git/objects/66/4650960007e528b4fed58d973881d3b1e3fa2a": "314f23981aeab85f07ff768f37eddcd3",
".git/objects/68/4d6da8d923330f88d34922ba690a68f5ed766d": "2ea429864903057fb4288304fa9cf9e3",
".git/objects/73/a09b7c16dfea1c873543017010659ae4ecca75": "973decb0ce8b54aac5f7a6dc1e61dd6d",
".git/objects/73/b97439e09df605ce32a97c8525a7a1c72bf701": "db742e887758aa95ae5106d4fb2d860d",
".git/objects/7b/66635f9e423402ae282b3bf67f786090e243ee": "18a9d13206168f09e2550f40b62e3c74",
".git/objects/7d/bd5700db39820d64a088ff4ad58771c6f24455": "befdc8a56569e65b2609ada3c60f9614",
".git/objects/7f/932ab4ae198d16ceada8899132744ef8aac1bc": "5bfe9d3d9339d9bdc2d490e26eb3f62a",
".git/objects/7f/9df17a4b0bbc132098fcd02875ca6bdaf325e0": "a9c00e27783e3db9973b6be60fe25597",
".git/objects/80/62be23fb8759f4b9766107f7f31e8dc2d85e7a": "2c3c52254fea03a55d6d8a9c1b64a03c",
".git/objects/86/03d82fe080a7c92e2420fb00144dbedef7a9ef": "ea159ef4fbe2ac4dbd8e4c2364dc6d1b",
".git/objects/86/884d394abc16b2f197c50ffa77adb30b116ad8": "33c09eb8927ff5dca21cf6d6e92d02fb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/0c501f83be9d4fe4f72fadd9626bae32969bef": "6201839a77fefcec6270247c8005d53a",
".git/objects/8f/63596026abd8f0b6ad899054a0052a0d2fb87d": "89cf41cc0c2c4040ceef91ef2887dc23",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/d69e3541eac9a771125bfd2e4c8ad80bb53696": "77f5097832d590e1fbe0446705a8b69e",
".git/objects/92/f08b825790430a30ae1c011e73d93914e96d95": "2cb82f5e14d01c16aede7e59d8b086b9",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/5eae7202f29a04ad4746ee8f0cb54802bd0233": "d8096fd685524775ecaf7d9e24aef7dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b2/3c049fa0972c6bea4e53b17b9f1336e187ee9a": "dbf80697fa1d051171592080568980e9",
".git/objects/b4/603359b26b4ffff91ae2daee7e12a3a7acf011": "e9d31942d638b357c8ce489cb1925703",
".git/objects/b5/d86f15360b2e7931180ceccfa0f936d5e068d2": "b192e7e5c362594f1f10ccfc46c4b322",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/e8571428244c5d174da85c42694024cef4b3d1": "2504f53a36a8ad7cdbf2358f3c811696",
".git/objects/c9/4247fa3c4ee376c67f74527014bbcb183207d2": "6999f638d5307fdca7062aa542c20c3a",
".git/objects/cb/80b8f1ad8a9864afd6ad76da616afed6cc1a14": "ce6830ee82e00a97f4376b869ad3389d",
".git/objects/cd/5b899015ffe1af59e1de6e670edf522c6d2d4e": "bef8562bce814809f4eb1698ac54aec8",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d3/17de10d9595ab7e936f956ef5ec9356ee1acb4": "b316e8b055376432699b6bad54896cd5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/95fd1f4dfab0d9e930d866d2fdee5680ace1b2": "d7e4960d1be2f8ca039b03907d6212be",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/e1/cd11d4cff349135b33fdf6f58b38f60b727a01": "de5a32dc912f0b74119d8c2f169a0017",
".git/objects/e8/ee7407c780e84bfe5db349f36df37e552945aa": "4b8e6f89d58fcb021b74dd970542a9c1",
".git/objects/e9/ada4c6836b34d151d61fe9dd190734b83d16d4": "b26c8ae4c32ee094a3a971b02de860c8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/cf128eb152fc83c3af8f0fa185efcc05869901": "63b477263e238d717a56bdeea8f5a990",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/fb/a66aadbc58412b3d762ba7f2294c6b025aaa38": "f513e302a714f2dc250ece43358acf70",
".git/objects/ff/570a0af296cf0b87c76fd5f7b6c39b2d3c7cd7": "3be4fce336ccc5ee852ae502275ab8e7",
".git/refs/heads/main": "fd95459a9acc04006e22b0af0cbe92da",
".git/refs/remotes/origin/main": "fd95459a9acc04006e22b0af0cbe92da",
"assets/AssetManifest.bin": "39f8a99af3ae995f5c94367d92a2ba47",
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
"flutter_bootstrap.js": "c0e89bed1779f61bb2c592b2b9d85881",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbcb9f33b2b4baec707822e2223129bf",
"/": "fbcb9f33b2b4baec707822e2223129bf",
"main.dart.js": "59c565d1cf40be4005f1f42eec48516f",
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
