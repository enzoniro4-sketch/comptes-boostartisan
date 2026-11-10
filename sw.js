/* Les comptes — version rapide : petit programme d'installation (v5.27-r1). Il ne garde AUCUNE copie de la page : tout vient du réseau, donc jamais d'ancienne version. */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ /* réseau seul */ });
