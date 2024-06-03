import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} style={{ background: 'none', border: 'none' }}>
      {theme === 'light'
        ? <div style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: '#000' }}></div>
        : <div style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: '#fff' }}></div>}
    </button>
  );
};

export default ThemeSwitcher;
