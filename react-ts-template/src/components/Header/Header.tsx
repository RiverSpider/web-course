import classes from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <header className={classes.header}>
      <img src="../../assets/images/marvel_logo.svg" alt="Marvel Logo" className={classes.logo} />
      <nav className={classes.navigation_container}>
        <Link to='/characters' className={location.pathname === '/characters' ? `${classes.navigation_link} ${classes.active}` : classes.navigation_link}>Characters</Link>
        <Link to='/comics' className={location.pathname === '/comics' ? `${classes.navigation_link} ${classes.active}` : classes.navigation_link}>Comics</Link>
      </nav>
    </header>
  );
}
