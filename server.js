const express = require("express");
require("dotenv").config();

const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Api Running...");
});

app.use(routes);

app.all("/", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
