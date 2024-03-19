import SearchForm from "./../../components/Search/Search.tsx";
import Wrap from "./../../components/Wrap/Wrap";
import { comics } from "./../../assets/mocks/comics.tsx";

const Comics = () => {
  return (
    <>
      <SearchForm />
      <Wrap data={comics} />
    </>
  );
};

export default Comics;
