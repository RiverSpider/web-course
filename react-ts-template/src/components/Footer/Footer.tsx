import classes from './Footer.module.css';
import { useTranslation } from 'react-i18next';

const currentYear = new Date().getFullYear();

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}></div>
      <div className={classes.text}>
        {t('data_provided_by')} Marvel. &copy; {currentYear} MARVEL
      </div>
      <a className={classes.text} href="http://developer.marvel.com">developer.marvel.com</a>
    </footer>
  );
}

export default Footer;
