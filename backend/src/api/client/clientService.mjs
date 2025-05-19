import clientModel from "./clientModel.mjs";
const {
  getClients,
  createClient,
  getClientById,
  updateClient,
  deleteClientById,
  searchClientByName,
  searchClientByCity,
} = clientModel;

export async function findAllClients() {
  const result = await getClients();
  return result;
}

export async function registerClient(clientCredentials) {
  const email = clientCredentials.email;

  if (!email.includes("@")) {
    throw new Error("Invalid email");
  }

  return await createClient(clientCredentials);
}

export async function findById(clientId) {
  const client = await getClientById(clientId);

  if (!client) {
    return { msg: `There is no client with id = ${clientId}.` };
  }

  return client;
}

export async function updateClientById(clientId, clientCredentials) {
  const updatedClient = await updateClient(clientId, clientCredentials);

  if (!updatedClient) {
    return { msg: `There is no client with id = ${clientId}.` };
  }

  return updatedClient;
}

export async function deleteClient(clientId) {
  const result = await deleteClientById(clientId);

  return result;
}

export async function getClientsByName(clientName) {
  const result = await searchClientByName(clientName);

  if (!result) {
    return { msg: `There is no client with name = ${clientName}.` };
  }

  return result;
}

export async function getClientsByCity(clientCity) {
  const result = await searchClientByCity(clientCity);

  if (!result) {
    return { msg: `There is no client with city = ${clientCity}.` };
  }

  return result;
}
