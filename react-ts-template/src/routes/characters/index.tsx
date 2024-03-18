import { useEffect, useState } from "react";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import posts from "../../api/posts.ts";
import { Characters } from "../../api/types/post";

const CharactersComponent = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await posts.getCharactersList();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <>
      <SearchForm />
      <Wrap data={characters} />
    </>
  );
};

export default CharactersComponent;
