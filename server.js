const express = require("express");
const logger = require("morgan");
const indexRoutes = require("./routes/index");
const recipeRoutes = require("./routes/recipes");
const shoppingListRoutes = require("./routes/shopping-list");
const ingredientRoutes = require("./routes/ingredients");

const app = express();
const methodOverride = require("method-override");

app.set("view engine", "ejs");

require("dotenv").config();
require("./config/database");

app.use(logger("dev"));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));

app.use("/", indexRoutes);
app.use("/ingredients", ingredientRoutes);
app.use("/recipes", recipeRoutes);

app.use("/shopping-list", shoppingListRoutes);

app.use("*", (req, res) => {
  res.render("404", { title: "404 - Page Not Found" });
});
app.listen(process.env.PORT || 3000);
