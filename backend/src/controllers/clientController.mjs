import expressAsyncHandler from "express-async-handler";
import pool from "../config/db.mjs";

const asyncHandler = expressAsyncHandler;

//@desc Get all clients
//@route GET /api/clients
//@acess public
export const getClients = asyncHandler(async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM client`);
    res.status(200).send(result.rows);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(`Error while getting clients.`)
  }
});

//@desc Get a client by it's id
//@route GET /api/clients/:id
//@acess public
export const getClientById = asyncHandler(async (req, res) => {
  const client = await Client.find;
  res.status(201).json({ msg: `Get client ${req.params.id}` });
});

//@desc Create a new client
//@route POST /api/clients
//@acess public
export const createClient = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("All fields are required.");
  }
  res.status(201).json({ msg: "Create client" });
});

//@desc Update a client
//@route PUT /api/client/:id
//@acess public
export const updateClient = asyncHandler(async (req, res) => {
  res.status(201).json({ msg: `Update client ${req.params.id}` });
});

//@desc Delete a client
//@route DELETE /api/clients/:id
//@acess public
export const deleteClient = asyncHandler(async (req, res) => {
  res.status(201).json({ msg: `Delete client ${req.params.id}` });
});
