self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        let client = windowClients[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

self.addEventListener('pushsubscriptionchange', event => {
  console.log('Subscription expired');
  event.waitUntil(
    self.registration.pushManager.subscribe(event.oldSubscription.options)
    .then(subscription => {
      return fetch('http://localhost:5173', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    })
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'favorite-change') {
    self.registration.showNotification(event.data.title, {
      body: event.data.message,
    });
  }
});
