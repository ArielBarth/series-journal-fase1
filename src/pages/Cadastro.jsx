import { useLocation } from 'react-router-dom';
import SerieForm from '../components/SerieForm/SerieForm';

function Cadastro({ onAdd, onUpdate }) {
    const location = useLocation();
    const serieParaEditar = location.state?.serie;

    const handleSave = (serie) => {
        if (serieParaEditar) {
            onUpdate(serie);
        } else {
            onAdd(serie);
        }
    };

    return (
        <div className="page-content">
            <h1>{serieParaEditar ? 'Editar série' : 'Cadastrar séries'}</h1>
            <SerieForm onSave={handleSave} serieParaEditar={serieParaEditar} />
        </div>
    );
}
export default Cadastro;