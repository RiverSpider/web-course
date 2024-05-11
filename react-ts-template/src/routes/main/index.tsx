import WelcomePage from "../../components/WelcomePage/WelcomePage.tsx";
import { useEffect } from "react";

const MainPage = () => {
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

  return (
    <WelcomePage />
  );
};

export default MainPage;