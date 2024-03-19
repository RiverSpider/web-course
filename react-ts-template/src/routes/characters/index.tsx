import { useEffect, useState } from "react";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import posts from "../../api/posts.ts";
import { Characters } from "../../api/types/post";
import Pagination from "../../components/Pagination/Pagination.tsx";
import Title from "../../components/Title/Title.tsx";

const CharactersComponent = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchCharacters = async (offset: number) => {
      try {
        const data = await posts.getCharactersList(offset);
        setCharacters(data.results);
        setTotalCharacters(data.total);
      } catch (error) {
        console.error('Error fetching characters:', error);
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
      setCharacters(data.results);
      setTotalCharacters(data.total);
    } catch (error) {
      console.error('Error fetching characters by name:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Title totalCharacters={totalCharacters} />
      <SearchForm />
      <Wrap data={characters} />
      <Pagination totalItems={totalCharacters} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
    </>
  );
};

export default CharactersComponent;
