import { useEffect } from "react";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import Pagination from "../../components/Pagination/Pagination.tsx";
import Title from "../../components/Title/Title.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { characterStore } from '../../stores/characterStore.ts';
import { observer } from "mobx-react";

const CharactersComponent = observer(() => {
  const { fetchCharacters, fetchCharactersByName, characters, totalCharacters, currentPage } = characterStore;

  const itemsPerPage = 20;

  useEffect(() => {
    if (window.location.pathname.includes('/search')) {
      const query = window.location.pathname.split('/search/')[1];
      fetchCharactersByName(query, (currentPage - 1) * itemsPerPage);
    } else {
      fetchCharacters((currentPage - 1) * itemsPerPage);
    }
  }, [currentPage]);

  

  const handlePageChange = (page: number) => {
    characterStore.setCurrentPage(page);
  };

  return (
    <>
      <Title totalCharacters={totalCharacters} />
      <SearchForm />
      <Wrap data={characters} />
      <Pagination totalItems={totalCharacters} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
    </>
  );
});

export default CharactersComponent;
