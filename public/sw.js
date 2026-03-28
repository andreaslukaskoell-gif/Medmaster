// MedMaster Service Worker — App Shell caching (network-first)
// Bump version to force cache refresh on deploy
const CACHE_NAME = "medmaster-v3";

// Pre-cache critical shell on install
const SHELL_URLS = ["/", "/index.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Clean up old caches
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      )
      .then(() => {
        // Notify clients about the update
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({ type: "SW_UPDATED", version: CACHE_NAME });
          });
        });
      })
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

  // Hashed assets (immutable) — cache-first for speed
  if (url.pathname.startsWith("/assets/") && /\.[a-f0-9]{8,}\./i.test(url.pathname)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Everything else — network-first
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const isAsset =
            url.pathname.endsWith(".js") ||
            url.pathname.endsWith(".css") ||
            url.pathname.endsWith(".png") ||
            url.pathname.endsWith(".svg") ||
            url.pathname.endsWith(".woff2") ||
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
