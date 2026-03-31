import { Box, Paper, Typography } from '@mui/material';

function Home() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
      <Paper elevation={3} sx={{ p: 5, maxWidth: 520, textAlign: 'center', borderRadius: 3 }}>
        <Typography variant="h3" sx={{ color: '#6f42c1', fontWeight: 700, mb: 2 }}>
          Página Inicial
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          Bem-vindo ao projeto CRUD de séries!
        </Typography>
        <Typography variant="body1">
          Gerencie séries assistidas de uma forma fácil e intuitiva.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Home;