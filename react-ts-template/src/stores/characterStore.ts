import { makeAutoObservable } from 'mobx';
import { Characters, Character } from '../api/types/characters';

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

const characterStore = new CharacterStore();

export { characterStore };
