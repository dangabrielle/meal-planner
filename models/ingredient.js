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
        min: 1,
        required: true,
    },
    unit: {
      type: String,
      enum: ['Cup', '1/2 Cup', '1/4 Cup', '1/3 Cup', 'Whole','Tablespoon','1/2 Tbsp', '1/4 Tbsp', '1/3 Tbsp', 'Teaspoon', '1/2 Tsp', '1/4 Tsp', '1/3 Tsp', 'Pinch', 'Ounce' ],
      required: true,
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ingredient", ingredientSchema);
