const Ingredient = require("../models/ingredient");

async function index(req, res) {
  try {
    const allIngredients = await Ingredient.find({}).populate('ingredientName')
    console.log(allIngredients);

    res.render("shopping-list/index", 
    { 
        title: "Weekly Meal Planner", 
        Ingredient: allIngredients,
    });
  } catch (error) {
    res.render("error", { title: "Something went wrong" });
  }
}

module.exports = {
  index,
};
