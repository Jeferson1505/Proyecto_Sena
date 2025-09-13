const mysql = require('mysql');

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',      
  user: 'root',           
  password: '',           
  database: 'laminas_metal' 
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida con éxito.');
});

// Exportar la conexión para usarla en otros archivos
module.exports = connection;

