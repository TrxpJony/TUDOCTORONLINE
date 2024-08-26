// server.js
import express from 'express';
const app = express();
const port = 3001;

app.use(express.json());

// Configurar el endpoint /citas
app.post('/citas', (req, res) => {
  const citaData = req.body;
  console.log('Datos de la cita recibidos:', citaData);

  // Aquí puedes agregar la lógica para guardar la cita en una base de datos

  res.status(201).json({ message: 'Cita agendada exitosamente' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
