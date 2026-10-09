import { useState } from 'react'
import { Container, Grid, ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Navbar from './components/Navbar'
import FormGuerrero from './components/FormGuerrero'
import TablaTropas from './components/TablaTropas'


const temaMordor = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d32f2f', // Rojo Sauron
    },
    secondary: {
      main: '#0288d1', // Azul Celebrimbor/Uruk
    },
  },
  typography: {
    fontFamily: "'Cinzel', serif",
  },
})



function App() {
  // Estado global de la lista de tropas/guerreros
  const [tropas, setTropas] = useState([])

  // Función para agregar un nuevo guerrero a la lista
  const handleCreateGuerrero = (nuevoGuerrero) => {
    setTropas([...tropas, nuevoGuerrero])
  }

  // Función para eliminar un guerrero por su id ("Asesinado por la aparición")
  const handleEliminarGuerrero = (id) => {
    setTropas(tropas.filter((guerrero) => guerrero.id !== id))
  }

return (
    <ThemeProvider theme={temaMordor}>
      <CssBaseline />
      <div>
        <Navbar />
        <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormGuerrero onCreateGuerrero={handleCreateGuerrero} />
            </Grid>
            <Grid item xs={12}>
              <TablaTropas 
                tropas={tropas} 
                onEliminarGuerrero={handleEliminarGuerrero} 
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  )
  
}

export default App
