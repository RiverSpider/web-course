import { characters } from '../../assets/mocks/characters';
import { comics } from '../../assets/mocks/comics';
import classes from './Title.module.css';

export default function Title() {
  return (
    <><div className={classes.box}>
        <div className={classes.page_name}>{window.location.pathname.includes('/characters') ? 'Characters' : 'Comics'}</div><div className={classes.cards_count}>
          ({window.location.pathname.includes("/characters")
              ? characters.length
              : comics.length})
        </div>
      </div>  </>
  );
}