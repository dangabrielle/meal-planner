const Recipe = require("../models/recipe");
const IngredientModel = require("../models/ingredient");



function newRecipe(req, res) {
  res.render("recipes/new", 
  {
    recipe: "ingredients",
    title: "Enter a new Recipe",
  });
}

async function create(req, res) {
  try {
    req.body.ingredientName = req.body.ingredientName.trim(); // remove space chars at beginning or ending of string
    req.body.ingredientName = req.body.ingredientName.split(/\s*,\s*/); // split comma seperated names into array
    const newIngredient = await IngredientModel.create(req.body); //create method Ingredient Model is called with modified req.body object
    const ingredientId = newIngredient._id; //object's id property is assigned to variable
    const recipe = await Recipe.create(req.body); //create method Recipe Model is called with original req.body object
    recipe.ingredients.push(ingredientId); //resulting recipe object's ingredients array is updated with IngredientId
    await recipe.save(); //recipe object saved
    res.redirect("/");
      } catch (error) {
    console.log(error);
    res.render("error", 
        { 
          title: "Something went wrong" 
        });
      }
}

async function updateRecipe(req, res) {
    try {
        const findRecipe = await Recipe.findById(req.params.id); //find the recipe by Id
        findRecipe.dayOfWeek = req.body.dayOfWeek //updates the values in all fields using req.body object
        findRecipe.cookTime = req.body.cookTime
        findRecipe.entreeName = req.body.entreeName
        findRecipe.directions = req.body.directions
        await findRecipe.save(); //saves new recipe
        res.redirect(`/recipes/${findRecipe._id}`) //renders new recipe
        } catch (error) { 
          console.log(error)
          res.render("error", { title: "Something went wrong" });
        }
}

async function show(req, res) {
  try {
    const foundRecipe = await Recipe.findById(req.params.id); //finds recipe by id
    const populateIng = await Recipe.findById(req.params.id).populate("ingredients"); //populates the ingredients field and stores in variable
    const grabIngredient = await populateIng.ingredients; //grabs the ingredients array and stores in in new variable
    const sortedIngredients = await IngredientModel.find({_id: { $nin: foundRecipe.ingredients }}).sort("newIngredient"); //finds all ingredients that are not already in recipe's ingredients array and stores and sorts result
    res.render("recipes/show", 
        {
          title: "Your Recipe",
          recipe: foundRecipe,
          ingredient: grabIngredient,
          newIngredient: sortedIngredients,
        });
      } catch (error) {
        console.log(error)
        res.render("error", 
        { 
          title: "Something went wrong" 
        });
      }
}

async function addToRecipe(req, res) {
  try {
    const recipe = await Recipe.findById(req.params.id);//finds recipe by id
    recipe.ingredients.push(req.body.ingredientId); //pushes ingredientID from req.body into ingredients array
    await recipe.save();
    res.redirect(`/recipes/${recipe._id}`);
      } catch (error) {
    res.render("error", 
        { 
          title: "Something went wrong" 
        });
      }
}

module.exports = {
  new: newRecipe,
  create,
  show,
  addToRecipe,
  updateRecipe,
};
