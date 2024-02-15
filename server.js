const express = require("express");
// const Pizza = require("./models/pizzaModel");
const Pizza = require("./models/pizzaModel");
const app = express();
const db = require("./db");
app.use(express.json());

const pizzasRoute = require("./routes/pizzaRoute");

//simple routers
app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api/pizzas/", pizzasRoute);
const port = process.env.PORT || 8000;
app.listen(port, () => `Listening on port ${port}...`);
