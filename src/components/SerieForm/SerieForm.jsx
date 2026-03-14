import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SerieForm({ onSave, serieParaEditar }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        titulo: '',
        temporadas: '',
        dataLancamento: '',
        diretor: '',
        produtora: '',
        categoria: '',
        dataAssistido: ''
    });

    // Preenche o formulário se for edição
    useEffect(() => {
        if (serieParaEditar) {
            setFormData(serieParaEditar);
        }
    }, [serieParaEditar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação básica
        if (!formData.titulo || !formData.temporadas) {
            alert("Por favor, preencha pelo menos o Título e o Número de Temporadas.");
            return;
        }

        onSave(formData);
        alert(serieParaEditar ? "Série atualizada!" : "Série cadastrada com sucesso!");
        navigate('/lista');
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Título:</label>
                <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Número de Temporadas:</label>
                <input type="number" name="temporadas" value={formData.temporadas} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Data de Lançamento da Temporada:</label>
                <input type="date" name="dataLancamento" value={formData.dataLancamento} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Diretor:</label>
                <input type="text" name="diretor" value={formData.diretor} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Produtora:</label>
                <input type="text" name="produtora" value={formData.produtora} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Categoria:</label>
                <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Data em que assistiu:</label>
                <input type="date" name="dataAssistido" value={formData.dataAssistido} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn-submit">
                {serieParaEditar ? 'Atualizar Série' : 'Cadastrar Série'}
            </button>
        </form>
    );
}

export default SerieForm;