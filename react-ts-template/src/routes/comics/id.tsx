import { useParams } from "react-router-dom";
import InfoPage from "./../../components/InfoPage/InfoPage.tsx";
import { useState, useEffect } from "react";
import posts from "../../api/posts.ts";
import { Comic } from "../../api/types/post.ts";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ComicInfo = () => {
  const { id } = useParams();
  const [comic, setComic] = useState<Comic | null>(null);

  useEffect(() => {
    const fetchComic = async () => {
      try {
        const data = await posts.getComic(parseInt(id || '0'));
        setComic(data);
      } catch (error) {
        console.error('Error fetching comic:', error);
        toast.error("Failed to load comics. Please try again.");
        throw error;
      }
    };

    fetchComic();
  }, [id]);

  return <InfoPage data={comic} />;
};

export default ComicInfo;
