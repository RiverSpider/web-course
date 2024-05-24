import { useEffect } from "react";

const NotificationRequest = () => {
  useEffect(() => {
    const sendNotification = (title: string, message: string) => {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'Get-Subscription',
          title: title,
          message: message
        });
      }
    };

    if ('Notification' in window && 'serviceWorker' in navigator) {
      const registration = navigator.serviceWorker.ready;

      registration.then(async (registration) => {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
          console.log('Permission granted');

          try {
            const subscription = await registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: 'BFJV7A9uMjpMMi6ZNlcI_RrPLXmWReP1NvulUuXfGH6QC-Ey-eztNEwb7LEIfEVcZmIOx48beyX21TNxQcusTWo'
            });

            console.log('Push sub OK:', subscription);

            sendNotification('You get a subscription', 'Now you can get them.');
          } catch (error) {
            console.error('Error:', error);
          }
        } else {
          console.log('Permission denied');
        }
      });
    }
  }, []);
};

export default NotificationRequest;
