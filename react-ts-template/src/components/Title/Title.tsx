import classes from './Title.module.css';

export default function Title({ totalCharacters }) {
  return (
    <div className={classes.box}>
      <div className={classes.page_name}>{window.location.pathname.includes('/characters') ? 'Characters' : 'Comics'}</div>
      <div className={classes.cards_count}>
        ({totalCharacters})
      </div>
    </div>
  );
}
