const Recipe = require('../models/recipe');



function newRecipe(req, res) {
    res.render('recipes/new', {
        title: 'Enter a new Recipe'
    });
};

module.exports = {
    new: newRecipe,
};