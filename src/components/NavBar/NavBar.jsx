import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/cadastro">Cadastrar Séries</Link></li>
                <li><Link to="/lista">Lista de Séries</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
