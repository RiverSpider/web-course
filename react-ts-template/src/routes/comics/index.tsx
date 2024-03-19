import { useEffect, useState } from "react";
import { Comics } from "../../api/types/post.ts";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import posts from "../../api/posts.ts";
import Pagination from "../../components/Pagination/Pagination.tsx";
import Title from "../../components/Title/Title.tsx";

const ComicsComponent = () => {
  const [comics, setComics] = useState<Comics[]>([]);
  const [totalComics, setTotalComics] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchComics = async (offset: number) => {
      try {
        const data = await posts.getComicsList(offset);
        setComics(data.results);
        setTotalComics(data.total)
      } catch (error) {
        console.error('Error fetching comics:', error);
      }
    };

    if (window.location.pathname.includes('/search')) {
      const query = window.location.pathname.split('/search/')[1];
      fetchComicsByTitle(query, (currentPage - 1) * itemsPerPage);
    } else {
      fetchComics((currentPage - 1) * itemsPerPage);
    }
  }, [currentPage]);

  const fetchComicsByTitle = async (query: string, offset: number) => {
    try {
      const data = await posts.searchComicsByTitle(query, offset);
      setComics(data.results);
      setTotalComics(data.total)
    } catch (error) {
      console.error('Error fetching comics by title:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Title totalCharacters={totalComics} />
      <SearchForm />
      <Wrap data={comics} />
      <Pagination totalItems={totalComics} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
    </>
  );
};

export default ComicsComponent;
