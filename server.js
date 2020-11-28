const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 4000;

const budgetApp = express();

budgetApp.use(logger("dev"));

budgetApp.use(compression());
budgetApp.use(express.urlencoded({ extended: true }));
budgetApp.use(express.json());

budgetApp.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

budgetApp.use(require("./routes/api.js"));

budgetApp.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});