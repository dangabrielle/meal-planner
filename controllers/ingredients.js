const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");

async function create(req, res) {
  try {
    // const ingredient = req.body;
    // ingredient.ingredientName = req.params.id;
    await Recipe.create(req.body);
    res.redirect("/ingredients");
  } catch (error) {
    console.log(error);
    res.render("error", { title: "Something went wrong" });
  }
}

async function newIngredient(req, res) {
  try {
    const foundIngredient = await Ingredient.find({});
    res.render("ingredients/new", {
      ingredient: foundIngredient,
      title: "Enter a new ingredient",
    });
  } catch (error) {
    console.log(error);
    res.render("error", { title: "Something went wrong" });
  }
}

module.exports = {
  create,
  new: newIngredient,
};
