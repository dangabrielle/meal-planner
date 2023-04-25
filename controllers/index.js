const Recipe = require("../models/recipe");

async function home(req, res) {
  try {
    const foundRecipe = await Recipe.find({});
    console.log(foundRecipe);
    res.render("index", { title: "Weekly Meal Planner", recipe: foundRecipe });
  } catch (error) {
    res.render("error", { title: "Something went wrong" });
  }
}

module.exports = {
  home,
};
