import classes from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      <nav className={classes.navigation_container}>
        <Link to='/characters' className={location.pathname === '/characters' ? `${classes.navigation_link} ${classes.active}` : classes.navigation_link}>Characters</Link>
        <Link to='/comics' className={location.pathname === '/comics' ? `${classes.navigation_link} ${classes.active}` : classes.navigation_link}>Comics</Link>
      </nav>
    </header>
  );
}
