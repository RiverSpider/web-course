import { useEffect, useState } from "react";
import { Comics } from "../../api/types/post.ts";
import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import posts from "../../api/posts.ts";

const ComicsComponent = () => {
  const [comics, setComics] = useState<Comics[]>([]);

  useEffect(() => {
    const fetchComics = async () => {
    try {
      const data = await posts.getComicsList();
      setComics(data);
    } catch (error) {
        console.error('Error fetching comics:', error);
      }
    };
    fetchComics();
  }, []);

  return (
    <>
      <SearchForm />
      <Wrap data={comics} />
    </>
  );
};

export default ComicsComponent;
