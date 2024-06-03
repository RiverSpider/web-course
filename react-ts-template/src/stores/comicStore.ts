import { makeAutoObservable } from 'mobx';
import { Comics, Comic } from '../api/types/comics';
import { toast } from 'react-toastify';
import posts from "../api/comicsPost.ts";

class ComicStore {
  comics: Comics[] = [];
  totalComics: number = 0;
  currentPage: number = 1;
  comic: Comic | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setComics(newComics: Comics[]) {
    const uniqueComics = newComics.filter(newComic => 
      !this.comics.some(existingComic => existingComic.id === newComic.id));
    this.comics = [...this.comics, ...uniqueComics];
  }

  setTotalComics(total: number) {
    this.totalComics = total;
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  setComic(comic: Comic | null) {
    this.comic = comic;
  }

  async fetchComics (offset: number) {
      try {
        const data = await posts.getComicsList(offset);
        comicStore.setComics(data.results);
        comicStore.setTotalComics(data.total);
      } catch (error) {
        console.error('Error fetching comics:', error);
        toast.error("Failed to load comics. Please try again.");
        throw error;
      }
    }

  async fetchComicsByTitle (query: string, offset: number) {
    try {
      const data = await posts.searchComicsByTitle(query, offset);
      comicStore.setComics(data.results);
      comicStore.setTotalComics(data.total);
    } catch (error) {
      console.error('Error fetching comics by title:', error);
      toast.error("Failed to load comics by title. Please try again.");
      throw error;
    }
  }

  async fetchComic (id: number) {
    try {
      const data = await posts.getComic(id);
      comicStore.setComic(data);
    } catch (error) {
      console.error('Error fetching comic:', error);
      toast.error("Failed to load comic. Please try again.");
      throw error;
    }
  }
}

const comicStore = new ComicStore();

export { comicStore };
