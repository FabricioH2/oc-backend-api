// app.js
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api-routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
// Configurar CORS para permitir peticiones desde el frontend
app.use(cors({
  origin: true, // Permitir cualquier origen (en producción, especifica el dominio del frontend)
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); // Permite a Express leer JSON en el body de las peticiones

// Rutas API
app.use('/api', apiRoutes); 

app.listen(PORT, () => {
    console.log(`API Gateway corriendo en puerto ${PORT}`);
});