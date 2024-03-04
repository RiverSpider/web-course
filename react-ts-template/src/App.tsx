import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Wrap from "./components/Wrap/Wrap";
import { characters } from "./assets/styles/characters.tsx";
import { comics } from "./assets/styles/comics.tsx";

export default function App() {
    return (
        <><><Header /></><Wrap data={characters} /><Footer /></>
    );
}
