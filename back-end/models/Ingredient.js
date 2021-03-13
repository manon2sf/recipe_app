/**
 * models > Ingredient.js - Ingredient model
 */

/* Imports */
const mongoose = require("mongoose");

/* Post Model */
const IngredientSchema = new mongoose.Schema({
  name: String,
  category: String,
  unit: String
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;
