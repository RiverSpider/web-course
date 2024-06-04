import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <select value={theme} onChange={toggleTheme} className={classes.switcher}>
      <option className={classes.text} value="light">{t('light')}</option>
      <option className={classes.text} value="dark">{t('dark')}</option>
    </select>
  );
};

export default ThemeSwitcher;
