const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
  {
    ingredientName: {
      type: Array,
      // required: true,
      // unique: true,
    },
    // quantity: {
    //   type: Number,
    // min: 1,
    // required: true,
  },

  { timestamps: true }
);

module.exports = mongoose.model("Ingredient", ingredientSchema);
