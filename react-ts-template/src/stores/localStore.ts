import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  var [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }

    if (typeof initialValue === 'object') {
      initialValue = JSON.stringify(initialValue);
    }

    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
