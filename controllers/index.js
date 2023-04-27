const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");
async function home(req, res) {
  try {
    const foundRecipe = await Recipe.find({});
    const foundIngredient = await Ingredient.find({});
    console.log(foundIngredient);
    res.render("index", {
      title: "Weekly Meal Planner",
      recipe: foundRecipe,
      ingredient: foundIngredient,
    });
  } catch (error) {
    res.render("error", { title: "Something went wrong" });
  }
}

module.exports = {
  home,
};
