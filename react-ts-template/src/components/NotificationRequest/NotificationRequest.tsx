import { useEffect } from "react";

const NotificationRequest = () => {
  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Permission granted');
        } else {
          console.log('User gave no permission');
        }
      });
    }
  }, []);

  return null;
};

export default NotificationRequest;
