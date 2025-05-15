import express from "express";

const router = express.Router();

import {
  getClients,
  getClientById,
  postClient,
  updateClient,
  deleteClient,
} from "../controllers/clientController.mjs";

router.route("/").get(getClients);

router.route("/:id").get(getClientById);

router.route("/").post(postClient);

router.route("/:id").put(updateClient);

router.route("/:id").delete(deleteClient);

export default router;
