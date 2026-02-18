// MedMaster Service Worker — App Shell caching (network-first)
const CACHE_NAME = "medmaster-v2";

// Cache app shell on install
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Clean up old caches
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first with cache fallback for navigation & static assets
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== "GET") return;

  // Skip cross-origin requests (Supabase, Stripe, etc.)
  if (!request.url.startsWith(self.location.origin)) return;

  // Skip API calls and auth
  const url = new URL(request.url);
  if (url.pathname.startsWith("/functions/") || url.pathname.startsWith("/auth/")) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cache successful responses for static assets and navigation
        if (response.ok) {
          const isAsset =
            url.pathname.startsWith("/assets/") ||
            url.pathname.endsWith(".js") ||
            url.pathname.endsWith(".css") ||
            url.pathname.endsWith(".png") ||
            url.pathname.endsWith(".svg") ||
            url.pathname.endsWith(".json");
          const isNavigation = request.mode === "navigate";

          if (isAsset || isNavigation) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
        }
        return response;
      })
      .catch(() => {
        // Network failed — try cache
        return caches.match(request).then((cached) => {
          if (cached) return cached;
          // For navigation requests, serve cached index.html (SPA fallback)
          if (request.mode === "navigate") {
            return caches.match("/index.html");
          }
          return new Response("Offline", { status: 503 });
        });
      })
  );
});
