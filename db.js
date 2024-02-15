const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://amanrajput23411:amanrajput@cluster0.fnl9kfy.mongodb.net/food-delivery";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("mongodb-database connected");
});

db.on("error", () => {
  console.log("mongodb-connection failed");
});

module.exports = mongoose;
