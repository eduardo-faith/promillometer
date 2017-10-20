/**
 * TODO Service-Worker
 */
var cacheName = "";
var filesToCache = [];

/**
 * Beim ersten Aufruf der Seite wird 'install' aufgerufen
 * @param e
 * @returns
 */
self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] Install');
});

/**
 * Nach der Installation wird Service-Worker aktiviert
 * @param e
 * @returns
 */
self.addEventListener('activate', function(e) {
	console.log('[ServiceWorker] Activate');
});


/**
 * Bei jedem Netzwerkzugriff (reload, request) wird gefetcht
 * @param e
 * @returns
 */
self.addEventListener('fetch', function(e) {
	console.log('[Service Worker] Fetch', e.request.url);
});
