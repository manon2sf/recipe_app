/**
 * controllers/ingredient - Ingredients controller
 */

/* Model import */
const Ingredient = require("../models/Ingredient");

/* Ingredient controller */
const ingredients = {
  /* Get all ingredients */
  getIngredients: (req, res) => {
    Ingredient.find({}, (error, data) => {
      if (error) {
        res.status(500).json({
          success: false,
          msg: "An error has occured getting posts.",
        });
        return;
      }

      res.json({
        ingredients: data,
      });
    });
  },

  /* Create ingredients */
  createIngredient: (req, res) => {
    console.log(req.body);
    const [name, category, unit] = [req.body.name, req.body.category, req.body.unit];

    if (!name || !unit) {
      res.status(400).json({
        success: false,
        msg: "name and unit are both required",
      });
    }

    const newIngredient = new Ingredient({
      name:name,
      category: category,
      unit:unit
    });

    newIngredient.save((error) => {
      if (error) {
        res.status(500).json({
          success: false,
          msg: "An error has occured during ingredient creation.",
        });
        return;
      }

      res.status(200).json({
        success: true,
      });
    });
  },
};

module.exports = ingredients;
