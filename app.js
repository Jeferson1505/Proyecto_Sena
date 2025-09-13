const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;




// Importar rutas
const laminasRoutes = require('./routes/laminas');
const tipoLaminaRoutes = require('./routes/tipo-laminas');
const maquinasRoutes = require('./routes/maquinas');
const authRoutes = require('./routes/auth'); // NUEVO

// Middleware para leer JSON
app.use(bodyParser.json());

// Rutas
app.use(express.static('public'));
app.use('/laminas', laminasRoutes);
app.use('/tipo-laminas', tipoLaminaRoutes);
app.use('/maquinas', maquinasRoutes);
app.use('/auth', authRoutes);

app.get('./login',(req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});


// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
