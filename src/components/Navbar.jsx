import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#111827', mb: 4 }}>
      <Toolbar>
        {/* Izquierda: Título */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Anillo Único
        </Typography>

        {/* Espaciador flexible para empujar el texto a la derecha */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Derecha: Lema */}
        <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: '#e5e7eb' }}>
          Uno para dominarlos a todos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}