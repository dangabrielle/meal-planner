const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");


async function home(req, res) {
  try {
    const foundRecipe = await Recipe.find({}); //finds all the recipes in database
    const foundIngredient = await Ingredient.find({}); //finds all the ingredients in database
    res.render("index", 
        {
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
