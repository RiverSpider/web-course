import classes from './Footer.module.css';

export default function Footer() {
  
    return (
      <div className={classes.main_container}>
        <div className={classes.logo}></div>
        <div className={classes.text}>Data provided by Marvel. &copy; {new Date().getFullYear()} MARVEL</div>
        <a className={classes.text} href="http://developer.marvel.com">developer.marvel.com</a>
      </div>
    );
  }
