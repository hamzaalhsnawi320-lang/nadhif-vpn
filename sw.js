self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
// حاليا بدون حجب حتى يرجع الرمز
