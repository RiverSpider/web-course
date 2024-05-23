import { Route, Routes } from 'react-router-dom';
import HeaderFooterLayout from './../src/components/Layouts/HeaderFooterLayout';
import Comics from './routes/comics';
import Main from './routes/main';
import CharacterInfo from './routes/characters/id';
import ComicInfo from './routes/comics/id';
import CharactersComponent from './routes/characters';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favourites from './routes/favourites';
import NotificationRequest from './../src/components/NotificationRequest/NotificationRequest';

export default function App() {
  return (
    <div>
    <NotificationRequest />
    <HeaderFooterLayout>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="characters" element={<CharactersComponent />} />
      <Route path="characters/search/:query" element={<CharactersComponent />} />
      <Route path="comics" element={<Comics />} />
      <Route path="comics/search/:query" element={<Comics />} />
      <Route path="/characters/:id" element={<CharacterInfo />} />
      <Route path="comics/:id" element={<ComicInfo />} />
      <Route path="favourites" element={<Favourites />} />
    </Routes>
    </HeaderFooterLayout>
    <ToastContainer />
    </div>
  );
}
