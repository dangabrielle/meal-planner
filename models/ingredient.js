const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
  {
    ingredientName: {
      type: Array,
    },
  }, {timestamps: true }
  );

module.exports = mongoose.model("Ingredient", ingredientSchema);
