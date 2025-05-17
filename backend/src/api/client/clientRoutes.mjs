import express from "express";
import {
  getAllClients,
  getClientById,
  postClient,
  updateClient,
  deleteClient,
  searchClientByName,
  searchClientByCity,
} from "./clientController.mjs";

const router = express.Router();

router.route("/search/city").get(searchClientByCity);

router.route("/search").get(searchClientByName);

router.route("/:id").get(getClientById);

router.route("/").get(getAllClients);


router.route("/").post(postClient);


router.route("/:id").put(updateClient);


router.route("/:id").delete(deleteClient);

export default router;
