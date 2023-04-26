const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shoppingListSchema = new Schema(
  {
    name: {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShoppingList", shoppingListSchema);
