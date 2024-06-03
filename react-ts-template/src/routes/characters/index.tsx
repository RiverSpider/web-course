import { useEffect, useState } from "react";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import Title from "../../components/Title/Title.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { characterStore } from '../../stores/characterStore.ts';
import { observer } from "mobx-react";
import useLocalStorage from "../../stores/localStore.ts";
import classes from "./../../components/Wrap/Wrap.module.css";
import Loader from "../../components/Loader/Loader.tsx";

const CharactersComponent = observer(() => {
  const { fetchCharacters, fetchCharactersByName, characters, totalCharacters, currentPage } = characterStore;
  const query = new URLSearchParams(window.location.search).get('search');
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const itemsPerPage = 20;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (query) {
      fetchCharactersByName(query, (currentPage - 1) * itemsPerPage)
        .finally(() => setIsLoading(false));
    } else {
      fetchCharacters((currentPage - 1) * itemsPerPage)
        .finally(() => setIsLoading(false));
    }
  }, [currentPage, query]);

  const handleLoadMore = () => {
    characterStore.setCurrentPage(currentPage + 1);
    setIsLoading(true);
  };

  return (
    <>
      <Title totalCharacters={totalCharacters} type={"Characters"} />
      <SearchForm type={"characters"} />
      <Wrap data={characters} favorites={favorites} setFavorites={setFavorites} onLoadMore={handleLoadMore} />
      {isLoading && characters.length < totalCharacters ? <Loader /> : <div className={classes.freespace} />}
    </>
  );
});

export default CharactersComponent;
