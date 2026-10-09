import React from 'react'
import { Card, CardContent, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Alert, Button, Chip } from '@mui/material'

function TablaTropas({ tropas = [], onEliminarGuerrero = null }) {

  if (!tropas?.length) {
    return <Alert severity="info">No hay tropas desplegadas en el ejército de Sauron.</Alert>
  }

  const handleEliminar = (guerrero) => {
    onEliminarGuerrero(guerrero.id)
  }

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="Despliegue del Ejército" />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Categoría / Rango</TableCell>
                <TableCell>Nivel</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tropas.map((g) => (
                <TableRow key={g.id}>
                  <TableCell>{g.nombre}</TableCell>
                  <TableCell>
                    {/* Chip con color condicional por tipo: Orco vs Uruk */}
                    <Chip 
                      label={g.tipo} 
                      color={g.tipo === 'Orco' ? 'warning' : 'secondary'} 
                      size="small" 
                    />
                  </TableCell>
                  <TableCell>{g.categoria}</TableCell>
                  <TableCell>{g.nivelCombate}</TableCell>
                  <TableCell>
                    <Button 
                      variant="outlined" 
                      color="error" 
                      size="small" 
                      onClick={() => handleEliminar(g)}
                    >
                      Asesinado por la aparición
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default TablaTropas