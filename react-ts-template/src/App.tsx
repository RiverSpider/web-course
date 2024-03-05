import { Routes, type RouteObject, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Wrap from "./components/Wrap/Wrap";
import { characters } from "./assets/styles/characters.tsx";
import { comics } from "./assets/styles/comics.tsx";
import SearchForm from "./components/Search/Search.tsx";
import InfoPage from "./components/InfoPage/InfoPage.tsx";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/characters" element={<><SearchForm /><Wrap data={characters} /></>} />
                <Route path="/comics" element={<><SearchForm /><Wrap data={comics} /></>} />
                <Route path="/characters/:id" element={<InfoPage data={characters} />} />
                <Route path="/comics/:id" element={<InfoPage data={comics} />} />
            </Routes>
            <Footer />
        </>
    );
}
