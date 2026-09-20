const BLOCKED_TYPES = ['image', 'video', 'audio'];

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('fetch', event => {
  // احظر كل الصور والفيديوهات والصوتيات وكل ملف mp4 jpg png
  if (
    BLOCKED_TYPES.includes(event.request.destination) ||
    event.request.url.match(/\.(jpg|jpeg|png|gif|webp|mp4|mov|avi|webm|mp3|m3u8)$/i)
  ) {
    return event.respondWith(
      new Response('', { status: 403, headers: { 'Content-Type': 'text/plain' } })
    );
  }
});
