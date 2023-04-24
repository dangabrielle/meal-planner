const express = require("express");
const logger = require("morgan");
const indexRoutes = require("./routes/index");
const recipeRoutes = require("./routes/recipes");

const app = express();

app.set("view engine", "ejs");

require("dotenv").config();
require("./config/database");

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRoutes);
app.use("/recipes", recipeRoutes);

app.use("*", (req, res) => {
  res.render("404", { title: "404 - Page Not Found" });
});
app.listen(3000, () => {
  console.log("express is listening on port: 3000");
});
