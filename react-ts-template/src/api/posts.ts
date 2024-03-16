import instance from "./helpers/axios";
import { Characters, Comics, Character, Comic } from './types/post';

export default {
  async getCharactersList(offset: number): Promise<Characters[]> {
    const response = await instance.get(`/v1/public/characters`, {
      params: {
        offset,
        limit: 20,
      },
    });

    return response.data.data.results;
  },

  async getCharacter(characterId: number): Promise<Character> {
    const response = await instance.get(`/v1/public/characters/${characterId}`);

    return response.data.data.results[0];
  },

  async getComicsList(offset: number): Promise<Comics[]> {
    const response = await instance.get(`/v1/public/comics`, {
      params: {
        offset,
        limit: 20,
      },
    });

    return response.data.data.results;
  },

  async getComic(comicId: number): Promise<Comic> {
    const response = await instance.get(`/v1/public/comics/${comicId}`);

    return response.data.data.results[0];
  },
};
