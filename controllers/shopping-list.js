const Ingredient = require("../models/ingredient");
const ShopplingList = require("../models/shopping-list");

async function deleteOne(req, res) {
  try {
    const deleteItem = await Ingredient.findByIdAndRemove(req.params.id);
    res.redirect("/shopping-list");
  } catch (error) {
    res.render("error", { title: "Something went wrong" });
  }
}


async function index(req, res) {
  try {
    const allIngredients = await Ingredient.find({}).populate("ingredientName");
    console.log(allIngredients);

    res.render("shopping-list/index", {
      title: "Shopping List",
      Ingredient: allIngredients,
    });
  } catch (error) {
    res.render("error", { title: "Something went wrong" });
  }
}

module.exports = {
  index,
  delete: deleteOne,

};
