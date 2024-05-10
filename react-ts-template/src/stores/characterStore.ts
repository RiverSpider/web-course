import { makeAutoObservable } from 'mobx';
import { Characters, Character } from '../api/types/characters';
import { toast } from 'react-toastify';
import posts from "../api/charactersPost.ts";

class CharacterStore {
  characters: Characters[] = [];
  totalCharacters: number = 0;
  currentPage: number = 1;
  character: Character | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCharacters(newCharacters: Characters[]) {
    const uniqueCharacters = newCharacters.filter(newCharacter => 
      !this.characters.some(existingCharacter => existingCharacter.id === newCharacter.id));
    this.characters = [...this.characters, ...uniqueCharacters];
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

  async fetchCharacters (offset: number) {
      try {
        const data = await posts.getCharactersList(offset);
        characterStore.setCharacters(data.results);
        characterStore.setTotalCharacters(data.total);
      } catch (error) {
        console.error('Error fetching characters:', error);
        toast.error("Failed to load characters. Please try again.");
        throw error;
      }
    }

  async fetchCharactersByName (query: string, offset: number) {
    try {
      const data = await posts.searchCharactersByName(query, offset);
      characterStore.setCharacters(data.results);
      characterStore.setTotalCharacters(data.total);
    } catch (error) {
      console.error('Error fetching characters by name:', error);
      toast.error("Failed to load characters by name. Please try again.");
      throw error;
    }
  }
  
  async fetchCharacter (id: number) {
    try {
      const data = await posts.getCharacter(id);
      characterStore.setCharacter(data);
    } catch (error) {
      console.error('Error fetching character:', error);
      toast.error("Failed to load character. Please try again.");
      throw error;
    }
  }
}

const characterStore = new CharacterStore();

export { characterStore };
