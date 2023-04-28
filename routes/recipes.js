const express = require("express");
const router = express.Router();

const recipesController = require("../controllers/recipes");
router.get("/new", recipesController.new);
router.post("/", recipesController.create);
router.put('/:id', recipesController.updateRecipe);
router.post("/:id/ingredients", recipesController.addToRecipe);
router.get("/:id", recipesController.show);

module.exports = router;
