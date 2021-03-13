/**
 * routes/index.js - Main router file
 */

/* Module Imports */
const express = require("express");
const router = express.Router();

/* Controllers */
const ingredient = require("../controllers/ingredient");

/**
 *   Routes
 */

/* GET ingredients */
router.get("/ingredients", ingredient.getIngredients);

/* POST ingredient */
router.post("/ingredient", ingredient.createIngredient);

module.exports = router;
