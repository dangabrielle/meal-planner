const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const ingredientSchema = new Schema(
//   {
//     ingredientName: { type: String },
//     quantity: { type: Number },
//   },
//   { timestamps: true }
// );

const recipeSchema = new Schema(
  {
    dayOfWeek: {
      type: String,
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      required: true,
    },
    entreeName: {
      type: String,
      required: true,
    },
    cookTime: {
      type: Number,
    },
    ingredients: { type: String },
    // directions: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
