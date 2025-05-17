import express from "express";
import router from "./api/client/clientRoutes.mjs";
import errorHandler from "./middlewares/errorHandler.mjs";
import pool from "./config/db.mjs";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/clients", router);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 'Connected to PostgreSQL!' AS message`
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error while connecting to PostgreSQL");
  }
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use(errorHandler);

export default app;
