import type { RouteObject } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Wrap from "./components/Wrap/Wrap";
import { characters } from "./assets/styles/characters.tsx";
import { comics } from "./assets/styles/comics.tsx";
import SearchBar from "./components/Search/Search.tsx";
import SearchForm from "./components/Search/Search.tsx";

export default function App() {
    return (
        <><><Header /></><SearchForm /><Wrap data={characters} /><Footer /></>
    );
}
