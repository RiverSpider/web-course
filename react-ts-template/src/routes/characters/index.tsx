import { useEffect, useState } from "react";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import posts from "../../api/posts.ts";
import { Characters } from "../../api/types/post";
import Pagination from "../../components/Pagination/Pagination.tsx";

const CharactersComponent = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchCharacters = async (offset: number) => {
      try {
        const data = await posts.getCharactersList(offset);
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters((currentPage - 1) * itemsPerPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <SearchForm />
      <Wrap data={characters} />
      <Pagination totalItems={1564} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
    </>
  );
};

export default CharactersComponent;
