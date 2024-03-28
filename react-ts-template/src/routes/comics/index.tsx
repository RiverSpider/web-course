import { useEffect } from "react";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import Pagination from "../../components/Pagination/Pagination.tsx";
import Title from "../../components/Title/Title.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { observer } from "mobx-react";
import { comicStore } from '../../stores/comicStore.ts';

const ComicsComponent = observer(() => {
  const { fetchComicsByTitle, fetchComics, comics, totalComics, currentPage } = comicStore;

  const itemsPerPage = 20;

  useEffect(() => {

    if (window.location.pathname.includes('/search')) {
      const query = window.location.pathname.split('/search/')[1];
      fetchComicsByTitle(query, (currentPage - 1) * itemsPerPage);
    } else {
      fetchComics((currentPage - 1) * itemsPerPage);
    }
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    comicStore.setCurrentPage(page);
  };

  return (
    <>
      <Title totalCharacters={totalComics} />
      <SearchForm />
      <Wrap data={comics} />
      <Pagination totalItems={totalComics} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
    </>
  );
});

export default ComicsComponent;
