const express = require("express");
const router = express.Router();

const recipesController = require("../controllers/recipes");

router.get("/new", recipesController.new);
router.post("/", recipesController.create);
router.get("/:id", recipesController.show);

module.exports = router;
