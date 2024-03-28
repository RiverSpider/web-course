import { makeAutoObservable } from 'mobx';
import { Comics, Comic } from '../api/types/comics';

class ComicStore {
  comics: Comics[] = [];
  totalComics: number = 0;
  currentPage: number = 1;
  comic: Comic | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setComics(comics: Comics[]) {
    this.comics = comics;
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
}

const comicStore = new ComicStore();

export { comicStore };
