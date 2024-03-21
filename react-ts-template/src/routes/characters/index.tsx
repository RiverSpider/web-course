import { useEffect } from "react";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import posts from "../../api/posts.ts";
import Pagination from "../../components/Pagination/Pagination.tsx";
import Title from "../../components/Title/Title.tsx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { characterStore } from './../../api/store/stores';
import { observer } from "mobx-react";

const CharactersComponent = observer(() => {
  const { characters, totalCharacters, currentPage } = characterStore;

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchCharacters = async (offset: number) => {
      try {
        const data = await posts.getCharactersList(offset);
        characterStore.setCharacters(data.results);
        characterStore.setTotalCharacters(data.total);
      } catch (error) {
        console.error('Error fetching characters:', error);
        toast.error("Failed to load characters. Please try again.");
        throw error;
      }
    };

    if (window.location.pathname.includes('/search')) {
      const query = window.location.pathname.split('/search/')[1];
      fetchCharactersByName(query, (currentPage - 1) * itemsPerPage);
    } else {
      fetchCharacters((currentPage - 1) * itemsPerPage);
    }
  }, [currentPage]);

  const fetchCharactersByName = async (query: string, offset: number) => {
    try {
      const data = await posts.searchCharactersByName(query, offset);
      characterStore.setCharacters(data.results);
      characterStore.setTotalCharacters(data.total);
    } catch (error) {
      console.error('Error fetching characters by name:', error);
      toast.error("Failed to load characters by name. Please try again.");
      throw error;
    }
  };

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
