const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");

async function newIngredient(req, res) {
  try {
    const foundIngredient = await Ingredient.find({});
    res.render("ingredients/new", {
      title: "new ingredient",
      ingredient: foundIngredient,
    });
  } catch (error) {
    console.log(error);
    res.render("error", {
      title: "Something went wrong",
    });
  }
}

async function create(req, res) {
  try {
    //   req.body.ingredientName = req.body.ingredientName.trim(); // remove space chars at beginning or ending of string
    //   req.body.ingredientName = req.body.ingredientName.split(/\s*,\s*/); // split comma seperated names into array

    await Ingredient.create(req.body); //create method Ingredient Model is called with modified req.body object
    //   const ingredientId = newIngredient._id; //object's id property is assigned to variable
    //   const recipe = await Recipe.create(req.body); //create method Recipe Model is called with original req.body object
    //   recipe.ingredients.push(ingredientId); //resulting recipe object's ingredients array is updated with IngredientId
    //   await recipe.save(); //recipe object saved
    res.redirect("/ingredients/new");
  } catch (error) {
    console.log(error);
    res.render("error", {
      title: "Something went wrong",
    });
  }
}

module.exports = {
  create,
  new: newIngredient,
};
