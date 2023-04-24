const express = require('express');
const router = express.Router();

const ingredientsController = require('../controllers/ingredients');


router.post('/recipes/new', ingredientsController.create);


module.exports = router;