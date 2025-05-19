import pool from "../../config/db.mjs";

/**
 * Returns all clients from the database
 * 
 * @returns {Promise<Array>} Client list
 */
async function getClients() {
  const query = "SELECT * FROM client;";

  const result = await pool.query(query);

  return result.rows;
}

/**
 * Creates a new client in the database
 * 
 * @param {Object} data - Data of the new client
 * @param {string} data.first_name - Client's first name
 * @param {string} data.last_name - Client's last name
 * @param {string} data.email - Client's email
 * @param {string} data.cpf - Client's cpf
 * @param {string} data.phone - Client's phone
 * @param {string} data.city - Client's city
 * 
 * @returns {Promise<Object>} Created client with all fields returned by the database
 */
async function createClient(data) {
  const query = `
    INSERT INTO client (first_name, last_name, email, cpf, phone, city)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [
    data.first_name,
    data.last_name,
    data.email,
    data.cpf,
    data.phone,
    data.city,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
}

async function getClientById(id) {
  const query = `SELECT * FROM client WHERE id = $1`;
  const values = [id];

  const result = await pool.query(query, values);

  return result.rows[0];
}

async function updateClient(id, data) {
  const query = `
    UPDATE client
    SET first_name = $1,
        last_name = $2,
        email = $3,
        cpf = $4,
        phone = $5,
        city = $6
    WHERE id = $7
    RETURNING *;
  `;

  const values = [
    data.first_name,
    data.last_name,
    data.email,
    data.cpf,
    data.phone,
    data.city,
    id,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
}

async function deleteClientById(id) {
  const query = `DELETE FROM client WHERE id = $1`;
  const result = await pool.query(query, id);

  return result.rows[0];
}

async function searchClientByName(name) {
  const query = `SELECT * FROM client WHERE first_name ILIKE $1`;
  const values = [`${name}%`];
  const result = await pool.query(query, values);

  return result.rows;
}

async function searchClientByCity(city) {
  const query = `SELECT * FROM client WHERE city ILIKE $1`;
  const values = [`${city}%`];
  const result = await pool.query(query, values);

  return result.rows;
}

export default {
  getClients,
  createClient,
  getClientById,
  updateClient,
  deleteClientById,
  searchClientByName,
  searchClientByCity,
};
