const express = require("express");
const pool = require("./backend/db");
const app = express();
const port = 3000;

const clientsRoutes = require("./backend/src/routes/clients");

app.use(express.json());
app.use("/clients", clientsRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while connecting to database");
  }
});
