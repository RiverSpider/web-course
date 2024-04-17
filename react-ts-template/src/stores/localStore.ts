import { useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setAndSaveValue = (newValue: any) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setAndSaveValue];
};

export default useLocalStorage;
