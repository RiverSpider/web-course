import classes from './Title.module.css';

interface Props {
  totalCharacters: number;
}

export default function Title({ totalCharacters }: Props) {
  return (
    <div className={classes.box}>
      <div className={classes.page_name}>{window.location.pathname.includes('/characters') ? 'Characters' : 'Comics'}</div>
      <div className={classes.cards_count}>
        ({totalCharacters})
      </div>
    </div>
  );
}
