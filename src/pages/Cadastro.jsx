import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Alert, Box, CircularProgress, Snackbar, Typography } from '@mui/material';
import SerieForm from '../components/SerieForm/SerieForm';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

function Cadastro() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [serieParaEditar, setSerieParaEditar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    const carregarSerie = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const response = await api.get(`/series/${id}`);
        setSerieParaEditar(response.data);
      } catch (error) {
        setFeedback({
          open: true,
          message: 'Erro ao carregar a série para edição.',
          severity: 'error',
        });
      } finally {
        setLoading(false);
      }
    };

    carregarSerie();
  }, [id]);

  const handleSave = async (serie) => {
  try {
    setLoading(true);

    const payload = {
      titulo: serie.titulo,
      temporadas: Number(serie.temporadas),
      dataLancamento: serie.dataLancamento,
      diretor: serie.diretor,
      produtora: serie.produtora,
      categoria: serie.categoria,
      dataAssistido: serie.dataAssistido,
    };

    if (id) {
      await api.put('/series', { ...payload, id: Number(id) });
      setFeedback({
        open: true,
        message: 'Série atualizada com sucesso!',
        severity: 'success',
      });
    } else {
      await api.post('/series', payload);
      setFeedback({
        open: true,
        message: 'Série cadastrada com sucesso!',
        severity: 'success',
      });
    }

    setTimeout(() => navigate('/lista'), 1000);
  } catch (error) {
    console.error('Erro ao salvar série:', error.response?.data || error.message);
    setFeedback({
      open: true,
      message: `Erro ao salvar a série: ${error.response?.data?.message || error.message}`,
      severity: 'error',
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', color: '#6f42c1', fontWeight: 700, mb: 3 }}
      >
        {id ? 'Editar série' : 'Cadastrar série'}
      </Typography>

      {loading && id ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <SerieForm onSave={handleSave} serieParaEditar={serieParaEditar} loading={loading} />
      )}

      <Snackbar
        open={feedback.open}
        autoHideDuration={3000}
        onClose={() => setFeedback({ ...feedback, open: false })}
      >
        <Alert severity={feedback.severity} variant="filled">
          {feedback.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Cadastro;