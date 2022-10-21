const express = require('express');
const app = express();

//Inicializamos BD
require('./config/mongoose.config');

//Para usar json y obtener datos de la URL
app.use(express.json(), express.urlencoded({ extended: true }));

//Importar Rutas
const misRutas = require("./routes/estudiante.routes");
misRutas(app);

//Ejecutamos server
app.listen(8000, ()=>console.log("Servidor corriendo"));