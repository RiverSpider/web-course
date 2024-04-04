import classes from './Title.module.css';

interface Props {
  totalCharacters: number;
  type: 'Characters' | 'Comics';
}

export default function Title({ totalCharacters, type }: Props) {
  return (
    <div className={classes.box}>
      <div className={classes.page_name}>{type}</div>
      <div className={classes.cards_count}>
        ({totalCharacters})
      </div>
    </div>
  );
}
