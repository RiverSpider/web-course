import { useEffect } from "react";

const NotificationRequest = () => {
  useEffect(() => {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      const registration = navigator.serviceWorker.ready;

      registration.then(async () => {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
          console.log('Permission granted');
        } else {
          console.log('Permission denied');
        }
      });
    }
  }, []);
};

export default NotificationRequest;
