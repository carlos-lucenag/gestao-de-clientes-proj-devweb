require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: 'carlos',
  host: 'localhost',
  database: 'gestao_de_clientes',
  password: 'carlos',
  port: 5432,
});

module.exports = pool;
