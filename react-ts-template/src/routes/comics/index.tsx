import { useEffect, useState } from "react";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import Pagination from "../../components/Pagination/Pagination.tsx";
import Title from "../../components/Title/Title.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { observer } from "mobx-react";
import { comicStore } from '../../stores/comicStore.ts';
import Loader from "../../components/Loader/Loader.tsx";

const ComicsComponent = observer(() => {
  const { fetchComicsByTitle, fetchComics, comics, totalComics, currentPage } = comicStore;
  const query = new URLSearchParams(window.location.search).get('search');

  const itemsPerPage = 20;  

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setIsLoading(true);
    
    if (query) {
      fetchComicsByTitle(query, (currentPage - 1) * itemsPerPage).finally(() => setIsLoading(false));
    } else {
      fetchComics((currentPage - 1) * itemsPerPage).finally(() => setIsLoading(false));
    }
  }, [currentPage, query]);

  const handlePageChange = (page: number) => {
    comicStore.setCurrentPage(page);
  };

  return (
    <>
      <Title totalCharacters={totalComics} />
      <SearchForm />
      { isLoading ? <Loader /> : <Wrap data={comics} />}
      { !isLoading && <Pagination totalItems={totalComics} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} /> }
    </>
  );
});

export default ComicsComponent;
