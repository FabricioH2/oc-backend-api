// app.js
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api-routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Importante para permitir peticiones desde el Frontend
app.use(express.json()); // Permite a Express leer JSON en el body de las peticiones

// Rutas API
app.use('/api', apiRoutes); 

app.listen(PORT, () => {
    console.log(`API Gateway corriendo en puerto ${PORT}`);
});