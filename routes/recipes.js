const express = require("express");
const router = express.Router();

const recipesController = require("../controllers/recipes");
const ingredientsController = require("../controllers/ingredients");
router.get("/new", recipesController.new);
router.post("/", recipesController.create);
router.get("/:id", recipesController.show);
router.post("/:id/ingredients", recipesController.addToRecipe);
router.put('/show', recipesController.update);

module.exports = router;
