import { useEffect, useState } from "react";
import { Comics } from "../../api/types/post.ts";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import posts from "../../api/posts.ts";
import Pagination from "../../components/Pagination/Pagination.tsx";

const ComicsComponent = () => {
  const [comics, setComics] = useState<Comics[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchComics = async (offset: number) => {
      try {
        const data = await posts.getComicsList(offset);
        setComics(data);
      } catch (error) {
        console.error('Error fetching comics:', error);
      }
    };

    fetchComics((currentPage - 1) * itemsPerPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <SearchForm />
      <Wrap data={comics} />
      <Pagination totalItems={59502} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
    </>
  );
};

export default ComicsComponent;
