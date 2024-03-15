import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import { characters } from "./../../assets/mocks/characters.tsx";

const Characters = () => {
  return (
    <>
      <SearchForm />
      <Wrap data={characters} />
    </>
  );
};

export default Characters;
