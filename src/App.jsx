import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro';
import Lista from './pages/Lista';

function App() {
  // Estado para armazenar as séries
  const [series, setSeries] = useState([
    {
      id: 1,
      titulo: 'La Casa de Papel',
      temporadas: '3',
      dataLancamento: '2020-05-20',
      diretor: 'Álex Pina',
      produtora: 'Netflix',
      categoria: 'Drama',
      dataAssistido: '2021-05-10'
    },
    {
      id: 2,
      titulo: 'Breaking Bad',
      temporadas: '5',
      dataLancamento: '2008-01-22',
      diretor: 'Vince Gilligan',
      produtora: 'Sony Pictures',
      categoria: 'Drama',
      dataAssistido: '2015-01-20'
    }
  ]);

  const addSerie = (novaSerie) => {
    setSeries([...series, { ...novaSerie, id: Date.now() }]);
  };

  const updateSerie = (serieAtualizada) => {
    setSeries(series.map(s => s.id === serieAtualizada.id ? serieAtualizada : s));
  };

  const deleteSerie = (id) => {
    setSeries(series.filter(s => s.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/cadastro"
            element={<Cadastro onAdd={addSerie} onUpdate={updateSerie} />}
          />
          <Route
            path="/lista"
            element={<Lista series={series} onDelete={deleteSerie} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;