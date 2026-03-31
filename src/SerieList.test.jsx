import { render, screen } from '@testing-library/react';
import SerieList from './components/SerieList/SerieList';
import '@testing-library/jest-dom';

describe('SerieList', () => {
  it('renderiza mensagem quando não há séries', () => {
    render(<SerieList series={[]} onEdit={() => {}} onDelete={() => {}} />);
    expect(screen.getByText('Nenhuma série cadastrada.')).toBeInTheDocument();
  });

  it('renderiza uma série da lista', () => {
    const series = [
      {
        id: 1,
        titulo: 'Breaking Bad',
        temporadas: 5,
        dataLancamento: '2008-01-20',
        diretor: 'Vince Gilligan',
        produtora: 'AMC',
        categoria: 'Drama',
        dataAssistido: '2023-10-10',
      },
    ];

    render(<SerieList series={series} onEdit={() => {}} onDelete={() => {}} />);
    expect(screen.getByText('Breaking Bad')).toBeInTheDocument();
  });
});