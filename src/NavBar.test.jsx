import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  it('renderiza os links principais', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Cadastrar')).toBeInTheDocument();
    expect(screen.getByText('Lista de séries')).toBeInTheDocument();
  });
});