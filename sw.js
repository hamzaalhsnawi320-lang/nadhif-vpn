self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', event => {
  if (['image','video','audio'].includes(event.request.destination) || event.request.url.match(/\.(jpg|png|mp4|gif|webm)$/i)) {
    return event.respondWith(new Response('', {status: 403}));
  }
});
