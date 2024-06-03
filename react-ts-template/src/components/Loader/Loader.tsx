import classes from './Loader.module.css';
import { useTranslation } from 'react-i18next';

export default function Loader() {
  const { t } = useTranslation();
  return (
    <div className={classes.loader_container}>
    {t('loading')} ...
  </div>
  );
}
