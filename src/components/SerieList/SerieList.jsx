function SerieList({ series, onEdit, onDelete }) {
    if (series.length === 0) {
        return <p>Nenhuma série cadastrada.</p>;
    }

    return (
        <div>
            {series.map((serie) => (
                <div key={serie.id} className="serie-item">
                    <span>- {serie.titulo}</span>
                    <span>- {serie.temporadas} temporadas</span>
                    <span>- {serie.dataLancamento}</span>
                    <span>- {serie.diretor}</span>
                    <span>- {serie.produtora}</span>
                    <span>- {serie.categoria}</span>
                    <span>- {serie.dataAssistido}</span>

                    <div className="serie-actions">
                        <button onClick={() => onEdit(serie)}>Editar</button>
                        <button onClick={() => onDelete(serie.id)}>Excluir</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SerieList;