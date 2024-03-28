import { useEffect } from "react";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import posts from "../../api/posts.ts";
import Pagination from "../../components/Pagination/Pagination.tsx";
import Title from "../../components/Title/Title.tsx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { observer } from "mobx-react";
import { comicStore } from '../../stores/comicStore.ts';

const ComicsComponent = observer(() => {
  const { comics, totalComics, currentPage } = comicStore;

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchComics = async (offset: number) => {
      try {
        const data = await posts.getComicsList(offset);
        comicStore.setComics(data.results);
        comicStore.setTotalComics(data.total)
      } catch (error) {
        console.error('Error fetching comics:', error);
        toast.error("Failed to load comics. Please try again.");
        throw error;
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
      comicStore.setComics(data.results);
      comicStore.setTotalComics(data.total)
    } catch (error) {
      console.error('Error fetching comics by title:', error);
      toast.error("Failed to load comics by title. Please try again.");
      throw error;
    }
  };

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
