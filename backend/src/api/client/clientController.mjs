import expressAsyncHandler from "express-async-handler";
import * as clientService from "./clientService.mjs";

const asyncHandler = expressAsyncHandler;

//@desc Get all clients
//@route GET /api/clients
//@acess public
export const getAllClients = asyncHandler(async (req, res) => {
  try {
    const result = await clientService.findAllClients();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "Error while getting clients" });
  }
});

//@desc Get a client by it's id
//@route GET /api/clients/:id
//@acess public
export const getClientById = asyncHandler(async (req, res) => {
  try {
    const result = await clientService.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error while getting client" });
  }
});

//@desc Create a new client
//@route POST /api/clients
//@acess public
export const postClient = asyncHandler(async (req, res) => {
  const data = req.body;

  try {
    const result = await clientService.registerClient(data);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error while creating client" });
  }
});

//@desc Update a client
//@route PUT /api/client/:id
//@acess public
export const updateClient = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const data = req.body;

  try {
    const result = await clientService.updateClientById(id, data);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Error while updating client" });
  }
});

//@desc Delete a client
//@route DELETE /api/clients/:id
//@acess public
export const deleteClient = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const result = clientService.deleteClient(id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error while deleting client" });
  }
});

// @desc Search for a client by it's first name
// @route GET /api/clients/search?=<first_name>
// @access public
export const searchClientByName = asyncHandler(async (req, res) => {
  const name = req.query.name;
  try {
    const result = await clientService.getClientsByName(name);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error while searching clients" });
  }
});

// @desc Search for a client by it's city
// @route GET /api/clients/search/clientCity?=<city>
// @access public
export const searchClientByCity = asyncHandler(async (req, res) => {
  const city = req.query.city;
  try {
    const result = await clientService.getClientsByCity(city);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error while searching clients" });
  }
});
