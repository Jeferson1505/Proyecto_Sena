// routes/laminas.js
const express = require('express');
const router = express.Router();
const connection = require('../database');

// Crear una lámina
router.post('/', (req, res) => {
  const { largo, ancho, id_tipo } = req.body;

  if (!largo || !ancho || !id_tipo) {
    return res.status(400).json({ error: 'Todos los campos (largo, ancho, id_tipo) son requeridos.' });
  }

  const query = 'INSERT INTO laminas (largo, ancho, id_tipo) VALUES (?, ?, ?)';
  connection.query(query, [largo, ancho, id_tipo], (err, results) => {
    if (err) {
      console.error('Error al insertar la lámina:', err);
      return res.status(500).json({ error: 'Error al insertar la lámina.' });
    }
    res.status(201).json({ message: 'Lámina agregada exitosamente', id: results.insertId });
  });
});
9

// Obtener todas las láminas
router.get('/', (req, res) => {
  const query = 'SELECT * FROM usuarios';
  connection.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener los usuarios.' });
    res.status(200).json(results);
  });
});

// Obtener una lámina por ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM usuarios WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener el usuario por id.' });
    if (results.length === 0) return res.status(404).json({ message: 'usuario no encontrada.' });
    res.status(200).json(results[0]);
  });
});

module.exports = router;
