import { makeAutoObservable } from 'mobx';
import { Character, Characters, Comic, Comics } from '../types/post';

class CharacterStore {
  characters: Characters[] = [];
  totalCharacters: number = 0;
  currentPage: number = 1;
  character: Character | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCharacters(characters: Characters[]) {
    this.characters = characters;
  }

  setTotalCharacters(total: number) {
    this.totalCharacters = total;
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  setCharacter(character: Character | null) {
    this.character = character;
  }
}

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

const characterStore = new CharacterStore();
const comicStore = new ComicStore();

export { characterStore, comicStore };
