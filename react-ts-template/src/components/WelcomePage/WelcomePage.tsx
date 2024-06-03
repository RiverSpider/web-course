import classes from './WelcomePage.module.css';
import { useTranslation } from 'react-i18next';

export default function WelcomePage() {
  const { t } = useTranslation();
  return (
    <div className={classes.welcome_container}><h1>{t('welcome')}</h1></div>
  );
}
