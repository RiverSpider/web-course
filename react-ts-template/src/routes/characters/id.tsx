import { useEffect, useState } from "react";
import InfoPage from "./../../components/InfoPage/InfoPage.tsx";
import { useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { observer } from "mobx-react";
import { characterStore } from "../../stores/characterStore.ts";
import Loader from "../../components/Loader/Loader.tsx";

const CharacterInfo = observer(() => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    characterStore.fetchCharacter(parseInt(id || '0')).finally(() => setIsLoading(false));
  }, [id]);

  return isLoading ? <Loader /> : <InfoPage data={characterStore.character} />;
});

export default CharacterInfo;
