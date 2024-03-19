import classes from './Title.module.css';

export default function Title() {
  return (
    <><div className={classes.box}>
        <div className={classes.page_name}>{window.location.pathname.includes('/characters') ? 'Characters' : 'Comics'}</div><div className={classes.cards_count}>
          ({window.location.pathname.includes("/characters")
              ? "1564"
              : "59502"})
        </div>
      </div>  </>
  );
}
