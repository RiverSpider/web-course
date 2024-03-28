import { useParams } from "react-router-dom";
import InfoPage from "./../../components/InfoPage/InfoPage.tsx";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { comicStore } from "../../stores/comicStore.ts";

const ComicInfo = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    comicStore.fetchComic(parseInt(id || '0'));
  }, [id]);

  return <InfoPage data={comicStore.comic} />;
});

export default ComicInfo;
