const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const budgetApp = express();

budgetApp.use(logger("dev"));

budgetApp.use(compression());
budgetApp.use(express.urlencoded({ extended: true }));
budgetApp.use(express.json());

budgetApp.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/budget',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }

budgetApp.use(require("./routes/api.js"));

budgetApp.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});