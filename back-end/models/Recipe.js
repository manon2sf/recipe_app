/**
 * models > Recipe.js.js - Recipe model
 */

/* Imports */
const mongoose = require("mongoose");

/* Post Model */
const RecipeSchema = new mongoose.Schema({
  name: String,
  category: [String],
  ingredients: {
    type: [IngredientSchema],
    default: [],
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
