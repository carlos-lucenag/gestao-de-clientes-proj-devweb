const express = require('express');
const router = express.Router();
const pool = require('/home/carlos/Documents/gestao-de-clientes-proj-devweb/backend/db');

// GET /clientes → retorna todos os clientes
router.get('/', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM clients');
    res.json(resultado.rows);
  } catch (err) {
    console.error('Error getting clients:', err);
    res.status(500).json({ erro: 'Error getting clients' });
  }
});

module.exports = router;
