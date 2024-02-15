const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizzaModel");

router.get("/getallpizzas", async (req, res) => {
  const pizzas = await Pizza.find({});
  res.send(pizzas);
});

module.exports = router;
