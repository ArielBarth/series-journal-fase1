import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro';
import Lista from './pages/Lista';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastro/:id" element={<Cadastro />} />
            <Route path="/lista" element={<Lista />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;