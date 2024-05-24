import { useEffect } from 'react';

const usePushNotification = () => {
  const subscribeUser = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BFJV7A9uMjpMMi6ZNlcI_RrPLXmWReP1NvulUuXfGH6QC-Ey-eztNEwb7LEIfEVcZmIOx48beyX21TNxQcusTWo',
      });

      sendSubscriptionToServer(subscription);
    } catch (error) {
      console.error('Error subscribing the user:', error);
    }
  };

  const sendSubscriptionToServer = async (subscription: PushSubscription) => {
    try {
      const response = await fetch('http://localhost:5173/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
      });

      if (response.ok) {
        console.log('Subscription sent to server successfully');
      } else {
        console.error('Failed to send subscription to server');
      }
    } catch (error) {
      console.error('Error sending subscription to server:', error);
    }
  };

  useEffect(() => {
    subscribeUser();
  }, []);
};

export default usePushNotification;
