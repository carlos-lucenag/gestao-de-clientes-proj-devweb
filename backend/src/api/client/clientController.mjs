import asyncHandler from "express-async-handler";
import * as clientService from "./clientService.mjs";

//@desc     Get all clients
//@route    GET /api/clients
//@access   Public
export const getAllClients = asyncHandler(async (req, res) => {
  const result = await clientService.findAllClients();
  res.status(200).json(result);
});

//@desc     Get a client by its ID
//@route    GET /api/clients/:id
//@access   Public
export const getClientById = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) throw new Error("Invalid client ID");

  const result = await clientService.findById(req.params.id);
  res.status(200).json(result);
});

//@desc     Create a new client
//@route    POST /api/clients
//@access   Public
export const postClient = asyncHandler(async (req, res) => {
  const data = req.body;
  const result = await clientService.registerClient(data);
  res.status(201).json(result);
});

//@desc     Update a client
//@route    PUT /api/clients/:id
//@access   Public
export const updateClient = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) throw new Error("Invalid client ID");

  const data = req.body;
  const result = await clientService.updateClientById(id, data);
  res.status(200).json(result);
});

//@desc     Delete a client
//@route    DELETE /api/clients/:id
//@access   Public
export const deleteClient = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) throw new Error("Invalid client ID");

  const result = await clientService.deleteClient(id);
  res.status(200).json(result);
});

// @desc    Search for a client by it's first name
// @route   GET /api/clients/search?name=<first_name>
// @access  Public
export const searchClientByName = asyncHandler(async (req, res) => {
  const name = req.query.name;
  const result = await clientService.getClientsByName(name);
  res.status(200).json(result);
});

// @desc    Search for a client by it's city
// @route   GET /api/clients/search/city?city=<city>
// @access  Public
export const searchClientByCity = asyncHandler(async (req, res) => {
  const city = req.query.city;
  const result = await clientService.getClientsByCity(city);
  res.status(200).json(result);
});
