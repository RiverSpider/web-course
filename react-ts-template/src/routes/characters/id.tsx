import { useEffect } from "react";
import InfoPage from "./../../components/InfoPage/InfoPage.tsx";
import posts from "../../api/posts.ts";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { observer } from "mobx-react";
import { characterStore } from "../../api/store/stores.ts";

const CharacterInfo = observer(() => {
  const { id } = useParams();
  const { getCharacter } = posts;
  const { character } = characterStore;

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await getCharacter(parseInt(id || '0'));
        characterStore.setCharacter(data);
      } catch (error) {
        console.error('Error fetching character:', error);
        toast.error("Failed to load character. Please try again.");
        throw error;
      }
    };

    fetchCharacter();
  }, [id]);

  return <InfoPage data={character} />;
});

export default CharacterInfo;
