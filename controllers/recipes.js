const Recipe = require("../models/recipe");

function newRecipe(req, res) {
  res.render("recipes/new", {
    title: "Enter a new Recipe",
  });
}

async function create(req, res) {
  try {
    await Recipe.create(req.body);
    res.redirect("/recipes");
  } catch (error) {
    console.log(error);
    res.render("error", { title: "Something went wrong" });
  }
}

module.exports = {
  new: newRecipe,
  create,
};
