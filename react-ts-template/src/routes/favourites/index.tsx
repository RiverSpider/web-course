import Wrap from "./../../components/Wrap/Wrap";
import Title from "../../components/Title/Title.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { observer } from "mobx-react";

const Favourites = observer(() => {
    const totalCharacters = 0;
  return (
    <>
      <Title totalCharacters={totalCharacters} type={"Favourites"} />
    </>
  );
});

export default Favourites;