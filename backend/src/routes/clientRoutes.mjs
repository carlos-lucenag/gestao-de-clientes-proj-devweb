import express from "express";

const router = express.Router();

import {
  getClients,
  getClientById,
  postClient,
  updateClient,
  deleteClient,
  searchClient,
  searchClientByCity,
} from "../controllers/clientController.mjs";

router.route("/").get(getClients);

router.route("/search").get(searchClient);
router.route("/search/city").get(searchClientByCity);

router.route("/:id").get(getClientById);

router.route("/").post(postClient);

router.route("/:id").put(updateClient);

router.route("/:id").delete(deleteClient);

export default router;
