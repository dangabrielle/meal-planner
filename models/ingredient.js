const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
  {
    ingredientName: { 
        type: String,
        required: true,
        unique: true,
    },
    quantity: { 
        type: Number, 
        required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ingredient", ingredientSchema);
