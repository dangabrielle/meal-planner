const express = require("express");
const router = express.Router();

const ingredientsController = require("../controllers/ingredients");
router.get("/new", ingredientsController.new);
router.post("/", ingredientsController.create);

module.exports = router;
