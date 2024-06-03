import { useEffect, useState } from 'react';
import classes from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      <nav className={classes.navigation_container}>
        <Link to='/characters' className={currentPath.includes('/characters') ? `${classes.navigation_link} ${classes.active}` : classes.navigation_link}>{t('characters')}</Link>
        <Link to='/comics' className={currentPath.includes('/comics') ? `${classes.navigation_link} ${classes.active}` : classes.navigation_link}>{t('comics')}</Link>
        <Link to='/favourites' className={currentPath.includes('/favourites') ? `${classes.navigation_link} ${classes.active}` : classes.navigation_link}>{t('favourites')}</Link>
      </nav>
      <div className={classes.container}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
