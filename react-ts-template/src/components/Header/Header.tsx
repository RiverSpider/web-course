import classes from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <div className={classes.main_container}>
      <div className={classes.logo}></div>
      <div className={classes.navigation_container}>
        <Link to='/characters' className={location.pathname === '/characters' ? `${classes.navigation_link} ${classes.active}` : classes.navigation_link}>Characters</Link>
        <Link to='/comics' className={location.pathname === '/comics' ? `${classes.navigation_link} ${classes.active}` : classes.navigation_link}>Comics</Link>
      </div>
    </div>
  );
}
