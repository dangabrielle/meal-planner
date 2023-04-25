const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");

function newRecipe(req, res) {
  res.render("recipes/new", {
    recipe: "ingredients",
    title: "Enter a new Recipe",
  });
}

async function create(req, res) {
  try {
    // const ingredient = req.body;
    // ingredient.ingredients = req.params.id;
    const newIngredient = await Ingredient.create(req.body);
    const ingredientId = newIngredient._id;
    const recipe = await Recipe.create(req.body);
    recipe.ingredients.push(ingredientId);
    console.log(recipe);
    recipe.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("error", { title: "Something went wrong" });
  }
}

async function show(req, res) {
  try {
    const foundRecipe = await Recipe.findById(req.params.id);
    res.render("recipes/show", {
      title: "Your Recipe",
      recipe: foundRecipe,
    });
  } catch (error) {
    res.render("error", { title: "Something went wrong" });
  }
}

module.exports = {
  new: newRecipe,
  create,
  show,
};
