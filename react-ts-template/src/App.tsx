import { Route, Routes } from 'react-router-dom';
import HeaderFooterLayout from './../src/components/Layouts/HeaderFooterLayout';
import Comics from './routes/comics';
import CharacterInfo from './routes/characters/id';
import ComicInfo from './routes/comics/id';
import CharactersComponent from './routes/characters';

export default function App() {
  return (
    <HeaderFooterLayout>
    <Routes>
      <Route path="/" element={<Comics />} />
      <Route path="characters" element={<CharactersComponent />} />
      <Route path="comics" element={<Comics />} />
      <Route path="/characters/:id" element={<CharacterInfo />} />
      <Route path="comics/:id" element={<ComicInfo />} />
    </Routes>
    </HeaderFooterLayout>
  );
}
