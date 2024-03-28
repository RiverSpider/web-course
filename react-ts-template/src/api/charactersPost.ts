import instance from "./helpers/axios";
import { Characters, Character } from './types/characters';
import md5 from 'md5';

const ts = Date.now();
const hash = md5(`${ts}${import.meta.env.VITE_PRIVATE_KEY}${import.meta.env.VITE_API_KEY}`);
const apikey = import.meta.env.VITE_API_KEY;

export default {
  async getCharactersList(offset: number): Promise<{ results: Characters[], total: number }> {
        const response = await instance.get(`/characters`, {
            params: {
                apikey,
                ts,
                hash,
                offset,
            },
        });
        
        return { results: response.data.data.results, total: response.data.data.total };
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

      async searchCharactersByName(query: string, offset: number): Promise<{ results: Characters[], total: number }> {
        const response = await instance.get(`/characters`, {
          params: {
            apikey,
            ts,
            hash,
            offset,
            nameStartsWith: query,
          },
        });

        return { results: response.data.data.results, total: response.data.data.total };
  },

  };
  