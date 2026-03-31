import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert, Box, CircularProgress, Snackbar, TextField, Typography } from '@mui/material';
import SerieList from '../components/SerieList/SerieList';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

function Lista() {
  const navigate = useNavigate();
  const [series, setSeries] = useState([]);
  const [busca, setBusca] = useState('');
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const carregarSeries = async () => {
    try {
      setLoading(true);
      const response = await api.get('/series');
      setSeries(response.data);
    } catch (error) {
      setFeedback({
        open: true,
        message: 'Erro ao carregar a lista de séries.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarSeries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/series/${id}`);
      setSeries((prev) => prev.filter((serie) => serie.id !== id));
      setFeedback({
        open: true,
        message: 'Série excluída com sucesso!',
        severity: 'success',
      });
    } catch (error) {
      setFeedback({
        open: true,
        message: 'Erro ao excluir a série.',
        severity: 'error',
      });
    }
  };

  const handleEdit = (serie) => {
    navigate(`/cadastro/${serie.id}`);
  };

  const seriesFiltradas = useMemo(() => {
    return series.filter((serie) => {
      const termo = busca.toLowerCase();
      return (
        serie.titulo?.toLowerCase().includes(termo) ||
        serie.categoria?.toLowerCase().includes(termo) ||
        serie.diretor?.toLowerCase().includes(termo)
      );
    });
  }, [series, busca]);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', color: '#6f42c1', fontWeight: 700, mb: 3 }}
      >
        Lista de séries
      </Typography>

      <TextField
        fullWidth
        label="Buscar por título, categoria ou diretor"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        sx={{ mb: 3, backgroundColor: '#fff' }}
      />

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <SerieList series={seriesFiltradas} onEdit={handleEdit} onDelete={handleDelete} />
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

export default Lista;