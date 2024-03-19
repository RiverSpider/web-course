import InfoPage from "./../../components/InfoPage/InfoPage.tsx";
import { comics } from "./../../assets/mocks/comics.tsx";

const ComicInfo = () => {
  return <InfoPage data={comics} />;
};

export default ComicInfo;
