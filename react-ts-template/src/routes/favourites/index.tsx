import Wrap from "./../../components/Wrap/Wrap";
import Title from "../../components/Title/Title.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { observer } from "mobx-react";
import useLocalStorage from "../../stores/localStore.ts";
import Divider from "../../components/Divider/Divider.tsx";
import classes from "./../../components/Wrap/Wrap.module.css";

  const Favourites = observer(() => {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);
    const totalCharacters = favorites.length;

    return (
      <>
        <Title totalCharacters={totalCharacters} type={"Favourites"} />
        <Divider />
        <Wrap data={favorites} favorites={favorites} setFavorites={setFavorites}/>
        <div className={classes.freespace} />
      </>
    );
  });

  export default Favourites;
