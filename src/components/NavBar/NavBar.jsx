import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';

function NavBar() {
  const linkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? '#6f42c1' : '#f1f1f1',
    color: isActive ? '#fff' : '#333',
    borderRadius: '20px',
    padding: '6px 14px',
    textTransform: 'none',
    fontWeight: 600,
  });

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 4 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#333' }}>
          Series Journal
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button component={NavLink} to="/" style={linkStyle}>
            Home
          </Button>
          <Button component={NavLink} to="/sobre" style={linkStyle}>
            Sobre
          </Button>
          <Button component={NavLink} to="/cadastro" style={linkStyle}>
            Cadastrar
          </Button>
          <Button component={NavLink} to="/lista" style={linkStyle}>
            Lista de séries
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;