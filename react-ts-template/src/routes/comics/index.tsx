import { useEffect, useState } from "react";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import Title from "../../components/Title/Title.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { observer } from "mobx-react";
import { comicStore } from '../../stores/comicStore.ts';
import useLocalStorage from "../../stores/localStore.ts";
import classes from "./../../components/Wrap/Wrap.module.css";
import Loader from "../../components/Loader/Loader.tsx";

const ComicsComponent = observer(() => {
  const { fetchComicsByTitle, fetchComics, comics, totalComics, currentPage } = comicStore;
  const query = new URLSearchParams(window.location.search).get('search');
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const itemsPerPage = 20;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (query) {
      fetchComicsByTitle(query, (currentPage - 1) * itemsPerPage)
        .finally(() => setIsLoading(false));
    } else {
      fetchComics((currentPage - 1) * itemsPerPage)
        .finally(() => setIsLoading(false));
    }
  }, [currentPage, query]);

  const handleLoadMore = () => {
    comicStore.setCurrentPage(currentPage + 1);
    setIsLoading(true);
  };

  return (
    <>
      <Title totalCharacters={totalComics} type={"Comics"} />
      <SearchForm type={"comics"} />
      <Wrap data={comics} favorites={favorites} setFavorites={setFavorites} onLoadMore={handleLoadMore} isLoading={isLoading} />
      {isLoading && comics.length < totalComics ? <Loader /> : <div className={classes.freespace} />}
    </>
  );
});

export default ComicsComponent;
