import { useEffect } from "react";
import InfoPage from "./../../components/InfoPage/InfoPage.tsx";
import { useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { observer } from "mobx-react";
import { characterStore } from "../../stores/characterStore.ts";

const CharacterInfo = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    characterStore.fetchCharacter(parseInt(id || '0'));
  }, [id]);

  return <InfoPage data={characterStore.character} />;
});

export default CharacterInfo;
