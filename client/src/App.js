import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Games from './components/Games';
import Header from './components/Header';
import Systems from './components/Systems';
import SystemsPage from './components/SystemsPage';
import Title from './components/Title';
import Decades from './components/Decades';
import DecadesPage from './components/DecadesPage';
import GenresPage from './components/GenresPage';
import Genres from './components/Genres';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route strict path='/games' element={<Games />} />
          <Route path='/games/nes/:id' element={<Title />} />
          <Route path='/games/snes/:id' element={<Title />} />
          <Route path='/games/n64/:id' element={<Title />} />
          <Route path='/games/gamecube/:id' element={<Title />} />
          <Route path='/games/dreamcast/:id' element={<Title />} />
          <Route path='/games/genesis/:id' element={<Title />} />
          <Route path='/games/playstation/:id' element={<Title />} />
          <Route path='/systems' element={<SystemsPage />} />
          <Route path='/systems/:id' element={<Systems />} />
          <Route path='/decades' element={<DecadesPage />} />
          <Route path='/decades/:id' element={<Decades />} />
          <Route strict path='/genres' element={<GenresPage />} />
          <Route path='/genre/:id' element={<Genres />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
