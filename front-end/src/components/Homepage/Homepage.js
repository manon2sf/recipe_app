/**
 *  components/Homepage/Homepage.js - Homepage Component
 */

/* Modules and components imports */
import React, { useState, useEffect } from "react";
import fetchFromApi from "../../assets/lib/fetch";
/* Style import */
import "./style.scss";

/* App component */
function Homepage(props) {
  /*
   * State
   */
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({});

  /*
   * Effects
   */
  useEffect(() => {
    getIngredients();
  }, []);

  /*
   * Methods
   */

  /* Handle text inputs */
  const handleInput = (e) => {
    setNewIngredient({ ...newIngredient, [e.target.name]: e.target.value });
  };

  /* Display ingredients */
  const displayIngredients = () =>
    ingredients.map((ingredient, key) => (
      <li key={key}>
        <p className="category">{ingredient.category}</p> 
        <p className="name">{ingredient.name}</p>
        <p className="unit">{ingredient.unit}</p>
      </li>
    ));

  /* GET ingredients */
  const getIngredients = () => {
    fetchFromApi("GET", "/ingredients").then(
      (data) => {
       if (Array.isArray(data.ingredients)) {
          setIngredients(data.ingredients);
        }
      },
      (error) => {
        console.error("An error as occured while fetching ingredients");
      }
    );
  };

  /* Add posts */
  const addIngredient = () => {
    if (!newIngredient.name || !newIngredient.unit) {
      return;
    }

    fetchFromApi("POST", "/ingredient", newIngredient).then(
      (data) => {
        if (data.success) {
          setIngredients([...ingredients, newIngredient]);
          setNewIngredient({});
        }
      },
      (error) => {
        console.error("An error as occured while submitting ingredient");
      }
    );
  };

  return (
    <div className="page-container">
      <h2>Home</h2>
      <ul>{displayIngredients()}</ul>
      <div className="input-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          value={newIngredient.name}
          onChange={handleInput}
        />
         <label for="category">Category</label>
        <input
          type="text"
          name="category"
          value={newIngredient.category}
          onChange={handleInput}
        />
         <label for="unit">Unit</label>
        <input
          type="text"
          name="unit"
          value={newIngredient.unit}
          onChange={handleInput}
        />
        <button onClick={addIngredient}>Envoyer</button>
      </div>
    </div>
  );
}

export default Homepage;
