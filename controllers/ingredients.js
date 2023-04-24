const Recipe = require("../models/recipe");


async function create(req, res) {
    try {
        const foundRecipe = await Recipe.findById(req.params.id);
        let newIngredientObj = foundRecipe.ingredients.push(req.body);
        console.log(newIngredientObj)
        await foundRecipe.save();
        
    } catch (error) {
        console.log(error);
        res.render('error', {title: 'Something went wrong'});
    }
};


module.exports = {
    create
};