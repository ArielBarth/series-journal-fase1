import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
} from '@mui/material';

const initialState = {
  titulo: '',
  temporadas: '',
  dataLancamento: '',
  diretor: '',
  produtora: '',
  categoria: '',
  dataAssistido: '',
};

function SerieForm({ onSave, serieParaEditar, loading = false }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (serieParaEditar) {
      setFormData({
        ...initialState,
        ...serieParaEditar,
      });
    } else {
      setFormData(initialState);
    }
  }, [serieParaEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.titulo.trim()) newErrors.titulo = 'O título é obrigatório.';
    if (!formData.temporadas) newErrors.temporadas = 'O número de temporadas é obrigatório.';
    if (!formData.dataLancamento) newErrors.dataLancamento = 'A data de lançamento é obrigatória.';
    if (!formData.diretor.trim()) newErrors.diretor = 'O diretor é obrigatório.';
    if (!formData.produtora.trim()) newErrors.produtora = 'A produtora é obrigatória.';
    if (!formData.categoria.trim()) newErrors.categoria = 'A categoria é obrigatória.';
    if (!formData.dataAssistido) newErrors.dataAssistido = 'A data em que assistiu é obrigatória.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    await onSave({
      ...formData,
      temporadas: Number(formData.temporadas),
    });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 700, borderRadius: 3 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'grid', gap: 2 }}
        >
          <TextField
            label="Título"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            error={!!errors.titulo}
            helperText={errors.titulo}
            fullWidth
          />

          <TextField
            label="Número de Temporadas"
            name="temporadas"
            type="number"
            value={formData.temporadas}
            onChange={handleChange}
            error={!!errors.temporadas}
            helperText={errors.temporadas}
            fullWidth
          />

          <TextField
            label="Data de Lançamento da Temporada"
            name="dataLancamento"
            type="date"
            value={formData.dataLancamento}
            onChange={handleChange}
            error={!!errors.dataLancamento}
            helperText={errors.dataLancamento}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Diretor"
            name="diretor"
            value={formData.diretor}
            onChange={handleChange}
            error={!!errors.diretor}
            helperText={errors.diretor}
            fullWidth
          />

          <TextField
            label="Produtora"
            name="produtora"
            value={formData.produtora}
            onChange={handleChange}
            error={!!errors.produtora}
            helperText={errors.produtora}
            fullWidth
          />

          <TextField
            label="Categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            error={!!errors.categoria}
            helperText={errors.categoria}
            fullWidth
          />

          <TextField
            label="Data em que assistiu"
            name="dataAssistido"
            type="date"
            value={formData.dataAssistido}
            onChange={handleChange}
            error={!!errors.dataAssistido}
            helperText={errors.dataAssistido}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/lista')}>
              Cancelar
            </Button>
            <Button type="submit" variant="contained" disabled={loading}>
              {serieParaEditar ? 'Salvar alterações' : 'Salvar'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default SerieForm;