const express = require("express");
const router = express.Router();

const recipesController = require("../controllers/recipes");

router.get("/new", recipesController.new);
router.post("/", recipesController.create);

module.exports = router;
