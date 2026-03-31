import { Box, Paper, Typography } from '@mui/material';

function Sobre() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
      <Paper elevation={3} sx={{ p: 5, maxWidth: 700, borderRadius: 3 }}>
        <Typography variant="h4" sx={{ color: '#6f42c1', fontWeight: 700, mb: 2 }}>
          Sobre o Projeto
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          Este é um projeto de gerenciamento de séries assistidas desenvolvido com React
          para a disciplina Desenvolvimento de Sistemas Frontend. Aqui você pode cadastrar,
          visualizar, editar e excluir séries assistidas consumindo os dados da API
          serieJournal-api.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Sobre;