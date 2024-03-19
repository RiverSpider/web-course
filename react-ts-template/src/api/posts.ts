import instance from "./helpers/axios";
import { Characters, Comics, Character, Comic } from './types/post';
import md5 from 'md5';

const ts = Date.now();
const hash = md5(`${ts}${import.meta.env.VITE_PRIVATE_KEY}${import.meta.env.VITE_API_KEY}`);
const apikey = import.meta.env.VITE_API_KEY;

export default {
  async getCharactersList(offset: number): Promise<Characters[]> {
    const response = await instance.get(`/characters`, {
      params: {
        apikey,
        ts,
        hash,
        offset,
      },
    });

    return response.data.data.results;
  },

    async getCharacter(characterId: number): Promise<Character> {

    const response = await instance.get(`/characters/${characterId}`, {
      params: {
        apikey,
        ts,
        hash,
      },
    });

    return response.data.data.results[0];
  },

    async getComicsList(offset: number): Promise<Comics[]> {

    const response = await instance.get(`/comics`, {
      params: {
        apikey,
        ts,
        hash,
        offset,
      },
    });

    return response.data.data.results;
  },


    async getComic(comicId: number): Promise<Comic> {

    const response = await instance.get(`/comics/${comicId}`, {
      params: {
        apikey,
        ts,
        hash,
      },
    });

    return response.data.data.results[0];
  },

};
