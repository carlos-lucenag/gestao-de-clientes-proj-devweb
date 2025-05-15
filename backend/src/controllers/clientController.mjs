import expressAsyncHandler from "express-async-handler";
import pool from "../config/db.mjs";
import * as clientService from "../services/clientService.mjs";

const asyncHandler = expressAsyncHandler;

//@desc Get all clients
//@route GET /api/clients
//@acess public
export const getClients = asyncHandler(async (req, res) => {
  try {
    const result = await clientService.findAllClients();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ msg: "Error while getting clients." });
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
    res.status(400).json({ msg: "Error while getting client." });
  }
});

//@desc Create a new client
//@route POST /api/clients
//@acess public
export const postClient = asyncHandler(async (req, res) => {
  const credentials = req.body;

  try {
    const newClient = await clientService.registerClient(credentials);
    res.status(201).json(newClient);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error while creating new Client");
  }
});

//@desc Update a client
//@route PUT /api/client/:id
//@acess public
export const updateClient = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const credentials = req.body;

  try {
    const updatedClient = await clientService.updateClientById(id, credentials);
    res.status(200).json(updatedClient);
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: error.message });
  }
});

//@desc Delete a client
//@route DELETE /api/clients/:id
//@acess public
export const deleteClient = asyncHandler(async (req, res) => {
  try {
    const result = clientService.deleteClient(req.params.id);
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ msg: `Error while deleting client with id: ${req.params.id}` });
  }
});
