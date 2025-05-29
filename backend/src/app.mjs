import express from "express";
import router from "./api/client/clientRoutes.mjs";
import errorHandler from "./middlewares/errorHandler.mjs";
import pool from "./config/db.mjs";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, OPTIONS, GET");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/clients", router);


app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
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
