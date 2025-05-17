import express from "express";
import {
  getClients,
  getClientById,
  postClient,
  updateClient,
  deleteClient,
  searchClient,
  searchClientByCity,
} from "./clientController.mjs";

const router = express.Router();

router.route("/").get(getClients);

router.route("/search").get(searchClient);
router.route("/search/city").get(searchClientByCity);

router.route("/:id").get(getClientById);

router.route("/").post(postClient);

router.route("/:id").put(updateClient);

router.route("/:id").delete(deleteClient);

export default router;
