import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function SerieList({ series, onEdit, onDelete }) {
  if (series.length === 0) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
        Nenhuma série cadastrada.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 3,
      }}
    >
      {series.map((serie) => (
        <Card key={serie.id} elevation={3} sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {serie.titulo}
            </Typography>
            <Typography><strong>Número de temporadas:</strong> {serie.temporadas}</Typography>
            <Typography><strong>Data de lançamento:</strong> {serie.dataLancamento}</Typography>
            <Typography><strong>Diretor:</strong> {serie.diretor}</Typography>
            <Typography><strong>Produtora:</strong> {serie.produtora}</Typography>
            <Typography><strong>Categoria:</strong> {serie.categoria}</Typography>
            <Typography><strong>Data em que assistiu:</strong> {serie.dataAssistido}</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <IconButton color="primary" onClick={() => onEdit(serie)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => onDelete(serie.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default SerieList;