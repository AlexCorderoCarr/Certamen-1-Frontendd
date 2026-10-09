import React, { useState } from 'react'
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardActions, 
  TextField, 
  Button, 
  Select, 
  MenuItem, 
  FormControl, 
  FormLabel, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  Slider, 
  Rating, 
  Typography 
} from '@mui/material'

function FormGuerrero({ onCreateGuerrero = () => {} }) {
  const categorias = [
    { label: "Capitán", value: "Capitán" },
    { label: "Berserker", value: "Berserker" },
    { label: "Explorador", value: "Explorador" },
    { label: "Asediador", value: "Asediador" }
  ]

  // Todo elemento definido como useState corresponde a una propiedad del estado del componente
  const [nombre, setNombre] = useState("")
  const [tipo, setTipo] = useState("Orco") // Valor por defecto: Orco o Uruk
  const [nivelCombate, setNivelCombate] = useState(50) // Slider de 1 a 100
  const [categoria, setCategoria] = useState(categorias[0].value)
  const [furia, setFuria] = useState(1) // Rating de 1 a 5 estrellas

  const limpiarFormulario = () => {
    setNombre("")
    setTipo("Orco")
    setNivelCombate(50)
    setCategoria(categorias[0].value)
    setFuria(1)
  }

  const handleClick = () => {
    // 1. Crear el objeto guerrero con sus atributos
    const guerrero = {}
    guerrero.id = Date.now()
    guerrero.nombre = nombre
    guerrero.tipo = tipo
    guerrero.nivelCombate = nivelCombate
    guerrero.categoria = categoria
    guerrero.furia = furia

    // 2. Avisarle al componente padre (App.jsx) que hay un nuevo guerrero
    onCreateGuerrero(guerrero)
    limpiarFormulario()
  }

  return (
    <Card raised sx={{ mb: 3 }}>
      <CardHeader title="Ingresar Guerrero al Ejército de Sauron" />
      <CardContent>
        {/* 1. Nombre del Guerrero (TextField) */}
        <div className="mt-3">
          <TextField 
            label="Nombre del Guerrero" 
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            fullWidth 
            id="nombre-guerrero" 
          />
        </div>

        {/* 2. Tipo de Guerrero (RadioGroup: Orco vs Uruk) */}
        <div className="mt-3">
          <FormControl component="fieldset">
            <FormLabel component="legend">Tipo de Guerrero</FormLabel>
            <RadioGroup 
              row 
              value={tipo} 
              onChange={e => setTipo(e.target.value)}
            >
              <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
              <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
            </RadioGroup>
          </FormControl>
        </div>

        {/* 3. Nivel de Combate (Slider entre 1 y 100) */}
        <div className="mt-3">
          <Typography gutterBottom>Nivel de Combate: {nivelCombate}</Typography>
          <Slider
            value={nivelCombate}
            onChange={(e, val) => setNivelCombate(val)}
            min={1}
            max={100}
            valueLabelDisplay="auto"
          />
        </div>

        {/* 4. Categoría / Rango (Select) */}
        <div className="mt-3">
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>Categoría / Rango</Typography>
          <Select 
            fullWidth 
            value={categoria}
            onChange={e => setCategoria(e.target.value)} 
            id="categoria-guerrero"
          >
            {categorias.map((c) => (
              <MenuItem key={c.value} value={c.value}>{c.label}</MenuItem>
            ))}
          </Select>
        </div>

        {/* 5. Nivel de Amenaza / Furia (Rating de 1 a 5) */}
        <div className="mt-3">
          <Typography component="legend">Nivel de Amenaza / Furia</Typography>
          <Rating
            name="furia-guerrero"
            value={furia}
            onChange={(e, val) => setFuria(val || 1)}
          />
        </div>
      </CardContent>

      <CardActions>
        <Button 
          onClick={handleClick} 
          fullWidth 
          variant="contained" 
          color="primary"
        >
          Registrar Guerrero
        </Button>
      </CardActions>
    </Card>
  )
}

export default FormGuerrero