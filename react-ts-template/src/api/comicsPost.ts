import instance from "./helpers/axios";
import md5 from 'md5';
import { Comics, Comic } from "./types/comics";

const ts = Date.now();
const hash = md5(`${ts}${import.meta.env.VITE_PRIVATE_KEY}${import.meta.env.VITE_API_KEY}`);
const apikey = import.meta.env.VITE_API_KEY;

export default {

        async getComicsList(offset: number): Promise<{ results: Comics[], total: number }> {
        const response = await instance.get(`/comics`, {
          params: {
            apikey,
            ts,
            hash,
            offset,
          },
        });

        return { results: response.data.data.results, total: response.data.data.total };
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



    async searchComicsByTitle(query: string, offset: number): Promise<{ results: Comics[], total: number }> {
        const response = await instance.get(`/comics`, {
          params: {
            apikey,
            ts,
            hash,
            offset,
            titleStartsWith: query,
          },
        });

        return { results: response.data.data.results, total: response.data.data.total };
  },

};
