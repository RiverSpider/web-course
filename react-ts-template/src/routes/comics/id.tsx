import { useParams } from "react-router-dom";
import InfoPage from "./../../components/InfoPage/InfoPage.tsx";
import { useEffect } from "react";
import posts from "../../api/posts.ts";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { observer } from "mobx-react";
import { comicStore } from "../../api/store/stores.ts";

const ComicInfo = observer(() => {
  const { id } = useParams();
  const { getComic } = posts;
  const { comic } = comicStore;

  useEffect(() => {
    const fetchComic = async () => {
      try {
        const data = await getComic(parseInt(id || '0'));
        comicStore.setComic(data);
      } catch (error) {
        console.error('Error fetching comic:', error);
        toast.error("Failed to load comics. Please try again.");
        throw error;
      }
    };

    fetchComic();
  }, [id]);

  return <InfoPage data={comic} />;
});

export default ComicInfo;
