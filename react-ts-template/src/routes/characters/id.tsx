import InfoPage from "./../../components/InfoPage/InfoPage.tsx";
import { characters } from "./../../assets/mocks/characters.tsx";

const CharacterInfo = () => {
  return <InfoPage data={characters} />;
};

export default CharacterInfo;
