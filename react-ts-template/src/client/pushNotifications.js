const publicKey = 'BFJV7A9uMjpMMi6ZNlcI_RrPLXmWReP1NvulUuXfGH6QC-Ey-eztNEwb7LEIfEVcZmIOx48beyX21TNxQcusTWo'

const messageContainer = document.getElementById(message);

const registerWorker = async () => {
  const worker = await navigator.serviceWorker.register('/sw.js');

  const subscription = await worker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicKey,
  });

  await fetch('http://localhost:5173', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json',
    },
  });
};

const init = async () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      console.log(event);

      message.innerText = event.data.msg;

      setTimeout(() => {
        message.innerText = '';
      }, 5000);
    });

    try {
      await registerWorker();
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log('Push Notifications are not supported');
  }
};

init();

const sendPushNotification = (subscription, dataToSend) => {
  webPush.sendNotification(subscription, dataToSend)
    .then(response => console.log('Sent push notification', response))
    .catch(error => console.error('Error sending push notification', error));
};

app.post('/', (req, res) => {
  const subscription = req.body;
  sendPushNotification(subscription, 'notification');

  res.status(200).json({ message: 'Subscription received' });
});
