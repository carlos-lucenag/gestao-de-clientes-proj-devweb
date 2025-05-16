import pool from "../config/db.mjs";

export async function getClients() {
  const query = "SELECT * FROM client;";

  const result = await pool.query(query);

  return result.rows;
}

export async function createClient(clientCredentials) {
  const first_name = clientCredentials.first_name;
  const last_name = clientCredentials.last_name;
  const email = clientCredentials.email;
  const cpf = clientCredentials.cpf;
  const phone = clientCredentials.phone;
  const city = clientCredentials.city;

  const query = `
    INSERT INTO client (first_name, last_name, email, cpf, phone, city)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [first_name, last_name, email, cpf, phone, city];
  const result = await pool.query(query, values);

  return result.rows[0];
}

export async function getClientById(clientId) {
  const query = `SELECT * FROM client WHERE id = $1`;
  const values = [clientId];

  const result = await pool.query(query, values);

  return result.rows[0];
}

export async function updateClient(clientId, clientCredentials) {
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
    clientCredentials.first_name,
    clientCredentials.last_name,
    clientCredentials.email,
    clientCredentials.cpf,
    clientCredentials.phone,
    clientCredentials.city,
    clientId,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
}

export async function deleteClientById(clientId) {
  const query = `DELETE FROM client WHERE id = $1`;
  const id = [clientId];

  const result = await pool.query(query, id);

  return result;
}

export async function searchClientByName(clientName) {
  const query = `SELECT * FROM client WHERE first_name ILIKE $1`;
  const values = [`${clientName}%`];
  const result = await pool.query(query, values);

  return result.rows;
}

export async function searchClientByCity(clientCity) {
  const query = `SELECT * FROM client WHERE city ILIKE $1`;
  const values = [`${clientCity}%`];
  const result = await pool.query(query, values);

  return result.rows;
}
