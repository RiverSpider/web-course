import { useParams } from "react-router-dom";
import InfoPage from "./../../components/InfoPage/InfoPage.tsx";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { comicStore } from "../../stores/comicStore.ts";
import Loader from "../../components/Loader/Loader.tsx";

const ComicInfo = observer(() => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    comicStore.fetchComic(parseInt(id || '0')).finally(() => setIsLoading(false));;
  }, [id]);

  return isLoading ? <Loader /> : <InfoPage data={comicStore.comic} type={"Comics"} />;
});

export default ComicInfo;
