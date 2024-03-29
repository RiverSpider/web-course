import { useEffect, useState } from "react";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import Pagination from "../../components/Pagination/Pagination.tsx";
import Title from "../../components/Title/Title.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { characterStore } from '../../stores/characterStore.ts';
import Loader from "../../components/Loader/Loader.tsx";
import { observer } from "mobx-react";

const CharactersComponent = observer(() => {
  const { fetchCharacters, fetchCharactersByName, characters, totalCharacters, currentPage } = characterStore;
  const query = new URLSearchParams(window.location.search).get('search');

  const itemsPerPage = 20;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    if (query) {
      fetchCharactersByName(query, (currentPage - 1) * itemsPerPage).finally(() => setIsLoading(false));
    } else {
      fetchCharacters((currentPage - 1) * itemsPerPage).finally(() => setIsLoading(false));
    }
  }, [currentPage, query]);

  const handlePageChange = (page: number) => {
    characterStore.setCurrentPage(page);
  };

  return (
    <>
      <Title totalCharacters={totalCharacters} type={"Characters"} />
      <SearchForm type={"characters"} />
      { isLoading ? <Loader /> : <Wrap data={characters} />}
      { !isLoading && <Pagination totalItems={totalCharacters} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} /> }
    </>
  );
});

export default CharactersComponent;
