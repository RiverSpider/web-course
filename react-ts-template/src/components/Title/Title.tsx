import classes from './Title.module.css';
import { useTranslation } from 'react-i18next';

interface Props {
  totalCharacters: number;
  type: string;
}

export default function Title({ totalCharacters, type }: Props) {
  const { t } = useTranslation();
  return (
    <div className={classes.box}>
      <div className={classes.page_name}>{type === 'Characters' ? `${t('characters')}` : type === 'Comics' ? `${t('comics')}` : `${t('favourites')}`}</div>
      <div className={classes.cards_count}>
        ({totalCharacters})
      </div>
    </div>
  );
}
