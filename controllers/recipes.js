const Recipe = require("../models/recipe");
const IngredientModel = require("../models/ingredient");

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

    const newIngredient = await IngredientModel.create(req.body);
    const ingredientId = newIngredient._id;
    // const ingredient = await IngredientModel.find({}).sort("ingredientName");
    const recipe = await Recipe.create(req.body);
    recipe.ingredients.push(ingredientId);
   
    await recipe.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("error", { title: "Something went wrong" });
  }
}

async function updateRecipe(req, res) {
    try {
        const findRecipe = await Recipe.findById(req.params.id); 

    // req.body.ingredientName = req.body.ingredientName.trim(); // remove space chars at beginning or ending of string
    // req.body.ingredientName = req.body.ingredientName.split(/\s*,\s*/); // split comma seperated names into array
      // console.log(req.body.IngredientModel);
    // const newIngredient = await IngredientModel.create(req.body);
    // const ingredientId = newIngredient._id;
    // findRecipe.ingredients.pop()
    // findRecipe.ingredients.push(ingredientId);
        findRecipe.dayOfWeek = req.body.dayOfWeek

        findRecipe.cookTime = req.body.cookTime
        findRecipe.entreeName = req.body.entreeName
        findRecipe.directions = req.body.directions
        await findRecipe.save();
        res.redirect(`/recipes/${findRecipe._id}`)
    } catch (error) { console.log(error)
        res.render("error", { title: "Something went wrong" });
      }
}

async function show(req, res) {
  try {
    const foundRecipe = await Recipe.findById(req.params.id);
    const populateIng = await Recipe.findById(req.params.id).populate(
      "ingredients"
    );


    const grabIngredient = await populateIng.ingredients;
    const sortedIngredients = await IngredientModel.find({

      _id: { $nin: foundRecipe.ingredients },
    }).sort("newIngredient");
    res.render("recipes/show", {
      title: "Your Recipe",
      recipe: foundRecipe,
      ingredient: grabIngredient,
      newIngredient: sortedIngredients,
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
  updateRecipe,
};
