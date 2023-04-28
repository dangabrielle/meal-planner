const Ingredient = require("../models/ingredient");

async function deleteOne(req, res) {
  try {
    const deleteItem = await Ingredient.findByIdAndRemove(req.params.id); //finds ingredient by id and removes
    res.redirect("/shopping-list");
  } catch (error) {
    console.log(error);
    res.render("error", { title: "Something went wrong" });
  }
}

async function index(req, res) {
  try {
    const allIngredients = await Ingredient.find({}).populate("ingredientName"); // queries all ingredients and populates the name
    res.render("shopping-list/index", {
      title: "Shopping List",
      Ingredient: allIngredients,
    });
  } catch (error) {
    res.render("error", {
      title: "Something went wrong",
    });
  }
}

module.exports = {
  index,
  delete: deleteOne,
};
