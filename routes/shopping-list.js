const express = require("express");
const router = express.Router();

const shoppingListController = require("../controllers/shopping-list");

router.get("/", shoppingListController.index);
// router.post("/new", shoppingListController.create);
router.delete("/:id", shoppingListController.delete);

module.exports = router;
