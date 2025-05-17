import express from "express";
import dotenv from "dotenv";
import router from "./routes/clientRoutes.mjs";
import errorHandler from "./middlewares/errorHandler.mjs";
import pool from "./config/db.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/clients", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

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
    console.log(error.message);
    res.status(500).send("Error while connecting to PostgreSQL");
  }
});
