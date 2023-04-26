const express = require("express");
const router = express.Router();

const shoppingListController = require('../controllers/shopping-list')

router.get("/", shoppingListController.index);
router.delete('/:id', shoppingListController.delete);
module.exports = router;
