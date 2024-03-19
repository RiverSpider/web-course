import classes from './Footer.module.css';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}></div>
      <div className={classes.text}>
        Data provided by Marvel. &copy; {currentYear} MARVEL
      </div>
      <a className={classes.text} href="http://developer.marvel.com">developer.marvel.com</a>
    </footer>
  );
}

export default Footer;
