import { useEffect, useState } from "react";
import InfoPage from "./../../components/InfoPage/InfoPage.tsx";
import { Character } from "../../api/types/post.ts";
import posts from "../../api/posts.ts";
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await posts.getCharacter(parseInt(id));
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  return <InfoPage data={character} />;
};

export default CharacterInfo;
