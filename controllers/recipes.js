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
    req.body.ingredientName = req.body.ingredientName.trim(); // remove space chars at beginning or ending of string
    req.body.ingredientName = req.body.ingredientName.split(/\s*,\s*/); // split comma seperated names into array

    const newIngredient = await Ingredient.create(req.body);
    const ingredientId = newIngredient._id;
    // const ingredient = await Ingredient.find({}).sort("ingredientName");
    // console.log(ingredient);
    const recipe = await Recipe.create(req.body);
    recipe.ingredients.push(ingredientId);
    // recipe.ingredients.push(ingredient);
    // console.log(recipe);
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
    // console.log(foundRecipe);
    const foundIngredient = await Recipe.findById(req.params.id).populate(
      "ingredients"
    );

    const findIngredient = await foundIngredient.ingredients;
    const ingredients = await Ingredient.find({
      _id: { $nin: foundRecipe.ingredients },
    }).sort("newIngredient");
    console.log(findIngredient);

    console.log(foundIngredient);
    res.render("recipes/show", {
      title: "Your Recipe",
      recipe: foundRecipe,
      ingredient: findIngredient,
      newIngredient: ingredients,
    });
  } catch (error) {
    res.render("error", { title: "Something went wrong" });
  }
}

async function addToRecipe(req, res) {
  try {
    const recipe = await Recipe.findById(req.params.id);
    recipe.ingredients.push(req.body.ingredientId);
    await recipe.save();
    res.redirect(`/recipes/${recipe._id}`);
  } catch (error) {
    res.render("error", { title: "Something went wrong" });
  }
}

module.exports = {
  new: newRecipe,
  create,
  show,
  addToRecipe,
};
