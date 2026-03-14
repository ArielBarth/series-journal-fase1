import { useNavigate } from 'react-router-dom';
import SerieList from '../components/SerieList/SerieList';

function Lista({ series, onDelete }) {
    const navigate = useNavigate();

    const handleEdit = (serie) => {
        // Redireciona para a tela de cadastro passando os dados da série para edição
        navigate('/cadastro', { state: { serie } });
    };

    return (
        <div className="page-content">
            <h1>Lista de séries</h1>
            <br />
            <SerieList series={series} onEdit={handleEdit} onDelete={onDelete} />

            <button
                style={{ marginTop: '30px', padding: '5px 15px', cursor: 'pointer' }}
                onClick={() => navigate('/cadastro')}
            >
                Cadastrar nova série
            </button>
        </div>
    );
}
export default Lista;